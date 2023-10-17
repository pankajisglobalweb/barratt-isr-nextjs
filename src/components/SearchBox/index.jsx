"use client";
import React, { useEffect, useMemo, useState } from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import Link from 'next/link';
import PropertyPlansLibrary from '@/libraries/PropertyPlansLibrary';
import { GoogleMap, InfoWindow, LoadScript, Marker, useJsApiLoader } from '@react-google-maps/api';
import LoaderComponent from '../LoaderComponent/LoaderComponent';
import { WishlistProvider } from '@/Contexts/WishlistContext';
import WishlistComponent from '../WishlistComponent/WishlistComponent';
import Modal from 'react-bootstrap/Modal';
import FilterForm from '../FilterForm/FilterForm';
import TitleMain from '../TitleMain/TitleMain';


function getDevelopments(searchParams, withoutFilter = false) {
  let queryString = (withoutFilter) ? "" : `?${new URLSearchParams(searchParams)}`;
  return fetch(`${process.env.NEXT_PUBLIC_CMS_API_URL}sell-properties${queryString}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-cache'
  }).then((res) => res.json()).catch(err => { });
}

const SearchBox = () => {
  const [showMap, setShowMap] =useState(true);
  const handleShowMap =() =>{
    setShowMap(mobileMapList => !mobileMapList);
  }
  const [searchParams, setSearchParams] = useState({
    address: '',
    min_price: "",
    max_price: "",
    min_bedrooms: "",
    max_bedrooms: "",
    sortBy: '',
    sortByTitle: ''
  });
  const [isLoading, setIsLoading] = useState(true);
  const [sort, showSort] = useState(false);
  const [properties, setProperties] = useState([]);
  const [showRelatedProperties, setShowRelatedProperties] = useState(false);
  //const [filterParams, setFilterParams] = useState({});
  const [isMapReady, setIsMapReady] = useState(false);
  const [map, setMap] = React.useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [showFilter, setShowFilter] = useState(false);

  const handleFilterClose = () => setShowFilter(false);
  const handleFilterShow = () => setShowFilter(true);

  const center = {
    lat: 51.4986944,
    lng: -0.1962858
  };
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])


  const handleSort = () => {
    showSort(prevNavFlg => !prevNavFlg);
  };
  useEffect(() => {
    getDevelopments(searchParams, true).then((result) => {
      console.log("properties", result?.properties);
      setProperties(result?.properties);
      setIsLoading(false);
    });
    loadGoogleMapScript(() => {
      setIsMapReady(true);
    });
  }, []);
  const loadGoogleMapScript = (callback) => {
    if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
      callback();
    } else {
      const googleMapScript = document.createElement("script");
      googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`;
      window.document.body.appendChild(googleMapScript);
      googleMapScript.addEventListener("load", callback);
    }
  }

  function getPlanInfo(plans) {
    let planLib = new PropertyPlansLibrary(plans);
    return { bedrooms: planLib.getBedsInFormat(), prices: planLib.getPricesInFormat() };
  }

  function handleSearch() {
    setIsLoading(true);
    getDevelopments(searchParams).then((result) => {
      if (result?.total_properties > 0) {
        setShowRelatedProperties(false);
        setProperties(result?.properties);
        setIsLoading(false);
      } else {
        setShowRelatedProperties(true);
        getDevelopments(searchParams, true).then((result) => {
          setProperties(result?.properties);
          setIsLoading(false);
        });
      }
    });
  }
  const handleFilterSubmit = (filterData)=>{
    setSearchParams({...searchParams, ...filterData});
    getDevelopments({...searchParams, ...filterData}).then((result) => {
      if (result?.total_properties > 0) {
        setShowRelatedProperties(false);
        setShowFilter(false);
        setProperties(result?.properties);
        setIsLoading(false);
      }else{
        setShowRelatedProperties(true);
        getDevelopments(searchParams, true).then((result) => {
          setShowFilter(false);
          setProperties(result?.properties);
          setIsLoading(false);
        });
      }
    });
  }

  return (
    <>
      <section className={styles.content}>
        <Container fluid>
          <div className={styles.content_box}>
            <div className={`${styles.list_box} ${showMap ? styles.showMobList : styles.dshowMobList}`} >
              
              <div className={`${styles.list} ${styles.my_scroll}`}>
                <div className={styles.top}>
                  <div className={styles.input_box}>
                    <Image src="/images/position.png" alt="map image" width={22} height={22} />
                    <input type="text" placeholder="Search by development name or location" name="address" onChange={(e) => setSearchParams({ ...searchParams, address: e.target.value })} />
                    <button onClick={handleSearch}>
                      <Image src="/images/search_icon.png" alt="serch image" width={22} height={22} />
                    </button>
                  </div>
                  <div className='d-md-flex align-items-center justify-content-between'>
                  <div className={styles.headName}><h1>Properties for sale by Barratt London</h1></div>
                  <div className={styles.buttons}>                  
                    <div onClick={handleFilterShow} className={styles.filter}>Filter</div>
                    <div className={`${styles.sort} ${sort ? styles.select : ''}`} onClick={handleSort}>
                      <input type="text" readOnly autoComplete="off" placeholder="Sort by" value={searchParams?.sortByTitle} />
                      <Image src="/images/down_icon.png" alt="arrow icon" width={10} height={7} />
                      <ul className={styles.option_list}>
                        <li val="" onClick={(e) => setSearchParams({ ...searchParams, sortBy: "", sortByTitle: "" })}>Default</li>
                        <li val="price asc" onClick={(e)=>setSearchParams({...searchParams, sortBy: "price asc", sortByTitle: "Price ascending"})}>Price ascending</li>
                        <li val="price desc" onClick={(e)=>setSearchParams({...searchParams, sortBy: "price desc", sortByTitle: "Price descending"})}>Price descending</li>
                        <li val="name asc" onClick={(e) => setSearchParams({ ...searchParams, sortBy: "name asc", sortByTitle: "A - Z" })}>{`A - Z`}</li>
                        <li val="name desc" onClick={(e) => setSearchParams({ ...searchParams, sortBy: "name desc", sortByTitle: "Z - A" })}>{`Z - A`}</li>
                        {/* <li val="3">Distance</li> */}
                      </ul>
                    </div>
                  </div>
                  </div>
                  
                </div>
                
                {
                  (showRelatedProperties) ?
                    <div className={styles.noSearchText}>
                      <p>
                        Currently, no matching properties found. Modify your search or explore similar listings below.
                      </p>
                    </div> : null
                }
                <LoaderComponent isLoading={isLoading} />

                <ul className={styles.list_scroll}>
                  {properties?.map((currElem, i) => {
                    return (
                      <li key={currElem.id} onMouseEnter={() => setSelectedMarker(currElem?.id)}>
                        <div className={styles.list_left}>
                          <Link href={`/properties-for-sale/${currElem.slug_prefix}/${currElem.slug}/`}>
                            <Image
                              src={`${process.env.NEXT_PUBLIC_MEDIA_URL}properties/${currElem?.id}/${currElem?.sell_properties_media?.[0]?.filename}`}
                              fill alt="propert image" />
                          </Link>
                          {currElem?.badge_text !== "" && (<span className={styles.tags}>{currElem?.badge_text}</span>)}
                        </div>
                        <div className={`${styles.list_right} ${styles.s_bg}`}>
                          <div className={styles.title}>
                            <span className={styles.fc}>{`${currElem.address1} ${currElem.address2}`}</span>
                            <Link href={`/properties-for-sale/${currElem.slug_prefix}/${currElem.slug}/`}>{currElem?.name}</Link>
                          </div>
                          <div className={styles.price}>
                            <div className={styles.price_box}>
                              <span className={styles.fc}></span>
                              <p>{getPlanInfo(currElem?.sell_properties_plans_feeds).prices}</p>
                            </div>

                          </div>
                          <div className={styles.position}>{currElem.country}</div>
                          <div className={styles.other}>
                            {(getPlanInfo(currElem?.sell_properties_plans_feeds).bedrooms)?<div className={styles.describe}>{getPlanInfo(currElem?.sell_properties_plans_feeds).bedrooms} bedroom homes</div>:null}
                          </div>
                          <div className={styles.wislistContainer}>
                            <WishlistProvider>
                              <WishlistComponent property={currElem?.id} />
                            </WishlistProvider>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>

              </div>
            </div>
            <div className={`${styles.map_box} ${!showMap ? styles.showMobMap : styles.dshowMobMap}`} >
              {
                (isMapReady) ? <>
                  <GoogleMap mapContainerClassName={styles.map_container} center={center} zoom={10} style={{ width: "400px", height: "400px" }} mapTypeId="roadmap">
                    {properties?.map((property) => (
                      <>
                        {(!isNaN(Number(property.latitude)) && !isNaN(Number(property.longitude))) ?
                          <Marker key={property.id} position={{ lat: Number(property.latitude), lng: Number(property.longitude) }} onClick={() => setSelectedMarker(property?.id)} icon={{ url: `${process.env.NEXT_PUBLIC_MEDIA_URL}images/map-marker.svg` }}>
                            {
                              (selectedMarker === property?.id) ? <InfoWindow onCloseClick={() => { /* setIsOpen(false); */ }} position={{ lat: Number(property.latitude), lng: Number(property.longitude) }}>
                                <div style={{ maxWidth: "200px" }}>
                                  <div style={{ position: 'relative', width: '200px', height: '100px' }}>
                                    {/* <div style={{position:'absolute', top: '0', right: '0', zIndex: '9'}}>
                                      <WishlistProvider>
                                        <WishlistComponent property={property?.id}/>
                                      </WishlistProvider>
                                    </div> */}
                                    <Link href={`/properties-for-sale/${property.slug_prefix}/${property.slug}/`}>
                                      <Image
                                        src={`${process.env.NEXT_PUBLIC_MEDIA_URL}properties/${property?.id}/${property?.sell_properties_media?.[0]?.filename}`}
                                        fill alt="propert image" />
                                    </Link>
                                  </div>
                                  <div style={{ position: 'relative', paddingTop: '10px' }}>
                                    <span style={{ fontSize: "0.112rem", color: "#9bc7bb" }}>{`${property.address1} ${property.address2}`}</span><br></br>
                                    <Link href={`/properties-for-sale/${property.slug_prefix}/${property.slug}/`} style={{ color: "#000", fontSize: "0.144rem", fontFamily: "Noto", outline: "none" }}><strong>{property?.name}</strong></Link><br></br>
                                    <span style={{ fontSize: "0.112rem", letterSpacing: "0.5px", color: "#383C42" }}> {getPlanInfo(property?.sell_properties_plans_feeds).prices}</span><br></br>
                                    {/* <span style={{fontSize: "0.112rem", letterSpacing: "0.5px", color: "#383C42"}}>{getPlanInfo(property?.sell_properties_plans_feeds).bedrooms}</span><br></br> */}
                                  </div>
                                </div>
                              </InfoWindow> : null
                            }
                          </Marker>

                          : null}
                      </>
                    ))}
                  </GoogleMap>
                </> : null
              }
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.095905694714!2d-0.07632452347260897!3d51.511456471814164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876034bb032aacb%3A0xb997e387ec58e584!2sBarratt%20London!5e0!3m2!1sen!2sin!4v1695364950651!5m2!1sen!2sin" width="100%" height="500" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
          </div>
          <div className={styles.show_change} onClick={handleShowMap} style={{display : showMap ? 'block' : 'none'}}>
            <span>Map</span>
            <Image src="/images/map_icon.png" alt="Map Icon" width={15} height={14}  />
          </div>
          <div className={styles.show_change} onClick={handleShowMap} style={{display : showMap ? 'none' : 'block'}}>
            <span>List view</span>
            <Image src="/images/list_icon_2.png" alt="Map Icon" width={15} height={14}  />
          </div>
        </Container>
      </section>
      <Modal show={showFilter} onHide={handleFilterClose} className={styles.filterModal} closevariant="black">
        <Modal.Header closeButton className={styles.filterHead}>
          <Modal.Title className={styles.filterTextHead}>More filter</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.filterBody}>
          <FilterForm filterData={searchParams} onFilterSubmit={handleFilterSubmit}/>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SearchBox;
