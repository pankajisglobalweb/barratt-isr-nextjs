"use client"
import Image from 'next/image';
import styles from './card.module.scss';
import { Container } from 'react-bootstrap';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import DateLibrary from '@/libraries/DateLibrary';



const EventCard = () => {
    const [events, setEvents] = useState([]);
    const [tempEvents, setTempEvents] = useState([]);

    const [searchKeyword, setSearchKeyword] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [eventslength, setEventsLenght] = useState('');

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_CMS_API_URL}events`, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => res.json()).then((result) => {
            if (result?.status === 200) {
                setEvents(result?.events);
                setTempEvents(result?.events);
                setEventsLenght(result?.events);
            }
        });
    }, []);



    const handleSearchClick = () => {
        const withoutFilter = false; // Set this to true or false as needed

        // Construct the query parameters
        const queryParams = new URLSearchParams();

        if (!withoutFilter) {
            queryParams.set('search_key', searchKeyword);
            queryParams.set('search_date', selectedDate);
        }

        // Convert the query parameters to a string
        let queryString = withoutFilter ? '' : `search_key=${searchKeyword}&search_date=${selectedDate}`;

        // Make the API request with query parameters
        fetch(`${process.env.NEXT_PUBLIC_CMS_API_URL}events?${queryString}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'no-cache'
        })
            .then((res) => res.json())
            .then((response) => {
                console.log(response);
                setEventsLenght(response?.events);
                if (response?.status === 200) {

                    if (response?.events?.length > 0) {
                        setEvents(response?.events);
                    } else {
                        setEvents(tempEvents);
                    }
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };



    return (
        <>
            <section className={styles.top_bg}>
                <Image className={styles.topBg} src="https://www.barrattlondonmena.com/img/events.jpg" alt='event' width={742} height={505} />
                <Container>
                    <div className={styles.header_box}>
                        <h2 className={styles.pageTitle}>Event calendar</h2>
                        <p className={styles.title_info}>Take a look at the events we&apos;ve got coming up to find out more about our properties</p>
                        <div className={styles.search_box}>
                            <div className={styles.input_box}>
                                <input className={styles.search_val} type="text"
                                    value={searchKeyword}
                                    onChange={(e) => setSearchKeyword(e.target.value)}
                                    placeholder="Search Keywords" />
                                <input
                                    // className={styles.dateInput}
                                    placeholder="Date"
                                    value={selectedDate}
                                    onChange={(e) => setSelectedDate(e.target.value)}
                                    type='date' />
                            </div>
                            <button className={styles.search_submit} onClick={handleSearchClick}>SEARCH</button>
                        </div>
                    </div>
                </Container>
            </section>
            <section className={`${styles.list} ${styles.previous}`}>
                <Container>
                    <h3>Upcoming events</h3>
                    {eventslength.length === 0 ? (
                        <h3 className='mt-1 mb-2 text-center'>Sorry, we couldn&apos;t find any results for your search.</h3>
                    ) : ""}
                    <ul>
                        {
                            events.map((eventItem, i) => {
                                return (<li className={styles.item} key={i}>
                                    <Link href={`/events/${eventItem?.slug}`}>
                                        <div className={styles.mainImg_box}>
                                            <Image src={`${process.env.NEXT_PUBLIC_MEDIA_URL}events/${eventItem?.id}/${eventItem?.image}`} alt={`Event ${eventItem?.title}`} width={533} height={280} />
                                            <div className={`${styles.timeMsg_box} ${styles.s_bg}`}>
                                                <div className={`${styles.day_box} ${styles.fc}`}>
                                                    <div className={styles.day}>
                                                        <span className={styles.day_val}>{new DateLibrary(eventItem?.start_date).getDate()}</span>
                                                        <span>→</span>
                                                        <span className={styles.day_val}>{new DateLibrary(eventItem?.start_date).getDate()}</span>
                                                    </div>
                                                    <span className={styles.month}>{new DateLibrary(eventItem?.start_date).getMonths()}</span>
                                                </div>
                                                <p className={styles.time}>{eventItem?.event_time}</p>
                                                <p className={styles.event_location}>{eventItem?.event_venue}</p>
                                            </div>
                                        </div>
                                        <div className={styles.info_box}>
                                            <h4 className={styles.info_title}>{eventItem?.title}</h4>
                                            <p className={styles.info_val}>{eventItem?.sub_title}</p>
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

export default EventCard;

