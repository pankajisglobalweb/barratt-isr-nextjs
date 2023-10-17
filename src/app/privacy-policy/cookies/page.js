import Link from 'next/link';
import styles from '../index.module.scss';
import { getmetadata } from '@/libraries/getMetaData';


export async function generateMetadata() {
    try {
        const data = await fetch(`${process.env.NEXT_PUBLIC_CMS_API_URL}metas/?slug=/privacy-policy/cookies`, {
            cache: "no-store",
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => res.json())
        return getmetadata(data)
    } catch (e) {
        return {};
    }
}


const TermsOfUse = () => {
    return (
        <>
            <section className={styles.content}>
                <div className='container'>
                    <div className={styles.my_row}>
                        <div className={styles.content_left}>
                            <ul>
                                <li><Link href="/privacy-policy">Barratt Homes Privacy Policy</Link></li>
                                <li><Link href="/privacy-policy/hardington-residential">Benham and Reeves Privacy policy</Link></li>
                                <li><Link href="/privacy-policy/terms-of-use">Terms of use</Link></li>
                                <li><Link href="/privacy-policy/cookies" className={styles.active}>Cookie Policy</Link></li>
                            </ul>
                        </div>

                        <div className={styles.content_right}>
                            <h1>Cookie Policy</h1>
                            <div className={styles.detail}>
                                <h2>What are cookies?</h2>
                                <p>
                                    Cookies are text files stored on the device you use to visit our website. Some cookies are essential for our websites to work, others collect anonymous or personal information to allow us to improve our websites and to show you relevant content.
                                </p>
                                <p>At Benham and Reeves we use different types of cookies and you can read more about these below.</p>
                                <h3>How long are cookies stored on my device?</h3>
                                <p>Two types of cookies can be stored:</p>
                                <ul>
                                    <li>Session cookies which are automatically deleted when you close your browser.</li>
                                    <li>Persistent cookies which remain on your computer until they are deleted or expire. Persistent cookies can keep your user preferences to help make future browsing easier and more relevant.</li>
                                </ul>

                                <h3>How do I change my cookie preferences?</h3>
                                <p>You can change your cookie preferences here.</p>

                                <h3>Types of cookies we use</h3>
                                <h2>Essential cookies</h2>
                                <p>Without these cookies, our website may not work properly. These cookies are strictly necessary for Benham and Reeves sites to ensure security, ease of use and functionality. Others provide you with services available across our websites and are needed to use some of its features.</p>

                                <h3>Analytics cookies</h3>
                                <p>Analytics cookies are used to understand how visitors use our website. This includes capturing visitors&apos; location, how pages are browsed, patterns and preferences within their journey, time spent on site, and additional data that helps us improve your experience. Some of these include third party cookies used by external companies, which provide a service to Benham and Reeves, and are implemented to provide you with a quick and seamless personalised experience.</p>

                                <h2>Performance and functional cookies</h2>
                                <p>
                                    We use performance & functional cookies to further improve our website in order to always provide you with the best possible online experience. For example, to ensure the speed of our web pages, enable video content and faster browsing. These technologies are not always essential but without these cookies, certain website functionality may become unavailable. Some of these cookies are third party cookies used by third party companies which provide a service to Benham and Reeves.
                                </p>
                                <h3>Advertising and marketing cookies</h3>
                                <p>Advertising and marketing cookies are used to show you adverts relevant to you, your interests and your interaction with Benham and Reeves and our websites. We use this data to improve our communications with you. They are used to show you relevant advertisements, to limit the number of times you see an advert, and to help measure the effectiveness of our advertising campaigns.</p>
                                <p>These cookies can also remember that you have visited a website and collect information about your browsing habits in order to manage your preferences accordingly.</p>
                                <p>Some of these cookies can identify you as an individual based on IP address and a connected email address. These cookies are third party cookies used by third party companies which provide a service to Benham and Reeves.</p>
                                <h2>Social media cookies:</h2>
                                <p>
                                    Social media cookies are placed on our website and, if you are logged into the social media platform, can identify your visit and collect information about your browsing habits. Sometimes we use these cookies to include or exclude you from social media advertising and to help measure the effectiveness of these advertising campaigns. These cookies are third party cookies used by third party companies which provide a service to Benham and Reeves.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default TermsOfUse;