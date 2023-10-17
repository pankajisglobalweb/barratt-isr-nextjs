import Placeholder from 'react-bootstrap/Placeholder';
import styles from './PropertSliderCard.module.scss';

const PropertySliderPlaceholder = () => {    
    return(
        <>
            <div id={key} className={styles.saleCard}>
				<Placeholder xs={12} animation="glow" bg="primary"  className={styles.mainImg} />               
                <div className={`${styles.houseMsg_box} ${styles.s_bg}`}>
						<Placeholder xs={8} animation="glow" bg="primary" />
						<Placeholder xs={12} animation="glow" bg="primary" />
						<Placeholder xs={6} animation="glow" bg="primary" />
				</div>
            </div>
        </>
    );
       
}

export default PropertySliderPlaceholder;