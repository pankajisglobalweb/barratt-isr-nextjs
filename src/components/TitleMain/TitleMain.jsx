import { Container } from 'react-bootstrap';
import styles from './TitleMain.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const TitleMain = ({title, btnTitle, showBtn, btnurl, tagName}) => {
    return(
    <>
    <div className={styles.title_box}>
        <Container>
        <div className={styles.title_row}>
            {tagName == 'h1' ? <h1 className={styles.title}>{title}</h1> : <h2 className={styles.title}>{title}</h2>}
        {/* <h2 className={styles.title}>{title}</h2> */}
            {showBtn ? <Link href={btnurl} id="allSale" className={styles.title_btn}>
                <div className={styles.btn_img}>
                <Image src="/images/goTo.png" alt='go button' width={27} height={33} />
                </div>
                <div className={styles.text_box}>
                {showBtn ? <span>{btnTitle}</span> : ''}
                </div>
            </Link>: ''}
        </div>
        <div className={styles.line}></div>
        </Container>
    </div>
    </>
    );
}

export default TitleMain;