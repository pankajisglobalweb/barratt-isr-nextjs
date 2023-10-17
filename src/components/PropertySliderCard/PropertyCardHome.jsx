"use client";
import { WishlistProvider } from '@/Contexts/WishlistContext';
import styles from './PropertSliderCard.module.scss';
import PropertySlider from "@/components/PropertySlider/PropertySlider";
import PropertyPlansLibrary from '@/libraries/PropertyPlansLibrary';
import Image from 'next/image';
import Link from 'next/link';
import WishlistComponent from '../WishlistComponent/WishlistComponent';
function PropertyCardHome({ properties }) {
    function getPlanInfo(plans) {
        let planLib = new PropertyPlansLibrary(plans);
        return { bedrooms: planLib.getBedsInFormat(), prices: planLib.getPricesInFormat() };
    }
    return <>
        {
            (properties.length > 0) ?
                <section className={styles.properties}>
                    <PropertySlider>
                        {
                            properties.map((property) => {
                                return (
                                    <>
                                        <div className={styles.saleCard}>
                                            <Link href={`/properties-for-sale/${property?.slug_prefix}/${property?.slug}`} className={styles.mainImg}>
                                                <Image alt="" src={`${process.env.NEXT_PUBLIC_MEDIA_URL}properties/${property?.id}/${property?.sell_properties_media?.[0]?.filename}`} fill />
                                                {
                                                    (property?.badge_text != "") ? <span className={styles.tags}>{property?.badge_text}</span> : null
                                                }
                                            </Link>
                                            <div className={`${styles.heart_box} ${styles.bg}`}>
                                                <WishlistProvider>
                                                    <WishlistComponent property={property?.id}/>
                                                </WishlistProvider>
                                                {/* <Image src="/images/heart.png" width={22} height={22} alt="heart image" /> */}
                                            </div>
                                            <div className={`${styles.houseMsg_box} ${styles.s_bg}`}>
                                                <h4 className={styles.house_title}>{property?.name}</h4>
                                                <p className={styles.house_location}>{property.address1}, {`${property.address2!=""?",":""}`}</p>
                                                <p className={styles.house_location}>{property.locality}, {property.country}, {property.postcode}</p>
                                                <div className={styles.housePrice_box}>
                                                    <div className={`${styles.price} ${styles.UK}`}>
                                                        <span className={styles.price_type}></span>
                                                        <span className={styles.price_num}>{getPlanInfo(property?.sell_properties_plans_feeds).prices}</span>
                                                    </div>
                                                </div>
                                                <Link href={`/properties-for-sale/${property?.slug_prefix}/${property?.slug}`} className={`${styles.goto_box} ${styles.bg}`}>
                                                    <Image alt="" src="/images/goTo_rotate.png" width={30} height={30} />
                                                </Link>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </PropertySlider>
                </section>
                : null
        }
    </>
}

export default PropertyCardHome;