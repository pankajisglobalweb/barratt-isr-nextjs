"use client"
import styles from './EventDetails.module.scss';
import { Col, Row, Container } from "react-bootstrap";
import Image from "next/image";
import { useRouter,usePathname,useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Spinner from 'react-bootstrap/Spinner';
import DateLibrary from '@/libraries/DateLibrary';

const Eventcards = ({ eventdata }) => {

    const [event, setEvent] = useState(eventdata?.event);
    const [isLoaded, setIsLoaded] = useState(false);
    const [validationErrors, setValidationErrors] = useState([]);
    const [loading, setLoading] = useState(false);
    const pathname = usePathname();
    const searchParams = useSearchParams()
    const router = useRouter()
    const initialFormData = {
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        message: '',
        ref: pathname+"?"+searchParams,
        form_name: `Enquiry for ${event?.title}`,
    };
    const [formData, setFormData] = useState(initialFormData);

    useEffect(() => {
        const retrievedData = {
            ...initialFormData,
        };
        const localStorageKeys = [
            'utm_source',
            'fbclid',
            'gclid',
            'sourceHostName',
            'sourceUrl',
        ];
        const localData = localStorageKeys.reduce((data, key) => {
            data[key] = localStorage.getItem(key) || '';
            return data;
        }, {});

        setFormData({ ...retrievedData, ...localData });

    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        fetch(`${process.env.NEXT_PUBLIC_CMS_API_URL}enquiries/contact-us`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(res => res.json())
            .then((response) => {
                setLoading(false);
                setValidationErrors(response.error_message);
                if (response.type == 'success') {
                    router.push('/thankyou');
                    setLoading(false);
                }

            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    };


    return (
        <>
            <section className={`${styles.top_msg}`}>
                <Container>
                    <Row>
                        <Col sm={12} md={8}>
                            <div className={styles.pageTitleBox}>
                                <h1 className={styles.pageTitle}>{event?.title}</h1>
                                <p>{event?.sub_title}</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className={styles.eventSticky}>
                        <Col sm={12} md={7} className={styles.left_content}>
                            <div className={`${styles.event} ${styles.s_bg}`}>
                                <Image src={`${process.env.NEXT_PUBLIC_MEDIA_URL}events/${event?.id}/${event?.image}`} alt={`Event ${event?.title}`} width={626} height={431} />
                                <div className={styles.event_content} dangerouslySetInnerHTML={{ __html: event?.description }}>

                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={5} className={styles.login_box}>
                            <div className={styles.login}>
                                <div className={styles.time_box}>
                                    <div className={`${styles.days_box} ${styles.bg}`}>
                                        <div className={styles.days_content}>
                                            <div className={styles.days_row}>
                                                <p className={styles.day}>{new DateLibrary(event?.start_date).getDate()}</p>
                                                <span>-</span>
                                                <p className={styles.day}>{new DateLibrary(event?.end_date).getDate()}</p>
                                                <p className={styles.day}>{new DateLibrary(event?.start_date).getMonths()}</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className={`${styles.time_info} ${styles.s_bg}`}>
                                        <p className={styles.time_val}><span>Time: </span>{event?.event_time}</p>
                                        <p className={styles.location}><span>Venue: </span>{event?.event_venue}</p>
                                    </div>
                                </div>
                                <div className={styles.form_box}>
                                    <h4>Register now</h4>
                                    <form onSubmit={handleSubmit} className={styles.login_form}>
                                        <div className={styles.name}>
                                            <h6 className={styles.input_title}>First name</h6>
                                            <input type="text" placeholder="First name"
                                                name="firstname"
                                                value={formData.firstname}
                                                onChange={handleInputChange}
                                                className={`${styles.form_item} error ${styles.Fname}`} />
                                            <span className={styles.error}>
                                                {validationErrors?.firstname}
                                            </span>
                                        </div>
                                        <div className={styles.name}>
                                            <h6 className={styles.input_title}>Last name</h6>
                                            <input type="text" placeholder="Last name"
                                                name="lastname"
                                                value={formData.lastname}
                                                onChange={handleInputChange}
                                                className={`${styles.form_item} ${styles.Lname}`} />
                                            <span className={styles.error}>
                                                {validationErrors?.lastname}
                                            </span>
                                        </div>
                                        <div className={styles.city}>
                                            <h6 className={styles.input_title}>Phone number</h6>
                                            <input type="text" placeholder="Phone number"
                                                name='phone'
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className={`${styles.form_item} ${styles.phone}`} />
                                            <span className={styles.error}>
                                                {validationErrors?.phone}
                                            </span>
                                        </div>
                                        <div className={styles.email}>
                                            <h6 className={styles.input_title}>Email</h6>
                                            <input type="text" placeholder="Email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className={`${styles.form_item} ${styles.email}`} />
                                            <span className={styles.error}>
                                                {validationErrors?.email}
                                            </span>
                                        </div>

                                        <div className={styles.email}>
                                            <h6 className={styles.input_title}>Enquiry</h6>
                                            <textarea type="text"
                                                placeholder="Hello, I am interested in…"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                className={`${styles.form_item} ${styles.text}`} />
                                            <span className={styles.error}>
                                                {validationErrors?.message}
                                            </span>
                                        </div>


                                        <button type="submit" className={styles.submit}>
                                            {loading ? <Spinner size="sm" variant="light" animation="border" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </Spinner> : null}
                                            <span>REGISTER NOW</span>
                                            <Image src="/images/goTo.png" alt="" width={22} height={27} />
                                        </button>
                                    </form>
                                    <p>
                                    Barratt London has designated Benham & Reeves to market its 
                                    properties in India. To promote the properties, both Benham & 
                                    Reeves and Barratt London will have access to your personal 
                                    information, a responsibility both parties take seriously. 
                                    The personal information we will collect from you is for the 
                                    purpose of marketing Barratt London properties to you which 
                                    includes the sending of promotional material. Benham & Reeves 
                                    will also share your personal information with its local agents 
                                    who help us to market and sell our properties, including 
                                    Benham & Reeves and its partners and sub-contractors. For 
                                    more information about how Benham & Reeves processes your 
                                    personal information, please view it&#39;s Privacy Statement. 
                                    For more information about how Barratt London processes your 
                                    personal information please view our 
                                    <Link href={"/privacy-policy"}> privacy policy </Link> 
                                    which is available here:
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Eventcards;