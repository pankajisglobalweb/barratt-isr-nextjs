import Image from 'next/image';
import styles from './TeamBox.module.scss';
import Link from 'next/link';

const TeamBox = ({memImg, memName, memInfo, email, phone1, phone2 }) =>{
    return(
        <>
        <div className={styles.list_item}>
          <Image className={styles.item_img} src={memImg? memImg : ''} width={248} height={248} alt="" />
          <div className={styles.item_msg}>
            <h4 className={styles.personName}>{memName? memName : ''}</h4>
            <p className={styles.personInfo}>{memInfo? memInfo : ''}</p>
            
            {email ? <div className={`${styles.contact} ${styles.email}`}>
                <Image src="/images/email.png" width={13} height={13} alt="" />
              <span><Link href={`mailto:${email}`}>{email? email : ''}</Link></span>
            </div> : ''}
            {phone1 ? <div className={`${styles.contact} ${styles.phone}`}>
                <Image src="/images/phone.png" width={13} height={13} alt="" />
              <span><Link href={`tel:${phone1}`}>{phone1? phone1 : ''}</Link></span>
            </div> : ''}
            {phone2 ? <div className={`${styles.contact} ${styles.phone}`}>
                <Image src="/images/phone_3.png" width={13} height={13} alt="" /> 
              <span><Link href={`tel:${phone2}`}>{phone2? phone2 : ''}</Link></span>
            </div> : ''}
          </div>
        </div>
        </>
    );
}

export default TeamBox;