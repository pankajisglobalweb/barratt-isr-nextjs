"use client"


import { useState, useEffect } from 'react';
import Image from 'next/image';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import styles from './SideBarBody.module.scss';
import Link from 'next/link';
import DownloadBrochure from './DownloadBrochure';
import StampDutyCalculator from './StampDutyCalculator';
import { useRouter,usePathname,useSearchParams } from 'next/navigation'
import Spinner from 'react-bootstrap/Spinner';


const SideBarBody = ({ type,fetchPropertyDatafromserver,name,title }) => {
    const pathname = usePathname();
    const searchParams = useSearchParams()
    const router = useRouter()
    const initialFormData = {
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        message: '',
        ref: `${pathname}${(searchParams.toString()!=="")?"?"+searchParams.toString():""}`,
        form_name: title !== null && name !== undefined ? `Enquries for ${name} - ${title}`: `Enquiry for contact us`,
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

    return (
        <>
            {type == "ContactUS" ?
                <Offcanvas.Body className={styles.form_box}>
                    <Form  onSubmit={handleSubmit}>

                            <Form.Group controlId="validationCustom01">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="First name"
                                    name="firstname"
                                    value={formData.firstname}
                                    onChange={handleInputChange}
                                />
                                <span className={styles.error}>
                                    {validationErrors?.firstname}
                                </span>
                            </Form.Group>
                            <Form.Group controlId="validationCustom02">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Last name"
                                    name="lastname"
                                    value={formData.lastname}
                                    onChange={handleInputChange}

                                />
                                <span className={styles.error}>
                                    {validationErrors?.lastname}
                                </span>
                            </Form.Group>
                            <Form.Group  controlId="validationCustom02">
                                <Form.Label>Phone number</Form.Label>
                                <Form.Control
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="Phone"

                                />
                                <span className={styles.error}>
                                    {validationErrors?.phone}
                                </span>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="validationCustom02">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="mail"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Email"

                                />
                                <span className={styles.error}>
                                    {validationErrors?.email}
                                </span>
                            </Form.Group>
                            <Form.Group controlId="validationCustom02">
                                <Form.Label>Hello, I am interested in…</Form.Label>
                                <textarea className='form-control'
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Leave a comment here" />
                                <span className={styles.error}>
                                    {validationErrors?.message}
                                </span>
                            </Form.Group>
                        <Form.Group>
                        <button type="submit" className={styles.contact_submit} disabled={loading}>
                        {loading ? <Spinner size="sm" variant="light" animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner> : null}
                            <span>SUBMIT ENQUIRY</span>
                            <Image height={28} width={28} 
                            src={'https://www.barrattlondonmena.com/img/goTo.png'} />
                        </button>
                        </Form.Group>
                    </Form>
                    <p>Barratt London has designated Benham & Reeves to market its properties in India. To promote the properties, both Benham & Reeves and Barratt London will have access to your personal information, a responsibility both parties take seriously. The personal information we will collect from you is for the purpose of marketing Barratt London properties to you which includes the sending of promotional material. Benham & Reeves will also share your personal information with its local agents who help us to market and sell our properties, including Benham & Reeves and its partners and sub-contractors. For more information about how Benham & Reeves processes your personal information, please view it’s Privacy Statement.
                        For more information about how Barratt London processes your personal information please view our <Link href="/privacy-policy">privacy policy</Link> which is available here: <Link href="/privacy-policy">Privacy policy</Link></p>
                </Offcanvas.Body>
                : null}

            {type == "brochure" ?
                 <DownloadBrochure fetchPropertyDatafromserver={fetchPropertyDatafromserver}/>
                : null}
            {type == "calculator" ?
                <StampDutyCalculator />
                : null}
        </>
    );
}

export default SideBarBody;

