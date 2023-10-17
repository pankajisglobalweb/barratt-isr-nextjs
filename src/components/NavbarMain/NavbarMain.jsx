"use client"

import React, { useState, useEffect } from 'react';
import styles from './NavbarMain.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from 'react-bootstrap';
import { usePathname, useSearchParams } from 'next/navigation'







const Navbarmain = ({ sourceData }) => {
    const pathname = usePathname();
    const [navFlg, setNavFlg] = useState(false);
    const [activeItem, setActiveItem] = useState(null);


    const searchParams = useSearchParams();
    const utm_source = searchParams.get('utm_source')
    const utm_medium = searchParams.get('utm_medium')
    const utm_campaign = searchParams.get('utm_campaign')
    const fbclid = searchParams.get('fbclid')
    const gclid = searchParams.get('gclid') || searchParams.get('gbraid') || searchParams.get('wbraid')





    useEffect(() => {

        const ourPath = window.location.origin;
        const ourHostNamelocal = ourPath.split('//')[1];

        if (gclid) {
            localStorage.setItem('gclid', gclid);
        }

        if (utm_source) {
            localStorage.setItem('utm_source', utm_source);
        }

        if (utm_medium) {
            localStorage.setItem('utm_medium', utm_medium);
        }

        if (fbclid) {
            localStorage.setItem('fbclid', fbclid);
        }
        if (gclid) {
            localStorage.setItem('gclid', gclid);
        }

        console.log(ourHostNamelocal, sourceData.sourceHost);

        if (ourHostNamelocal !== sourceData.sourceHost) {
            localStorage.setItem('sourceHostName', (sourceData.sourceHost || ''));
            localStorage.setItem('sourceUrl', (sourceData.sourceUrl || ''));
            localStorage.setItem('utm_source', (utm_source || ''));
            localStorage.setItem('utm_medium', (utm_medium || ''));
            localStorage.setItem('utm_campaign', (utm_campaign || ''));
            localStorage.setItem('fbclid', (fbclid || ''));
            localStorage.setItem('gclid', (gclid || ''));
        }
    }, []);



    const handleLineBoxClick = () => {
        setNavFlg(prevNavFlg => !prevNavFlg);
    };
    const handleItemClick = (index) => {
        if (activeItem === index) {
            setActiveItem(null); // Deactivate if it's the same item
        } else {
            setActiveItem(index); // Activate if it's a different item
        }
    };

    return (
        <>
            <nav className={`${styles.nav_pc} ${navFlg ? styles.active : ''}`}>
                <Container className={styles.box}>
                    <div className={styles.nav_box}>
                        <Link href={"/"} className={styles.pc}><Image src="/images/main_logo_pc_black.png" alt="logo" width={188} height={16} /></Link>
                        <Link href={"/"} className={styles.md}><Image src="/images/main_logo_md.png" alt='logo mobile' width={241} height={21} /></Link>
                        <ul className={styles.nav}>
                            <li>
                                <Link href={"/properties-for-sale"}>LONDON PROPERTIES</Link>
                            </li>
                            <li>
                                <Link href={"/events"}>EVENTS</Link>
                            </li>
                            <li className="">
                                <Link href={"/insights"}>INSIGHTS</Link>
                            </li>
                            <li>
                                <Link href={"/about-us"}>ABOUT US</Link>
                                <ul className={styles.s_nav}>
                                    <li><Link href={"/about-us"}>About us</Link></li>
                                    <li><Link href={"/our-team"}>Our team</Link></li>
                                </ul>
                            </li>
                            <li className="">
                                <Link href={"/contact-us"}>CONTACT US</Link>
                            </li>
                        </ul>
                        <div className={styles.line_box} onClick={handleLineBoxClick}>
                            <div className={styles.line}>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </Container>
                <div className={`${styles.nav_md} ${navFlg ? styles.showMobNav : styles.dshowMobNav }`}>
                    <ul className={styles.nav}>
                        <li>
                            <Link className={`${pathname === '/properties-for-sale/' ? styles.mactive : ''}`} href={"/properties-for-sale"} onClick={() => setNavFlg(false)}>LONDON PROPERTIES</Link>
                        </li>
                        <li>
                            <Link className={`${pathname === '/events/' ? styles.mactive : ''}`} href={"/events"} onClick={() => setNavFlg(false)}>EVENTS</Link>
                        </li>
                        <li>
                            <Link className={`${pathname === '/insights/' ? styles.mactive : ''}`} href={"/insights"} onClick={() => setNavFlg(false)}>INSIGHTS</Link>
                        </li>
                        <li className={`${styles.is_sNav} ${activeItem === 2 ? styles.is_open : ''}`}>
                            <Link href={"/about-us"} onClick={() => handleItemClick(2)}>ABOUT US</Link>
                            <ul className={styles.s_nav} style={{ display: activeItem === 2 ? 'block' : '' }}>
                                <li><Link className={`${pathname === '/about-us/' ? styles.mactive : ''}`} href={"/about-us"} onClick={() => setNavFlg(false)}>About us</Link></li>
                                <li><Link className={`${pathname === '/our-team/' ? styles.mactive : ''}`} href={"/our-team"} onClick={() => setNavFlg(false)}>Our team</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link className={`${pathname === '/contact-us/' ? styles.mactive : ''}`} href={"/contact-us"} onClick={() => setNavFlg(false)}>CONTACT</Link>
                        </li>
                    </ul>
                    <div className={styles.nav_md_bt_box}>
                        <div className={styles.nav_contact}>
                            <div>
                                <Image src="/images/email.png" alt="" width={28} height={28} />
                                <span>Contact us</span>
                            </div>
                            <div>
                                <Image src="/images/phone.png" alt="" width={28} height={28} />
                                <span>+971 4 518 2538</span>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
        </>
    );
}

export default Navbarmain;