"use client"
import Image from 'next/image';
import styles from './event.module.scss';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const EventCalender = () => {
    return (
        <>
            <section className={styles.top_bg}>
                <Image className={styles.topBg} src="https://www.barrattlondonmena.com/img/insights.jpg" alt='event' width={742} height={505} />
                <Container>
                    <div className={styles.header_box}>
                        <h1 className={styles.pageTitle}>Insights</h1>
                        <p className={styles.title_info}>Take a look at our news, blogs and press releases.</p>
                        <div className={styles.search_box}>
                            <div className={styles.input_box}>
                                <input className={styles.search_val} type="text" placeholder="Search Keywords" />                              
                            </div>
                            <button className={styles.search_submit} url="/">SEARCH</button>
                        </div>
                    </div>
                </Container>
            </section>
           
        </>
    );
}

export default EventCalender;

