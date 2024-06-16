import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bgimage from '../assets/bg.jpg'; 
import { useNavigate } from 'react-router-dom'; 

const Content = () => {
    const navigate = useNavigate(); 

    return (
        <Container className='pt-5 mt-lg-5'>
            <Row className='main-row mt-5 mt-lg-5 pt-lg-5'>
                <Col xs={12} lg={6} xl={6} className='order-lg-2 order-1'>
                    <img src={bgimage} alt="Background" className="img-fluid" />
                </Col>
                <Col xs={12} lg={6} xl={6} className='mb-4 order-lg-1 order-2 mt-5 g-lg-5'>
                    <p className='header'>Launch your Data Career in Weeks, not Years</p>
                    <p className='normal-text pb-0'>What to expect:</p>
                    <div className='normal-text pt-0'>
                        <span>- </span>
                        <strong>Short-answer </strong>
                        <span>questions & </span>
                        <strong>No </strong>
                        <span>cover letter</span>
                    </div>
                    <p className='normal-text'>- Takes 4 mins on average</p>
                    <div className='pb-3'>
                        <button className='button me-2' onClick={() => navigate('/form')} >Start Your Journey</button>
                        <span className='small-text '>press </span>
                        <strong>Enter ↵</strong>
                    </div>
                    <p className='medium-text pb-5'>149 people have filled this out</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Content;
