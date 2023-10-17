"use client"

import Image from 'next/image';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SideBarBody from '../SidebarBody/SidebarBody';
import './sidebar.scss';
import styles from './sidebar.module.scss';


const SideBar = ({ show, handleClose,data,type,fetchPropertyDatafromserver,name,title}) => {
    
    return (
        <>
            <Offcanvas show={show} onHide={handleClose}  className={`${styles.msg_mask_content} OffcanvasBox`} placement={'end'}>
                <Offcanvas.Header className={styles.top_box} closeButton>
                    <Offcanvas.Title className={styles.title}>{data}</Offcanvas.Title>
                </Offcanvas.Header>
                <SideBarBody fetchPropertyDatafromserver={fetchPropertyDatafromserver} type={type} name={name} title={title}/>
            </Offcanvas>
        </>
    );
}

export default SideBar;

