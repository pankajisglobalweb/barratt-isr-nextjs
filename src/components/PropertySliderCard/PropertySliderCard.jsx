import Image from "next/image";
import Link from "next/link";
import styles from './PropertSliderCard.module.scss';

const PropertySliderCard = ({ newdata, olddata }) => {
    return(
        <>
            <div className={styles.saleCard}>
				<Link href={'property-for-sale/' + olddata.slug} className={styles.mainImg}>
					<Image alt="" src={`${process.env.NEXT_PUBLIC_MEDIA_URL}properties/${newdata?.property_id}/${newdata?.filename}`} fill />
					<span className={styles.tags}>London</span>
				</Link>               
                <div className={`${styles.heart_box} ${styles.bg}`}>
					<Image src="/images/heart.png" width={22} height={22} alt="heart image" />						
			    </div>
                <div className={`${styles.houseMsg_box} ${styles.s_bg}`}>
						<h4 className={styles.house_title}>{newdata.title}</h4>
						<p className={styles.house_location}>{olddata.address1} {olddata.address2}</p>
						<div className={styles.housePrice_box}>
						  <div className={`${styles.price} ${styles.UK}`}>
							<span className={styles.price_type}></span>
							<span className={styles.price_num}>{olddata.prices}</span>
						  </div>
						</div>
						<Link href={'property-for-sale/' + olddata.slug} className={`${styles.goto_box} ${styles.bg}`}>
							<Image alt="" src="/images/goTo_rotate.png" width={48} height={48} />
						</Link>
				</div>
            </div>
        </>
    );
}

export default PropertySliderCard;