import ContactBox from "@/components/ContactBox/ContactBox";
import styles from './index.module.scss';
import Link from "next/link";
import Image from "next/image";
import { getmetadata } from "@/libraries/getMetaData";



export async function generateMetadata() {
    try {
        const data = await fetch(`${process.env.NEXT_PUBLIC_CMS_API_URL}metas/?slug=/contact-us`, {
            cache: "no-store",
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => res.json())
        return getmetadata(data);
    } catch (e) {
        return {};
    }
}



const Contact = () => {
    return (
        <>
            <ContactBox
                conatcpage={true}
            />
            <section className={styles.updata}>
                <div className="container">
                    <h3>Stay updated!</h3>
                    <p>Follow us on social media for the latest news!</p>
                    <ul className={styles.share}>
                        <li>
                            <Link href={"https://www.instagram.com/barratthomesindia/"} target="_blank">
                                <Image src="/images/contact_b_icon_2.png" alt="contact icon 1" width={21} height={21} />
                            </Link>
                        </li>
                        <li>
                            <Link href={"https://www.youtube.com/@Barratthomesindia/"} target="_blank">
                                <Image src="/images/contact_b_icon_3.png" alt="contact icon 2" width={21} height={21} />
                            </Link>
                        </li>
                        <li>
                            <a href={"https://www.facebook.com/Barratthomesindia/"} target="_blank">
                                <Image src="/images/share_3.png" alt="contact icon 3" width={21} height={21} />
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Contact;