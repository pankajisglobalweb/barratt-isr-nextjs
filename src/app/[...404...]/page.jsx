"use client"

import { notFound } from "next/navigation"
import styles from './404.module.scss';
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";


export default function NotFound() {
  //return notFound()

  return(
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
  );
}