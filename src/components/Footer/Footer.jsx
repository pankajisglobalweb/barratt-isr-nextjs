"use client"

import React from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import Link from 'next/link';

const Footer = () => {
  

  return (
    <>
      <footer className={styles.footer}>
        <Container>
          <ul className={styles.logos}>
            <li>
              <Image src="/images/logo2.png" alt="logo 2" width={136} height={52} />
            </li>
            <li>
              <Image src="/images/logo1.png" alt="logo 1" width={136} height={52} />
            </li>
            <li>
              <Image src="/images/logo3.png" alt="logo 3" width={228} height={52} />
            </li>
          </ul>
          <div className={styles.footer_nav}>
            <ul className={styles.nav}>
              <li>
                <Link href={"/about-us"}>About</Link>
              </li>
              <li>
                <Link href={"/privacy-policy"}>Privacy Policy</Link>
              </li>
              <li>
                <Link href={"/privacy-policy/terms-of-use"}>Terms of Use</Link>
              </li>
            </ul>
          </div>
          <ul className={styles.share}>
            
            <li>
              <Link href={"https://www.instagram.com/barratthomesindia/"} target="_blank">
                <Image src="/images/share_1.png" alt="share 1" width={26} height={26} />
              </Link>
            </li>
            <li>
              <Link href={"https://www.youtube.com/@Barratthomesindia"} target="_blank">
                <Image src="/images/share_2.png" alt="share 2" width={26} height={26} />
              </Link>
            </li>
            <li>
              <Link href={"https://www.facebook.com/Barratthomesindia"} target="_blank">
                <Image src="/images/share_3.png" alt="share 3" width={26} height={26} />
              </Link>
            </li>
            
          </ul>
          <div className={styles.cop}>
            <div className={styles.cop_text}>© 2023 Barratt Homes. All rights reserved</div>
            <div className={styles.power_text}>Designed & Promoted by <Link href="https://www.isglobalweb.com/" target='_blank'>IS Global Web</Link></div>
            <ul className={styles.share}>
              <li>
                <Link href={"https://www.instagram.com/barratthomesindia/"} target="_blank">
                  <Image src="/images/share_1.png" alt="share 1" width={26} height={26} />
                </Link>
              </li>
              <li>
                <Link href={"https://www.youtube.com/@Barratthomesindia"} target="_blank">
                  <Image src="/images/share_2.png" alt="share 2" width={26} height={26} />
                </Link>
              </li>
              <li>
                <Link href={"https://www.facebook.com/Barratthomesindia"} target="_blank">
                  <Image src="/images/share_3.png" alt="share 3" width={26} height={26} />
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;

