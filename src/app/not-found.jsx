"use client"
import styles from "./not-found.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

export default function NotFound() {
    return (
        <>
            <section className={styles.errorPage}>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className={styles.errorMainBox}>
                                <h1>Page not Found</h1>
                                <Image src="/images/404.png" alt="404 error image" width={365} height={158} />
                                <p>Why not try finding what you want using the navigation above</p>
                                <Link href="/">Go Back to Home</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
