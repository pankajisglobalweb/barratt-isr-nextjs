import styles from './PropertySlider.module.scss';
import React, { useRef, useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';

const PropertySlider = ({children}) =>{
    const sliderRef = useRef(null);
    // const [isPrevDisabled, setIsPrevDisabled] = useState(true);
    // const [isNextActive, setIsNextActive] = useState(false);
    const goToNext = () => {
        sliderRef.current.slickNext();
    };
    const goToPrev = () => {
        sliderRef.current.slickPrev();
    };

    var settings = {
        dots: false,
        infinite: false,
        arrows:false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        ref: sliderRef,
        // afterChange: (current) => {
        //     setIsPrevDisabled(current === 0);
        //     setIsNextActive(current === 2); // Assuming there are 3 slides (0-based index)
        //   },
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,                
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2.5,
                slidesToScroll: 1,                
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1.3,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1.3,
                slidesToScroll: 1
              }
            }
          ]
      };
  
    return(
        <>
        <Container>
            <Row>
                <Col sm={1}>
                    <div className={styles.sliderBtnBox}>
                        <button onClick={goToPrev}  className={styles.active}>
                            <Image src={"/images/prev_white.png"} width={16} height={26} className={styles.whitebtn} alt='prev white' />
                            <Image src={"/images/prev_red.png"} width={16} height={26} className={styles.redbtn} alt='pre red' />
                        </button>
                        <button onClick={goToNext}  className={styles.active}>
                            <Image src={"/images/next_white.png"} width={16} height={26} className={styles.whitebtn} alt='next white' />
                            <Image src={"/images/next_red.png"} width={16} height={26} className={styles.redbtn} alt="next red" />
                        </button>
                    </div>
                </Col>
                <Col sm={11}>
                    <Slider {...settings}>
                        {children}                                              
                    </Slider>
                </Col>
            </Row>
        </Container>                
        </>
    );
}

export default PropertySlider;
