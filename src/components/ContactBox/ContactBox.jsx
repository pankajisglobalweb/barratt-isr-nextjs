"use client"
import Image from 'next/image';
import TitleMain from '../TitleMain/TitleMain';
import styles from './ContactBox.module.scss';
import { useState, useEffect } from 'react';
import { useRouter,usePathname,useSearchParams } from 'next/navigation'
import Spinner from 'react-bootstrap/Spinner';
import Link from 'next/link';



const ContactBox = ({conatcpage}) =>{
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams()

    const initialFormData = {
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        message: '',
        ref: `${pathname}${(searchParams.toString()!=="")?"?"+searchParams.toString():""}`,
    };

    const [formData, setFormData] = useState(initialFormData);
    const [validationErrors, setValidationErrors] = useState([]);
    const [loading, setLoading] = useState(false);

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


    return(
        <>
            <section className={`${styles.contact} ${conatcpage? styles.contactPage : ''}`}>
                <div className={`${styles.contact_container} container`}>
                <div className={styles.contact_info}>
                    <TitleMain 
                    title={"Contact us"}
                    tagName={"h1"}
                    />
                    <div className={styles.info_box}>
                    Benham & Reeves has been appointed by Barratt London to represent its properties in India. To effectively promote these properties, both Benham & Reeves and Barratt London will have access to your personal information, a responsibility that both parties take very seriously.<br/><br/>
                    The personal information we collect from you will be used to market Barratt London properties to you, which includes sending promotional materials. Benham & Reeves will also share your personal information with its local agents who assist in marketing and selling our properties, including Benham & Reeves India and its partners and subcontractors. <br/><br/>
                    For more details on how Benham & Reeves processes your personal information, please refer to its Privacy Statement. For information on how Barratt London processes your personal information, please view our Privacy Policy, <Link href="/privacy-policy" target="_blank"> available here:</Link>
                    </div>
                </div>
                <div className={`${styles.contact_right} col-md-7`}>
                    <form onSubmit={handleSubmit} className={styles.contact_form}>
                    <div className={styles.name}>
                        <h6 className={styles.input_title}>First name</h6>
                        <input 
                        type="text" 
                        placeholder="First name" 
                        className={`${styles.form_item} ${styles.Fname}`} 
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleInputChange}
                        />
                        <div className={styles.error}>
                            <span> {validationErrors?.firstname}</span>
                        </div>
                    </div>
                    <div className={styles.name}>
                        <h6 className={styles.input_title}>Last name</h6>
                        <input 
                        type="text" 
                        placeholder="Last name" 
                        className={`${styles.form_item} 
                        ${styles.Lname}`} 
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleInputChange}
                        />
                        <div className={styles.error}>
                            <span>{validationErrors?.lastname}</span>
                        </div>
                    </div>
                    <div className={styles.phone}>
                        <h6 className={styles.input_title}>Phone number</h6>
                       
                        <input 
                        type="text" 
                        placeholder="Phone number" 
                        className={`${styles.form_item} ${styles.phone}`} 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        />
                        
                        
                        <div className={styles.error}>
                            <span>{validationErrors?.phone}</span>
                        </div>
                    </div>
                    <div className={styles.email}>
                        <h6 className={styles.input_title}>Email</h6>
                        <input 
                        type="text" 
                        placeholder="Email" 
                        className={`${styles.form_item} ${styles.email}`} 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        />
                        <div className={styles.error}>
                            <span>{validationErrors?.email}</span>
                        </div>
                    </div>
                    <div className={styles.text}>
                        <h6 className={styles.input_title}>Enquiry</h6>
                        <textarea 
                        placeholder="Hello, I am interested in…" 
                        className={`${styles.form_item} ${styles.text}`}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}   
                        ></textarea>
                        <div className={styles.error}>
                            <span>{validationErrors?.message}</span>
                        </div>
                    </div>
                    <p>By clicking the button below, you agree to our <Link href={"/privacy-policy/terms-of-use"}>Terms and Conditions</Link> and have read and understood the <Link href={"/privacy-policy"}>Privacy Policies</Link>.</p>
                    <button type='submit' className={styles.submit}>
                        {loading ?  <Spinner size="sm" variant="light" animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                    </Spinner> : null}                                                       
                    <span>SUBMIT ENQUIRY</span>
                    <Image src="/images/goTo.png" width={22} height={27} alt='submit image' />
                    </button>
                    </form>
                    
                </div>
                </div>
            </section>
        </>
    );
}

export default ContactBox;

