"use client"

//how to chnge carousel-control-next-icon background color with scss using react js 
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DetailsSlider from 'react-slick';
import styles from './PropertyDetails.module.scss';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import PropertyPlansLibrary from '@/libraries/PropertyPlansLibrary';
import { WishlistProvider } from '@/Contexts/WishlistContext';
import WishlistComponent from '../WishlistComponent/WishlistComponent';



const PropertyDetail = ({ fetchPropertyDatafromserver }) => {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderCount, setSliderCount] = useState(0);
    const [textToCopy, setTextToCopy] = useState(`https://www.barratthomes.co.in/properties-for-sale/${fetchPropertyDatafromserver?.properties?.slug_prefix}/${fetchPropertyDatafromserver?.properties?.slug}`);
    const [copySuccess, setCopySuccess] = useState(false);
    const [plansInfo, setPlansInfo] = useState({
        bedrooms: [],
        prices: "",
    });

    useEffect(() => {
        setSliderCount(fetchPropertyDatafromserver?.properties?.sell_properties_media?.length || 0);
        let planLib = new PropertyPlansLibrary(fetchPropertyDatafromserver?.properties?.sell_properties_plans_feeds);
        setPlansInfo({ ...plansInfo, bedrooms: planLib.getBedsInFormat(), prices: planLib.getPricesInFormat() });
    }, []);

    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        ref: sliderRef,
        afterChange: (current) => setCurrentSlide(current),
    };
    const goToSlide = (index) => {
        sliderRef.current.slickGoTo(index);
    };

    const handleCopyClick = () => {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                setCopySuccess(true);
                setTimeout(()=>{setCopySuccess(false)}, 30000);
            })
            .catch((error) => {
                console.error('Copy failed: ', error);
            });
    };
    return (
        <>
            <section className={styles.details_banner}>
                <Container>
                    <div className={styles.bannerWrap}>
                        <div className={styles.bannerSlick}>
                            <DetailsSlider {...settings}>
                                {fetchPropertyDatafromserver?.properties?.sell_properties_media?.map((item, i) =>
                                    <div className={styles.slide} key={i}>
                                        <div className={styles.slideImgBox}>
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_MEDIA_URL}properties/${item?.property_id}/${item?.filename}`}
                                                alt="Barratt Homes India"
                                                fill
                                            />
                                        </div>
                                    </div>
                                )}
                            </DetailsSlider>
                            <div className={styles.bannerSlickBtn}>
                                <button onClick={() => goToSlide(currentSlide - 1)}>
                                    <Image src={"/images/prev_white.png"} width={16} height={26} alt='prev white' />
                                </button>
                                <button onClick={() => goToSlide(currentSlide + 1)}>
                                    <Image src={"/images/next_white.png"} width={16} height={26} alt='next white' />
                                </button>
                            </div>
                            <div className={styles.control_box}>
                                <div className={styles.pagination_box}>
                                    {
                                        [...Array(sliderCount)].map((_, index) => (
                                            <button
                                                key={index}
                                                className={currentSlide === index ? styles.activeDot : ''}
                                                onClick={() => goToSlide(index)}
                                            />
                                        ))}
                                </div>

                            </div>
                        </div>
                        <div className={styles.media_box}>
                            <div className={`${styles.fav_box} ${styles.bg}`}>
                                {/* <Image src="/images/heart.png" alt="heart img" width={28} height={28} /> */}
                                                               
                                <WishlistProvider>
                                    <WishlistComponent property={fetchPropertyDatafromserver?.properties?.id} />
                                </WishlistProvider>
                            </div>
                            <div className={`${styles.share_box} ${styles.bg}`}>
                                <Image src="http://www.barrattlondonmena.com/img/share_icon_1.png" alt='share icon' width={28} height={28} />
                                <div className={styles.share_card_box}>
                                    <h3>Share this property</h3>
                                    <div className={styles.info}>
                                        <div className={styles.img_box} style={{ backgroundImage: 'url(https://www.barrattlondonmena.com/pic/product/9366.jpg)' }}></div>
                                        <div className={styles.msg_box}>
                                            <h4>{fetchPropertyDatafromserver?.properties?.name}</h4>
                                            <div className={styles.bottom_msg}>
                                                <span className={styles.price}>{plansInfo?.prices}</span>
                                                {(plansInfo?.bedrooms)?<span className={styles.bed} data-beds={plansInfo?.bedrooms}>{`${plansInfo?.bedrooms} bedroom homes`}</span>:null}
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <ul className={styles.share_list}>
                                        <li className={styles.copy}>
                                            {!copySuccess ? <a type="copy" onClick={handleCopyClick}>
                                                <Image src="https://www.barrattlondonmena.com/img/copy_icon.png" width={30} height={30} />
                                                <span>Copy link to property</span>
                                            </a> : <span>Property link has been copied to your clipboard.</span>}

                                        </li>
                                        <li>
                                            <Link href={`whatsapp://send?text=${textToCopy}`} type="WhatsApp" target='_blank' data-action="share/whatsapp/share">
                                                <Image src="https://www.barrattlondonmena.com/img/whatsapp_logo.png" width={30} height={30} />
                                                <span>WhatsApp</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={`http://www.facebook.com/sharer.php?u=${textToCopy}`} type="Facebook" target='_blank'>
                                                <Image src="https://www.barrattlondonmena.com/img/facebook_logo.png" width={30} height={30} />
                                                <span>Facebook</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={`https://twitter.com/share?url=${textToCopy}`} type="Twitter" target='_blank'>
                                                <Image src="/images/twitterlogo.png" width={30} height={30} />
                                                <span>Twitter</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.baseMsg_box} ${styles.s_bg}`}>
                            <Link href="#map_box" className={styles.see_map}>
                                <div className={`${styles.icon_box} ${styles.bg}`}>
                                    <Image src="http://www.barrattlondonmena.com/img/position_4.png" width={16} height={16} alt="Location Icon" />
                                </div>
                                <div className={styles.text_box}>
                                    <span>See map</span>
                                </div>
                            </Link>
                            <div className={styles.baseMsg}>
                                <div className={styles.house_title_box}>
                                    <h1 className={styles.house_title}>{fetchPropertyDatafromserver?.properties?.name}</h1>
                                    {
                                        (fetchPropertyDatafromserver?.properties?.badge_text !== "") ? <span className={styles.tags}>{fetchPropertyDatafromserver?.properties?.badge_text}</span> : null
                                    }

                                </div>
                                <p className={styles.house_location}>{fetchPropertyDatafromserver?.properties?.address1} {fetchPropertyDatafromserver?.properties?.address2}</p>
                                {(plansInfo?.bedrooms)?<p className={styles.bedrooms}>{`${plansInfo?.bedrooms} bedroom homes`}</p>:null}
                            </div>

                            <div className={`${styles.price_box} ${styles.bg}`}>
                                <div className={`${styles.price} ${styles.UK}`}>
                                    <p className={styles.price_type}></p>
                                    <p className={styles.price_val}>{plansInfo?.prices}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default PropertyDetail;
