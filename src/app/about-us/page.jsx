import { getmetadata } from '@/libraries/getMetaData';
import styles from './index.module.scss';


export async function generateMetadata() {
    try {
        const data = await fetch(`${process.env.NEXT_PUBLIC_CMS_API_URL}metas/?slug=/about-us`, {
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


const About = () => {
    return (
        <>
            <section className={styles.content}>
                <div className='container'>
                    <div className={styles.content_box}>
                        <div className={styles.msg_box}>
                            <h1 className='mb-1'>WHY CHOOSE BARRATT LONDON?</h1>
                            <h2>BARRATT LONDON&apos;S VISION</h2>
                            <p>Since our inaugural London project in 1982, Barratt London has been
                                dedicated to designing top-tier homes for Londoners and international
                                clientele — emphasising excellence in design, construction and client
                                service. Barratt London&apos;s objective is to ensure that all Londoners as
                                well as our overseas clients have access to high-quality homes, thereby
                                supporting the ongoing growth of London as a significant global city and
                                Barratt&#39;s essential contribution to this growth.</p>
                            <p>Besides, London takes great pride in its role, overseeing the creation
                                of over 1,500 new homes annually.</p>

                            <h2 className='mt-1 mb-1'>EXCEPTIONAL FIVE-STAR CUSTOMER SERVICE</h2>
                            <p>As an integral part of Barratt Developments PLC, the UK&#39;s most
                                recommended housebuilder, we are fully committed to delivering outstanding
                                service to our clients. Our unwavering dedication has earned us the
                                coveted maximum five-star rating for customer satisfaction from the
                                Home Builders Federation <strong>testing</strong> every year since 2010*. This accolade signifies
                                to our clients that when investing in a Barratt London home, they secure
                                a residence of superior quality while receiving the best customer service.</p>

                            <h2 className='mt-1 mb-1'>EXCEPTIONAL FIVE-STAR CUSTOMER SERVICE</h2>
                            <p>As an integral part of Barratt Developments PLC, the UK&#39;s most
                                recommended housebuilder, we are fully committed to delivering outstanding
                                service to our clients. Our unwavering dedication has earned us the
                                coveted maximum five-star rating for customer satisfaction from the
                                Home Builders Federation <strong>testing</strong> every year since 2010*. This accolade signifies
                                to our clients that when investing in a Barratt London home, they secure
                                a residence of superior quality while receiving the best customer service.</p>

                            <h2 className='mt-1 mb-1'>REAL PEACE OF MIND</h2>
                            <p>Every Barratt London residential unit has a ten-year structural guarantee from the NHBC. Further, they come with a two-year warranty for fixtures and fittings** — providing investors with an additional layer of assurance from the moment they step into their new abode.</p>

                            <h6 className='mt-1 mb-1'>FOOTNOTES</h6>
                            <p><small>* Barratt Developments PLC, encompassing Barratt London, Barratt Homes and David Wilson Homes, is the sole major national housebuilder to receive this award for 14 consecutive years consistently <br />
                                ** The initial two years are covered by the Builder Warranty and NHBC Guarantee</small></p>

                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default About;