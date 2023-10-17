"use client"
import React, { useEffect, useState } from 'react';
import styles from './MainSection.module.scss';
import TitleMain from '../TitleMain/TitleMain';
import WhatNew from '../WhatNew/WhatNew';
import HomeContactBox from '../HomeContactBox/HomeContactBox';
import HomeBannerSlider from '../HomeBannerSlider/HomeBannerSlider';
import PropertySlider from '../PropertySlider/PropertySlider';
import PropertySliderCard from '../PropertySliderCard/PropertySliderCard';
import LocationCard from '../LocationCard/LocationCard';
import Image from 'next/image';
import PropertyCardHome from '../PropertySliderCard/PropertyCardHome';


const Main = ({ data }) => {
  const [isloading, setIsloading] = useState(false);
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    setIsloading(true);
    fetch(`${process.env.NEXT_PUBLIC_CMS_API_URL}sell-properties`).then(res => res.json()).then((res) => {
      setProperties(res?.properties);
    });
  }, []);

  const locationSlide = [
    {
      locationImagePath: "http://www.barrattlondonmena.com/img/cities/London.jpg",
      locationUrl: "/",
      locationName: "London"
    },
    {
      locationImagePath: "/images/Manchester.jpg",
      locationUrl: "/",
      locationName: "Manchester"
    },
    {
      locationImagePath: "http://www.barrattlondonmena.com/img/cities/London.jpg",
      locationUrl: "/",
      locationName: "London"
    },
    {
      locationImagePath: "http://www.barrattlondonmena.com/img/cities/London.jpg",
      locationUrl: "/",
      locationName: "London"
    },
    {
      locationImagePath: "http://www.barrattlondonmena.com/img/cities/London.jpg",
      locationUrl: "/",
      locationName: "London"
    },
  ];
  return (
    <>
      <HomeBannerSlider />
      {(properties?.length > 0) ?
        <section className={styles.properties}>
          <TitleMain
            title={"Properties for sale in London"}
            btnTitle={"VIEW MORE PROPERTIES"}
            showBtn={true}
            btnurl="/properties-for-sale"
          />
          {isloading ?
            <>
              <PropertyCardHome properties={properties} />
              {/* {data?.properties?.map((sellProptyElem, i) => {
              if (sellProptyElem?.sell_properties_media?.length > 0) {
                return (
                  <PropertySlider key={i}>
                    {sellProptyElem?.sell_properties_media?.map((media, j) => (
                      <PropertySliderCard key={j} olddata={sellProptyElem} newdata={media} />
                    ))}
                  </PropertySlider>
                );
              }
              // return <p className='fw-bold'>loading....</p>; // Render nothing if the condition is not met
            })} */}
            </>
            : null}
        </section> : null
      }
      {/* <section className={styles.popular}>      
          <TitleMain 
          title={"Popular Areas"}          
          />        
          <PropertySlider>
            {locationSlide.map((item,index) =>(
              <LocationCard 
                key={index}
                locationimage={item.locationImagePath}
                locationurl={item.locationUrl}
                locationname={item.locationName}
              />
            ))}
          </PropertySlider>
      </section> */}

      <section className={styles.why}>
        <TitleMain
          title="Why choose Barratt London"
        />
        <div className={styles.why_container}>
          <div className={styles.img_box} style={{ backgroundImage: 'url(/images/home_ourservice.jpg)' }}></div>
          <div className={styles.ul_box}>
            <ul>
              <li>
                <Image className={styles.why_icon} src="/images/why_icon1.png" alt="why icon 1" width={45} height={45} />
                <div className={styles.why_msg}>
                  <h5 className={styles.msg_title}>Why to Invest?</h5>
                  <p className={styles.msg_val}>Barratt London creates homes tailored to the desires and needs of Londoners, consisting an outstanding portfolio throughout the Capital. From Hendon Waterside in the northern reaches to New Mill Quarter in the south, extending both eastward and westward with developments like Upton Gardens and High Street Quarter in Hounslow, we&apos;ve got every desired location covered. </p>
                </div>
              </li>
              <li>
                <Image className={styles.why_icon} src="/images/why_icon2.png" alt="why icon 2" width={45} height={45} />
                <div className={styles.why_msg}>
                  <h5 className={styles.msg_title}>Award Winning Quality</h5>
                  <p className={styles.msg_val}>We take pride in being a premier housebuilder renowned for our commitment to quality and craftsmanship, and our award-winning team members.</p>
                </div>
              </li>
              <li>
                <Image className={styles.why_icon} src="/images/why_icon3.png" alt="why icon 3" width={45} height={45} />
                <div className={styles.why_msg}>
                  <h5 className={styles.msg_title}>A Great Variety of Homes</h5>
                  <p className={styles.msg_val}>As a recognised award-winning homebuilder, we take immense pride in crafting enduring homes in attractive London locations. Explore some of our preferred ongoing developments in the capital.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <WhatNew /> */}
      <HomeContactBox />
    </>
  );




};

export default Main;
