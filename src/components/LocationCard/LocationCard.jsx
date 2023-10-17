import Link from 'next/link';
import styles from './LocationCard.module.scss';
import Image from 'next/image';

const LocationCard = ({locationurl, locationname, locationimage}) =>{
    return(
        <>
            <div className={styles.locationCardBox}>
                <Link href={locationurl}>
                    <Image src={locationimage} alt='location image' fill />
                    <div className={styles.info_box}>
                        <h4 className={styles.location_title}>{locationname}</h4>
                        <p className={styles.location_info}>Find Properties in this area</p>
                    </div>
                </Link>                
            </div>
        </>
    );
}

export default LocationCard;