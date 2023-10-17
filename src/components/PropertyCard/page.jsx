"use client"
import Image from 'next/image';
import styles from './card.module.scss';
import { Container } from 'react-bootstrap';
import Link from 'next/link';


const PropertCard = ({ events = [] }) => {
    console.log("events", events);
    return (
        <>
            <section className={`${styles.list} ${styles.previous}`}>
                <Container>
                    <h3>Previous events</h3>
                    <ul>
                        {
                            events.map((eventItem, i) => {
                                return (<li className={styles.item} key={i}>
                                    <Link href={`/events/${eventItem?.slug}`}>
                                        <div className={styles.mainImg_box}>
                                            <Image src={'http://www.barrattlondonmena.com/pic/product/5ac54277736a4af48a40ef0efb4f541c.png'} data-src={`${process.env.NEXT_PUBLIC_MEDIA_URL}events/${eventItem?.id}/${eventItem?.filename}`} alt='' fill />
                                            <div className={`${styles.timeMsg_box} ${styles.s_bg}`}>
                                                <div className={`${styles.day_box} ${styles.fc}`}>
                                                    <div className={styles.day}>
                                                        <span className={styles.day_val}>{eventItem?.event_from_date}</span>
                                                        <span>→</span>
                                                        <span className={styles.day_val}>{eventItem?.event_to_date}</span>
                                                    </div>
                                                    <span className={styles.month}>{eventItem?.event_month_date}</span>
                                                </div>
                                                <p className={styles.time}>{eventItem?.event_time}</p>
                                                <p className={styles.event_location}>{eventItem?.event_venue}</p>
                                            </div>
                                        </div>
                                        <div className={styles.info_box}>
                                            <h4 className={styles.info_title}>{eventItem?.title}</h4>
                                            <p className={styles.info_val}><p>Eastman Village is an exciting residential quarter conveniently located in the heart of Harrow. The development is served by Harrow &amp; Wealdstone Station, with direct access to Central London in just 13 minutes^, providing a quick and easy commute to the city’s exciting West End and dynamic financial district. Along with the newly launched ‘Superloop’ bus network, residents will enjoy even further accessibility for work and leisure activities.</p><p><br /></p></p>
                                        </div>
                                    </Link>
                                </li>)
                            })
                        }
                    </ul>
                    {/* <button className="load">LOAD MORE</button> */}
                </Container>
            </section>
        </>
    );
}

export default PropertCard;

