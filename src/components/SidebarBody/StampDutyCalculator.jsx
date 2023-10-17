"use client"

import Image from 'next/image';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import styles from './SideBarCalculator.module.scss';
import { Col, Container, Row, Table } from 'react-bootstrap';



const StampDutyCalculator = ({ type }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [errormsg, setRrrorMsg] = useState(null);


    let [calData, setCalData] = useState({
        price: "",
        isFirstHome: "Yes",
        isNonUkResidents: "Yes",
        isAdditionalProperty: "No"
    });

    let [results, setResults] = useState({
        totalStampDuty: 0,
        totalTaxableAmount: 0,
        effectiveRate: 0,
        stampCalculations: [],
    });

    const taxBands = {
        uk: {
            firstHome: (amount) => {
                if (amount <= 625000) {
                    return [
                        { min: 0, max: 425000, percenTage: 0 },
                        { min: 425000, max: 625000, percenTage: 5 },
                        { min: 625000, max: 1500000, percenTage: 10 },
                        { min: 1500000, max: '+', percenTage: 12 },
                    ];
                } else {
                    return [
                        { min: 0, max: 250000, percenTage: 0 },
                        { min: 250000, max: 925000, percenTage: 5 },
                        { min: 925000, max: 1500000, percenTage: 10 },
                        { min: 1500000, max: '+', percenTage: 12 },
                    ];
                }
            },
            additionalHome: (amount) => {
                return [
                    { min: 0, max: 250000, percenTage: 3 },
                    { min: 250000, max: 925000, percenTage: 8 },
                    { min: 925000, max: 1500000, percenTage: 13 },
                    { min: 1500000, max: '+', percenTage: 15 },
                ];
            }
        },
        overSeas: {
            firstHome: (amount) => {
                if (amount <= 625000) {
                    return [
                        { min: 0, max: 425000, percenTage: 2 },
                        { min: 425000, max: 625000, percenTage: 7 },
                        { min: 625000, max: 1500000, percenTage: 12 },
                        { min: 1500000, max: '+', percenTage: 14 },
                    ];
                } else {
                    return [
                        { min: 0, max: 250000, percenTage: 2 },
                        { min: 250000, max: 925000, percenTage: 7 },
                        { min: 925000, max: 1500000, percenTage: 12 },
                        { min: 1500000, max: '+', percenTage: 14 },
                    ];
                }
            },
            additionalHome: (amount) => {
                return [
                    { min: 0, max: 250000, percenTage: 5 },
                    { min: 250000, max: 925000, percenTage: 10 },
                    { min: 925000, max: 1500000, percenTage: 15 },
                    { min: 1500000, max: '+', percenTage: 17 },
                ];
            }
        }
    };



    function numberWithCommas(x) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        let amt = parts.join(".");
        return (amt !== NaN) ? amt : '';
    }

    function convertNumberToString(number) {
        return numberWithCommas(number.toFixed(2));
    }

    const handleChange = (event) => {
        let { name, value } = event.target;
        if (name === 'price') {
            value = value.replaceAll(/,/gi, '');
            value = (value !== NaN) ? value : "";
        }
        let tmpObj = { [name]: value };
        if (name === "isFirstHome" || name === "isAdditionalProperty") {
            let { alterName, alterValue } = {
                alterName: (name === "isFirstHome") ? "isAdditionalProperty" : "isFirstHome",
                alterValue: (value === "Yes") ? "No" : "Yes"
            };
            tmpObj = { ...tmpObj, [alterName]: alterValue };
        }
        setCalData({ ...calData, ...tmpObj });
    }

    const getPercentage = (percent, total) => {
        return ((percent / 100) * total);
    }

    const handleCalculation = () => {




        if (calData.price === '') {
            setRrrorMsg('*required field');
        }

        else {

            var slab = [];
            setRrrorMsg();
            if (calData.isNonUkResidents === "No") {//UK Case
                if (calData.isFirstHome === "Yes") {
                    slab = taxBands.uk.firstHome(calData.price);
                } else {
                    slab = taxBands.uk.additionalHome(calData.price);
                }
            } else {//Overseas Case
                if (calData.isFirstHome === "Yes") {
                    slab = taxBands.overSeas.firstHome(calData.price);
                } else {
                    slab = taxBands.overSeas.additionalHome(calData.price);
                }
            }
            var returnData = [];
            var totalStampDuty = 0;
            var totalTaxableAmount = 0;
            var effectiveRate = 0;
            slab.forEach(function (item, index) {
                var data = {};
                data.taxRate = item.percenTage;
                if (item.max !== '+') {
                    if (item.min < calData.price && item.max >= calData.price) {
                        data.taxBand = `£${(item.min > 0) ? (numberWithCommas(item.min)) : 0} - £${numberWithCommas(item.max)}`;
                        data.taxableAmount = (calData.price - item.min);
                        data.taxRate = item.percenTage;
                        data.stampDuty = getPercentage(item.percenTage, calData.price - item.min);
                    } else {
                        data.taxBand = `£${(item.min > 0) ? (numberWithCommas(item.min)) : 0} - £${numberWithCommas(item.max)}`;
                        data.taxableAmount = (item.max < calData.price) ? (item.max - item.min) : 0;
                        data.taxRate = item.percenTage;
                        data.stampDuty = getPercentage(item.percenTage, data.taxableAmount);
                    }

                } else if (item.min < calData.price) {
                    data.taxBand = `£${(item.min > 0) ? (numberWithCommas(item.min)) : 0}+`;
                    data.taxableAmount = (calData.price > item.min) ? (calData.price - item.min) : 0;
                    data.taxRate = item.percenTage;
                    data.stampDuty = getPercentage(item.percenTage, data.taxableAmount);
                } else {
                    data.taxBand = `£${numberWithCommas(item.min)} + `;
                    data.taxableAmount = 0;
                    data.taxRate = item.percenTage;
                    data.stampDuty = getPercentage(item.percenTage, data.taxableAmount);
                }
                totalStampDuty += data.stampDuty;
                totalTaxableAmount += data.taxableAmount;
                effectiveRate = (100 * totalStampDuty) / totalTaxableAmount;
                returnData.push(data);
            });
            setResults({
                ...results,
                totalStampDuty: totalStampDuty,
                totalTaxableAmount: totalTaxableAmount,
                effectiveRate: effectiveRate,
                stampCalculations: returnData
            });
            setShow(true);
        }
    }

    return (
        <>
            <Offcanvas.Body className={styles.form_box}>
                <div className={styles.stampduty}>
                    <Form.Group controlId="validationCustom01">
                        <Form.Label>Property price<Image height={15} width={15} src='https://www.barrattlondonmena.com/img/icon_tips.png' alt="icon tips" /></Form.Label>
                        <Form.Control
                            className={`${errormsg?.length > 0 ? 'border-danger' : ''}`}
                            type="text" placeholder="£"
                            value={numberWithCommas(calData?.price)}
                            name="price"
                            onChange={handleChange} />
                        <span className={styles.error}>{errormsg}</span>
                    </Form.Group>
                    <Form.Group controlId="validationCustom02">
                        <Form.Label>Property is a first home
                            <Image height={15} width={15} src='https://www.barrattlondonmena.com/img/icon_tips.png' alt='icon tips' /></Form.Label>
                        <Form.Select
                            aria-label="Yes"
                            name='isFirstHome'
                            value={calData?.isFirstHome}
                            onChange={handleChange}>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="validationCustom02">
                        <Form.Label>Non-UK resident <Image height={15} width={15} src='https://www.barrattlondonmena.com/img/icon_tips.png' alt='icon tips' /></Form.Label>
                        <Form.Select
                            aria-label="Yes"
                            name='isNonUkResidents'
                            value={calData?.isNonUkResidents}
                            onChange={handleChange}>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </Form.Select>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="validationCustom02">
                        <Form.Label>Additional residential property<Image height={15} width={15} src='https://www.barrattlondonmena.com/img/icon_tips.png' alt='icon tips' /></Form.Label>
                        <Form.Select
                            aria-label="Yes"
                            name='isAdditionalProperty'
                            value={calData?.isAdditionalProperty}
                            onChange={handleChange}>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </Form.Select>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <button type='submit' onClick={handleCalculation}>
                            <span>CALCULATE</span>
                            <Image height={28} width={34} src={'https://www.barrattlondonmena.com/img/goTo.png'} alt='goto' />
                        </button>
                    </Form.Group>
                </div>
                <p className='decText'>Please note that the contents provided by the stamp duty calculator are for reference only. Please contact your lawyer for specific information</p>
            </Offcanvas.Body>
            <Modal show={show} size="lg" fullscreen={false}
                aria-labelledby="contained-modal-title-vcenter"
                centered onHide={handleClose} className={styles.modalCustom}>
                <Modal.Header closeButton className={styles.modalHeader}>
                    <Modal.Title className={styles.modalTitle}>Stamp duty calculator</Modal.Title>
                </Modal.Header>
                
                <Modal.Body className={styles.modalBody}>
                    <div className={styles.stampDuty}>
                    <Container >
                        <Row style={{paddingBlock: "20px"}}>
                            <Col sm={3} xs={6} style={{fontSize: "15px", fontWeight: "500", textAlign:"left"}}>Stamp Duty to pay</Col>
                            <Col sm={3} xs={6} style={{fontSize: "15px", fontWeight: "600", textAlign:"right"}}>£{convertNumberToString(results?.totalStampDuty)}</Col>
                            {/* <Col sm={1}></Col> */}
                            <Col sm={3} xs={6} style={{fontSize: "15px", fontWeight: "500", textAlign:"left"}}>Effective Rate</Col>
                            <Col sm={2} xs={6} style={{fontSize: "15px", fontWeight: "600", textAlign:"right"}}>{results?.effectiveRate.toFixed(2)}%</Col>
                        </Row>
                    </Container>
                    </div>
                    <div className={styles.tableResponsive}>
                    <Table  bordered size="sm" className={styles.calcTable}>
                        <thead>
                            <tr>
                                <th>Tax band</th>
                                <th>Taxable amount</th>
                                <th>Tax rate</th>
                                <th>Stamp duty</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                results?.stampCalculations?.map((item, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{item?.taxBand}</td>
                                            <td>£{convertNumberToString(item?.taxableAmount)}</td>
                                            <td>{item?.taxRate}%</td>
                                            <td>£{convertNumberToString(item?.stampDuty)}</td>
                                        </tr>
                                    )
                                })
                            }
                            <tr>
                                <td><strong>Total</strong></td>
                                <td><strong>£{convertNumberToString(results?.totalTaxableAmount)}</strong></td>
                                <td></td>
                                <td  ><strong>£{convertNumberToString(results?.totalStampDuty)}</strong></td>
                            </tr>
                        </tbody>
                    </Table>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default StampDutyCalculator;

