"use client"
import { Container, Row, Col } from 'react-bootstrap';
import styles from './thanks.module.scss';
import Link from 'next/link';
import Image from 'next/image';


export default function Thankyou() {
    return (
        <div className={styles.thamksPage}>
            <Container>
                <Row className='justify-content-center'>
                    <Col lg={9}>
                        <div className={styles.thanksMainBox}>                            
                            <Image src="/images/thanks.png" alt="thanks image" width={208} height={158} />
                            <h1>Thank you for registering your interest.</h1>
                            <h2>A member of our team will get in touch shortly.</h2>
                            <Link href="/">Go Back to Home</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        
    )
}
