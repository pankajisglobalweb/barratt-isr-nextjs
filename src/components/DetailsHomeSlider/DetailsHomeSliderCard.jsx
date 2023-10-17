import Image from 'next/image';
import styles from './DetailsHomeSliderCard.module.scss';
import Link from 'next/link';

const DetailsHomeSliderCard = ({item}) =>{
    return(
        <>
            <div className={styles.homeCard}>
                <div className={styles.video_box}>
					      <Image className={styles.video_box_img} src='https://www.barratthomes.co.uk/~/pfm/7e92d89d7e574dd599612098a97551a3.jpg/' alt="home img" width={200} height={130} />
                  </div>
                  <div className={styles.home_msg}>
                    <div className={styles.home_title_box}>
                      <Link href={"/"} className={styles.home_title}> {item?.title}</Link>
                        <div className={styles.floor}>
                            <span>Floor</span> 
                            <span>{item?.floors}</span>
                        </div>
                    </div>
                    <div className={styles.home_price}>
                    {item?.price}
                    </div>
                    <ul className={styles.home_icons}>                      
                      <li className={styles.icon2}>2</li>
                      <li className={styles.icon3}>{item?.area}</li>
                    </ul>
                  </div>
                  <div className={styles.home_btns}>
                    <button className={`${styles.enquire} ${styles.borderColor} ${styles.bg}`}>ENQUIRE</button>					
                    <button className={`${styles.floor_img} ${styles.borderColor} ${styles.fc}`}>FLOORPLAN</button>
                  </div>
            </div>
        </>
    );
}

export default DetailsHomeSliderCard;