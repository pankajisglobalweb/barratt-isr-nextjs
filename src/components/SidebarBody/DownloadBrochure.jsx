"use client"

import Image from 'next/image';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import styles from './SideBarBody.module.scss';
import { useRouter,usePathname,useSearchParams } from 'next/navigation'
import Link from 'next/link';


//send "resource_id": "22,23" like this not in array

const DownloadBrochure = ({ fetchPropertyDatafromserver }) => {

    const router = useRouter()
    const pathname = usePathname();
    const searchParams = useSearchParams()

    const initialFormData = {
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        message: '',
        ref: `${pathname}${(searchParams.toString()!=="")?"?"+searchParams.toString():""}`,
        form_name: `Download Resources  - ${pathname}`,
        property_id : fetchPropertyDatafromserver?.properties?.id,
    };

    const [selectedCheckboxeid, setSelectedCheckboxesID] = useState([]);


    const [selectedCheckboxe, setSelectedCheckboxes] = useState([]);

    const [formData, setFormData] = useState(initialFormData);
    const [validationErrors, setValidationErrors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filename, setFilename] = useState(null);


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

    const handleCheckboxChange = (e) => {
        const { checked, value,name,id } = e.target;
        if (checked) {
            // Add the selected checkbox value to the state
            setSelectedCheckboxes((prevSelectedCheckboxes) => [
                ...prevSelectedCheckboxes,
                value,
            ]);
            setSelectedCheckboxesID((prevSelectedCheckboxesid) => [
                ...prevSelectedCheckboxesid,
                id,
            ]);
            setFilename(`${fetchPropertyDatafromserver?.properties?.slug}${name}`)
        } else {
            // Remove the unselected checkbox value from the state
            setSelectedCheckboxes((prevSelectedCheckboxes) =>
                prevSelectedCheckboxes.filter((item) => item !== value)
            );
            setSelectedCheckboxesID((prevSelectedCheckboxesid) =>
            prevSelectedCheckboxesid.filter((item) => item !== id)
        );

     }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
         setLoading(true);
         
        const updatedFormData = {
            ...formData,
            resource_id: selectedCheckboxeid.join(), // Convert array to comma-separated string
        };
           
        fetch(`${process.env.NEXT_PUBLIC_CMS_API_URL}enquiries/downlaod_resource`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedFormData),
        })
            .then(res => res.json())
            .then((response) => {
                setLoading(false);
                setValidationErrors(response.error_message);
                console.log(response);
                if (response.type == 'success') {
                    // downloadFileFromUrl()
                    setLoading(false);
                    selectedCheckboxe.forEach((file) => {
                        const fileURL = `https://dfl6m0l15t52.cloudfront.net/development/properties/${fetchPropertyDatafromserver?.properties?.id}/resources/${file}`;
                        // Use the downloadFileFromUrl function to download each file
                        downloadFileFromUrl(fileURL, file);
                    });
                    router.push('/thankyou');
                }

            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });

    };


    const downloadFileFromUrl = (fileURL, fileName) => {
        fileName = typeof fileName === 'undefined' ? fileURL.split('/').pop() : fileName;
        fetch(fileURL).then(async (response) => response.blob()).then(blob => {
            const fileObjectURL = window.URL.createObjectURL(blob);
            let anchor = document.createElement('a');
            anchor.href = fileObjectURL;
            anchor.target = '_target';
            anchor.download = fileName;
            anchor.rel = "noopener noreferrer";
            anchor.click();
            window.URL.revokeObjectURL(fileObjectURL);
        })
    };



    return (
        <>
            <Offcanvas.Body className={styles.form_box}>
                <p className={styles.red}>To find out more about {fetchPropertyDatafromserver?.properties?.name}, please enter 
                your details below to download a brochure.</p>
                
                <Form onSubmit={handleSubmit}>
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
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="validationCustom02">
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
                        {fetchPropertyDatafromserver?.properties?.sell_properties_resources?.map((item, type) => (
                            <div key={`inline-${type}`} className={styles.down_select}>
                                <Form.Check
                                    inline
                                    label={item.title}
                                    name={item.title}
                                    type="checkbox"
                                    value={item.file}
                                    id={`${item.id}`}
                                    onChange={handleCheckboxChange} // Use handleCheckboxChange for checkbox changes
                                    checked={selectedCheckboxe.includes(item.file)} // Set the checked state of the checkbox based on selectedCheckboxe
                                />
                            </div>
                        ))}
                    </Form.Group>
                   
                    <Form.Group>
                    <button type="submit" className={styles.contact_submit} disabled={loading}>
                        {loading ? <Spinner size='sm' variant="light" animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner> : null}
                        <span>SUBMIT ENQUIRY</span>
                        <Image height={28} width={28} src={'https://www.barrattlondonmena.com/img/goTo.png'} alt="download btn img" />
                    </button>
                    </Form.Group>
                </Form>

                <p className={styles.red}>Barratt London has designated Benham & Reeves to market its properties in India. To promote the properties, both Benham & Reeves and Barratt London will have access to your personal information, a responsibility both parties take seriously.</p>
                <p className={styles.red}>The personal information we will collect from you is for the purpose of marketing Barratt London properties to you which includes the sending of promotional material. Benham & Reeves will also share your personal information with its local agents who help us to market and sell our properties, including Benham & Reeves and its partners and sub-contractors.</p>
                <p className={styles.red}>For more information about how Benham & Reeves processes your personal information, please view it’s Privacy Statement. For more information about how Barratt London processes your personal information please view our privacy policy which is available here: <Link href={"/privacy-policy"}>Privacy Policy</Link></p>
            </Offcanvas.Body>

        </>
    );
}

export default DownloadBrochure;

