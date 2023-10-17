import React from 'react';
import Image from 'next/image';
import styles from './HomeBannerSlider.module.scss';
import Carousel from 'react-bootstrap/Carousel';
import CustomCarouselIndicators from './CustomCarouselIndicators';



const HomeBannerSlider = () => {
  const sliderItems = [
    {
      src: '/images/banner4.jpg',
      text: 'Contact one of our knowledgeable sales team members below to inquire about our real estate portfolio.',
      bannerText: "New homes for sale in London by Barratt London",
      linkText: 'GET IN TOUCH',
      link: '/contact-us'
    },
    {
      src: '/images/banner5.jpg',
      text: 'Discover the variety of properties we offer all across London.',
      bannerText: "New homes for sale in London by Barratt London",
      linkText: 'VIEW LONDON PROPERTIES',
      link: '/properties-for-sale'
    },
    {
      src: '/images/banner4.jpg',
      text: 'Browse our featured properties to find the one that matches your lifestyle and luxury!',
      bannerText: "New homes for sale in London by Barratt London",
      linkText: 'EXCLUSIVE FEATURED PROPERTY',
      link: '/properties-for-sale/london/sterling-place'
    }
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <>
      <section className={styles.banner}>
        <Carousel
          controls={false}
          indicators={false} // Disable default indicators
          activeIndex={activeIndex}
          onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}          
        >
          {sliderItems.map((item, index) => (
            <Carousel.Item key={index} className={styles.cutomBanner}>
              <Image src={item.src} height={550} width={1263} alt="" />
              <Carousel.Caption className={styles.bannerText}>
              {activeIndex === index ? (
                  <h1>{item.bannerText || ''}</h1>
                ) : (
                  <h2>{item.bannerText || ''}</h2>
                )}
                {/* <h1>{item.bannerText || ''}</h1> */}
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <CustomCarouselIndicators
          items={sliderItems}
          activeIndex={activeIndex}
          onClick={(index) => setActiveIndex(index)}
        />
      </section>
    </>
  );
}

export default HomeBannerSlider;
