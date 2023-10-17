"use client"

import { useState, useEffect } from 'react';
import styles from './PropertyDetailsMain.module.scss';
import Image from 'next/image';
import { Col, Container, Row, Modal } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import SideBar from '../SideBar/SideBar';
import PropertySlider from '../PropertySlider/PropertySlider';
import DetailsHomeSliderCard from '../DetailsHomeSlider/DetailsHomeSliderCard';
import Link from 'next/link';
import YouTube from 'react-youtube';
import GoogleMapReact from 'google-map-react';
import { Marker } from '@react-google-maps/api';



const PropertyMainDetails = ({ fetchPropertyDatafromserver }) => {
    const [isLoading, setLoaded] = useState(false);
    const [activeTab, setActiveTab] = useState('tab1');
    const [offcanvasData, setOffcanvasData] = useState('');
    const [offcanvetype, setType] = useState('');
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const [show, setShow] = useState(false);
    const [modaldata, setModalData] = useState(null);
    const [name, setname] = useState(null);
    const [title, settitle] = useState(null);
    
    const handleClose = () => setShow(false);

    const handleShowOffcanvas = (data, type, name, title) => {
        setType(type)
        setOffcanvasData(data);
        setShowOffcanvas(true);
        // console.log(name,title);
        setname(name)
        settitle(title)
    };

    const handleCloseOffcanvas = () => setShowOffcanvas(false);

    const handleTabSelect = (selectedTab) => {
        setActiveTab(selectedTab);
    };
    const floorPlanModal = (data) => {
        setShow(true);
        setModalData(data)
    };

    const extractVideoId = (url) => {
        const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/i;
        const match = url.match(regex);
        if (match && match[1]) {
            return match[1];
        } else {
            return null;
        }
    };

    const renderMarkers = (map, maps, position) => {
        let marker = new maps.Marker({
            position: position,
            map,
            //title: 'Hello World!',
            icon: { url: `${process.env.NEXT_PUBLIC_MEDIA_URL}images/map-marker.svg` }
        });
    }

    const getFeatures = () =>{
        return JSON.parse(fetchPropertyDatafromserver?.properties?.features) || [];
    }

    useEffect(() => {
        setLoaded(true);
    }, []);
    return (
        <>
            <section className={styles.content}>
                <Container>
                    <Row>
                        <Col sm={12} md={8} className={styles.detail_left}>
                            <div className={styles.descript}>
                                <h3 className={styles.title}>Description</h3>
                                <div className={styles.detail_content} dangerouslySetInnerHTML={{ __html: fetchPropertyDatafromserver?.properties?.description }} />
                            </div>

                            {
                                (getFeatures()?.length > 0) ?
                                    <div className={styles.feature}>
                                        <h3 className={styles.title}>Features</h3>
                                        <div className={styles.detail_content}>
                                            <ul>
                                                {getFeatures().map((item, i) =>
                                                    <li key={i}>
                                                        <div className={`${styles.icon_box} ${styles.bg}`}>
                                                            <Image src="http://www.barrattlondonmena.com/img/icon_ok.png" width={7} height={7} alt={"Ok Icon"} />
                                                        </div>
                                                        <span>
                                                            {item}
                                                        </span>
                                                    </li>
                                                )}

                                            </ul>
                                        </div>
                                    </div> : null
                            }

                            {
                                (extractVideoId(fetchPropertyDatafromserver?.properties?.video)) ? <>
                                    <div className={styles.video}>
                                        <h3 className={styles.title} data-video={fetchPropertyDatafromserver?.properties?.video}>Property video</h3>
                                        <div className={styles.detail_content}>
                                            <YouTube className='w-100' videoId={extractVideoId(fetchPropertyDatafromserver?.properties?.video)} opts={{playerVars: {rel: 0},width: '100%',}}></YouTube>
                                        </div>
                                    </div>
                                </> : null
                            }

                            {
                                (fetchPropertyDatafromserver?.properties?.sell_properties_plans_feeds?.length > 0) ?
                                    <div className={styles.homes}>
                                        <h3 className={styles.title}>Available new homes</h3>
                                        {isLoading ? (
                                            <PropertySlider>
                                                {fetchPropertyDatafromserver?.properties?.sell_properties_plans_feeds?.map((item, i) =>
                                                    <div className={styles.homeCard} key={i}>
                                                        <div className={styles.video_box}>
                                                            <Image className={styles.video_box_img} src={item?.image} alt="home img" width={200} height={130} blurDataURL='/images/no-image.png'/>
                                                        </div>
                                                        <div className={styles.home_msg}>
                                                            <div className={styles.home_title_box}>
                                                                <Link href={"/"} className={styles.home_title}> {item?.title}</Link>
                                                                <div className={styles.floor}>
                                                                    <span>Floor</span> &nbsp;
                                                                    <span>{item?.floors}</span>
                                                                </div>
                                                            </div>
                                                            <div className={styles.home_price}>
                                                                {item?.price}
                                                            </div>
                                                            <ul className={styles.home_icons}>
                                                                <li className={styles.icon2}>{(item?.bedrooms == 0)?"Studio":item?.bedrooms}</li>
                                                                <li className={styles.icon3}>{item?.area}</li>
                                                            </ul>
                                                        </div>
                                                        <div className={styles.home_btns}>
                                                            <button onClick={() => handleShowOffcanvas('Contact us', 'ContactUS', fetchPropertyDatafromserver.properties.name, item.title)} className={`${styles.enquire} ${styles.borderColor} ${styles.bg}`}>ENQUIRE</button>
                                                            <button onClick={() => floorPlanModal(item)} className={`${styles.floor_img} ${styles.borderColor} ${styles.fc}`}>FLOORPLAN</button>
                                                        </div>
                                                    </div>
                                                )}
                                            </PropertySlider>) : null}
                                    </div> : null
                            }

                            {
                                (!isNaN(Number(fetchPropertyDatafromserver?.properties?.latitude)) && !isNaN(Number(fetchPropertyDatafromserver?.properties?.longitude))) ?
                                    <div className={styles.map} id="map_box">
                                        <h3 className={styles.title}>Local area map</h3>
                                        <div className={styles.detail_content}>
                                            <div style={{ height: '450px', width: '100%' }}>
                                                <GoogleMapReact
                                                    bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY }}
                                                    defaultCenter={{ lat: Number(fetchPropertyDatafromserver?.properties?.latitude), lng: Number(fetchPropertyDatafromserver?.properties?.longitude) }}
                                                    defaultZoom={15} onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps, { lat: Number(fetchPropertyDatafromserver?.properties?.latitude), lng: Number(fetchPropertyDatafromserver?.properties?.longitude) })}>
                                                </GoogleMapReact>
                                            </div>
                                        </div>
                                    </div>
                                    : null
                            }
                            <div className={styles.site}>
                                <h3 className={styles.title}>Site Plan & Local Area</h3>
                                <div className={styles.detail_content}>
                                    <Tab.Container activeKey={activeTab} onSelect={handleTabSelect}>
                                        <Nav className={styles.site_tab}>
                                            <Nav.Item>
                                                <Nav.Link eventKey="tab1">About the area</Nav.Link>
                                            </Nav.Item>
                                            {fetchPropertyDatafromserver?.properties?.site_plan ?
                                                <Nav.Item>
                                                    <Nav.Link eventKey="tab2">Site plan</Nav.Link>
                                                </Nav.Item> : null}

                                        </Nav>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="tab1">
                                                <div className={styles.site_card}>
                                                    <div dangerouslySetInnerHTML={{ __html: fetchPropertyDatafromserver?.properties?.about }}></div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab2">
                                                <div className={styles.site_card}>
                                                    <img className='w-100' src={`https://dfl6m0l15t52.cloudfront.net/development/properties/${fetchPropertyDatafromserver?.properties?.id}/${fetchPropertyDatafromserver?.properties?.site_plan}`} />
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={4} className={styles.detail_right}>
                            <div className={styles.touch}>
                                <div className={`${styles.touch_box} ${styles.right_card}`}>
                                    <h3 className={styles.card_title}>Get in touch</h3>
                                    <p className={styles.card_info}>
                                        If you&apos;d like to find out more about this development, please leave your details.
                                    </p>
                                    <button className={styles.open_contact} onClick={() => handleShowOffcanvas('Contact us', 'ContactUS')}>
                                        <span>CONTACT US NOW</span>
                                        <Image src="http://www.barrattlondonmena.com/img/goTo.png" alt='go img' width={29} height={34} />
                                    </button>
                                </div>

                                <div className={`${styles.down_box} ${styles.right_card}`}>
                                    <h3 className={styles.card_title}>Download PDF brochure</h3>
                                    <p className={styles.card_info}>
                                        To find out more about Wembley Park Gardens
                                    </p>
                                    <div className={`${styles.down_btn} ${styles.other_btn}`} onClick={() => handleShowOffcanvas('Download brochure', 'brochure')}>
                                        <div className={styles.icon_box}>
                                            <Image src="http://www.barrattlondonmena.com/img/goTo.png" alt='go img' width={29} height={34} />
                                        </div>
                                        <div className={styles.text_box}>
                                            <span>DOWNLOAD NOW</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.stamp} ${styles.right_card}`}>
                                <h3 className={styles.card_title}>Stamp duty calculator</h3>
                                <p className={styles.card_info}>
                                    Work out how much you&apos;ll need to pay
                                </p>
                                <div className={`${styles.open_stamp} ${styles.other_btn}`} onClick={() => handleShowOffcanvas('Stamp duty calculator', 'calculator')}>
                                    <div className={styles.icon_box}>
                                        <Image src="http://www.barrattlondonmena.com/img/goTo.png" alt='go img' width={29} height={34} />
                                    </div>
                                    <div className={styles.text_box}>
                                        <span>CALCULATE NOW</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <SideBar name={title} title={name} fetchPropertyDatafromserver={fetchPropertyDatafromserver} data={offcanvasData} type={offcanvetype} show={showOffcanvas} handleClose={handleCloseOffcanvas} placement={'end'} />
                </Container>
            </section>
            <Modal show={show} onHide={handleClose} className={styles.modalCustom}>
                <Modal.Header closeButton className={styles.modalHeader}>
                    <Modal.Title>Floorplan</Modal.Title>
                </Modal.Header>
                <Modal.Body className={styles.modalBody}>
                    <Image alt="Barratt Homes India" src={modaldata?.floorplan} width={300} height={400} className='w-100'  blurDataURL='/images/no-image.png'/></Modal.Body>
            </Modal>

        </>
    );
};

export default PropertyMainDetails;
