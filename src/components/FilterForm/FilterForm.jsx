import Image from "next/image";
import { useEffect, useState } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

const FilterForm = ({filterData, onFilterSubmit}) => {
    const [isSearching, setIsSearching] = useState(false);
    const [searchParams, setSearchParams] = useState({
        min_price: "",
        max_price: "",
        min_bedrooms: "",
        max_bedrooms: ""
    });

    useEffect(()=>{
        setSearchParams({...searchParams, ...filterData});
    }, [filterData]);

    const handleSubmit = () => {
        setIsSearching(true);
        onFilterSubmit(searchParams);
    }
    const handleChange = (e) =>{
        let {name, value} = e.target;
        setSearchParams({...searchParams, [name]: value});
    }
    return (
        <>
            <Form.Group onSubmit={handleSubmit}>
                <Row>
                    <Col sm={12}>
                        <Form.Label>Price Range</Form.Label>
                    </Col>
                    <Col sm={6}>
                        <Form.Select name="min_price" placeholder="Min Price" value={searchParams?.min_price} onChange={handleChange}>
                            <option value="">Min Price</option>
                            <option value="200000">200K</option>
                            <option value="500000">500K</option>
                            <option value="1000000">1000K</option>
                            <option value="5000000">5000K</option>
                            <option value="10000000">10000K</option>
                            <option value="20000000">20000K</option>
                        </Form.Select>
                    </Col>
                    <Col sm={6}>
                        <Form.Select name="max_price" placeholder="Max Price" value={searchParams?.max_price} onChange={handleChange}>
                            <option value="">Max Price</option>
                            <option value="500000">500K</option>
                            <option value="1000000">1000K</option>
                            <option value="5000000">5000K</option>
                            <option value="10000000">10000K</option>
                            <option value="20000000">20000K</option>
                            <option value="50000000">50000K</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <Form.Label>Bedrooms</Form.Label>
                    </Col>
                    <Col sm={6}>
                        <Form.Select aria-label="Yes" placeholder="Min rooms" name="min_bedrooms" value={searchParams?.min_bedrooms} onChange={handleChange}>
                            <option value="">Min rooms</option>
                            <option value="0">Studio</option>
                            <option value="1">1 room</option>
                            <option value="2">2 room</option>
                            <option value="3">3 rooms</option>
                            <option value="4">4 rooms</option>
                            <option value="5">5 rooms</option>
                            <option value="6">6 rooms</option>
                        </Form.Select>
                    </Col>
                    <Col sm={6}>
                        <Form.Select aria-label="Yes" placeholder="Max rooms" name="max_bedrooms" value={searchParams?.max_bedrooms} onChange={handleChange}>
                            <option value="">Max rooms</option>
                            <option value="0">Studio</option>
                            <option value="1">1 room</option>
                            <option value="2">2 room</option>
                            <option value="3">3 rooms</option>
                            <option value="4">4 rooms</option>
                            <option value="5">5 rooms</option>
                            <option value="6">6 rooms</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>

                    </Col>
                    <Col sm={6}>
                        <div className="d-flex justify-content-end">
                            <button type='submit' disabled={isSearching} onClick={handleSubmit}>
                                {isSearching ? <Spinner size="sm" variant="light" animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner> : null}
                                <span>CALCULATE</span>
                                {!isSearching ? <Image height={28} width={34} src={'/images/goTo.png'} alt="Gotoimg" /> : null}
                            </button>
                        </div>
                    </Col>
                </Row>
            </Form.Group>
        </>
    );
}

export default FilterForm;