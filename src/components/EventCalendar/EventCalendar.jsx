"use client"
import Image from 'next/image';
import styles from './event.module.scss'
import { Container } from 'react-bootstrap';
import { useState } from 'react';


const EventCalender = () => {


    const [searchKeyword, setSearchKeyword] = useState('');
    const [selectedDate, setSelectedDate] = useState('');


    const handleSearchClick = () => {
        const withoutFilter = false; // Set this to true or false as needed
    
        // Construct the query parameters
        const queryParams = new URLSearchParams();
        
        if (!withoutFilter) {
          queryParams.set('search_key', searchKeyword);
          queryParams.set('search_date', selectedDate);
        }
    
        // Convert the query parameters to a string
        let queryString = withoutFilter ? '' : `?search_key=${searchKeyword}&search_date=${selectedDate}`;

        console.log(queryString);
    
        // Make the API request with query parameters
        fetch(`${process.env.NEXT_PUBLIC_CMS_API_URL}sell-properties?${queryString}`, {
          method: 'POST', // You might want to change this to 'GET' if you are sending parameters in the query string
          headers: {
            'Content-Type': 'application/json',
          },
          cache: 'no-cache'
          // Include the request body here if needed
          // body: JSON.stringify(formData),
        })
          .then((res) => res.json())
          .then((response) => {
            console.log(response);
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
                                <input className={styles.dateInput} placeholder="Date"
                                    value={selectedDate}
                                    onChange={(e) => setSelectedDate(e.target.value)}
                                    type='date' />
                            </div>
                            <button className={styles.search_submit} onClick={handleSearchClick}>SEARCH</button>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default EventCalender;

