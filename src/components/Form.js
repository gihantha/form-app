import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import SelectorCom from './SelectorCom';
import imge from '../assets/7.jpeg'

const Form = () => {
  const [formPage, setformPage] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const order = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S'];
  const proLanguages =  ["Solidity", "Rust", "Node.js", "Typescript", "Javascript", "C","C++", "C#", "SQL", "Python", "Assembly Language", "Haskell","R",".NET", "Other"];
    const codingExperience = ["No experience (I have never programmed before.)", "Beginner (I have played with some introductory coding lessons and tutorials.)", "Intermediate (I have completed some coding classes or tutorials.", "Advanced (I can build applications.)", "Professional (I am an experienced software engineer.)"];
    const salary = ['<$30,000', '$30,000 - $50,000', '$50,000 - $80,000', '$80,000 - $120,000', '$120,000 - $250,000', '$250,000 or more' ]

  const handleNext = () => {
        if (formPage < 9) {
            setformPage((prev) => prev + 1);
        } else {
            setformPage(10);
            setSubmitted(true);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleNext();
        }
    };

  return (
    <div 
        style={formPage === 7 ? { maxWidth: '100vw'} : {maxWidth: '720px'} }
        className="form-container p-5" 
        onKeyDown={handleKeyPress} 
        tabIndex="0"
    >
        {/* <p className="form-page">
            {formPage}
        </p> */}
        <Row className='form-row'>
            {formPage === 1 && (
                <>
                    <h1 className="form-title">                         
                        <span className="form-page">{formPage} </span>
                        Before we start, what is your name?
                    </h1>
                    <div className="pb-3">
                        <label className='form-label'>First name</label>
                        <input type="text" name="firstName" className="form-input" placeholder="Jane" />
                    </div>
                    <div className="pb-5">
                        <label className='form-label'>Last name</label>
                        <input type="text" name="firstName" className="form-input" placeholder="Smith" />
                    </div>
                </>
            )}
            {formPage === 2 && (
                <>
                    <h1 className="form-title">
                        <span className="form-page">{formPage} </span>
                        What's your email address? 
                    </h1>
                    <div className='form-subtitle'>This is how we'll contact you.</div>
                    <div className="pb-5">
                        <input type="email" name="email" className="form-input" placeholder="name@example.com" />
                    </div>
                </>
            )}
            {formPage === 3 && (
                <>
                    <h1 className="form-title">
                        <span className="form-page">{formPage} </span>
                        Which country you are from?
                    </h1>
                    <div className="pb-5">
                        <label className='form-label'>Select your country</label>
                        <input type="text" name="country" className="form-input" placeholder="Jane" />
                    </div>
                </>
            )}
            {formPage === 4 && (
                <>
                    <h1 className="form-title">
                        <span className="form-page">{formPage} </span>
                        What is your phone number? 
                    </h1>
                    <div className="pb-5">
                        <label className='form-label'>Phone No</label>
                        <input type="text" name="phone" className="form-input" placeholder="0551234567" />
                    </div>
                </>
            )}
            {formPage === 5 && (
                <>
                    <h1 className="form-title">
                        <span className="form-page">{formPage} </span>
                        What languages and frameworks are you familiar with
                    </h1>
                    <div className='form-subtitle'>Select all the languages you know. </div>
                    <div className="pb-5">
                        <label className='form-label'>Choose as many as you like</label>
                        <Row xs={1} sm={3} className='g-1'>
                            {proLanguages.map((lan,index) => (
                                <Col key={index}><SelectorCom value={lan} order={order[index]}/></Col>
                            ))}
                        </Row>
                    </div>
                </>
            )}
            {formPage === 6 && (
                <>
                    <h1 className="form-title">
                        <span className="form-page">{formPage} </span>
                        How would you describe your current level of coding experience?
                    </h1>
                    <div className='pt-4'>
                        <Row className='g-1 mb-3'>
                            {codingExperience.map((val, index) => ( 
                                <Row className='mb-1'> 
                                    <SelectorCom value={val} order={order[index]} key={index}/>
                                </Row>
                            ))}
                        </Row>
                    </div>
                </>
            )}
            {formPage === 7 && (
                <Row className='spcl-row'>
                    <Col xs={12} lg={6} >
                        <h1 className="form-title">
                            <span className="form-page">{formPage} </span>
                            What is your current annual compensation? (Optional)
                        </h1>
                        <div className='form-subtitle'>Disclaimer: The information provided regarding salary will be kept confidential and will not be used as a determining factor for acceptance into the bootcamp. It will be used exclusively for career advancement guidance.</div>
                        <div className='d-block d-lg-none'>
                            <img src={imge} alt="Background" className="img-fluid" />
                        </div>
                        <div style={{width: '270px'}}>
                            <Row className='g-1 mb-3 mt-4'>
                                {salary.map((val, index) => ( 
                                    <Row className='mb-1'>
                                        <SelectorCom value={val} order={order[index]} key={index}/>
                                    </Row>
                                ))}
                            </Row>
                        </div>    
                    </Col> 
                    <Col className='d-none d-lg-block pt-5 mt-5 ms-5'>
                        <img src={imge} alt="Background" className="img-fluid" />
                    </Col>
                </Row>
            )}
            {formPage === 8 && (
                <>
                    <h1 className="form-title">
                        <span className="form-page">{formPage} </span>
                        Certifying StatementThis question is required.*
                    </h1>
                    <div className='form-subtitle'>I hereby acknowledge that this application form was completed by me (the individual seeking to enroll in Metana) and I did not receive help from any external sources. The responses submitted are entirely my own and based on my own reasoning. Also, I opt in to receive communication messages from Metana about my application.</div>
                    <div>
                        <Row className='g-1 mb-3 mt-4'>
                            {['I accept', 'I don\'t accept'].map((val, index) => ( 
                                <Row className='mb-1'>
                                    <SelectorCom value={val} order={order[index]} key={index}/>
                                </Row>
                            ))}
                        </Row>
                    </div>
                </>
            )}
            {formPage === 9 && (
                <>
                    <h1 className="form-title">
                        <span className="form-page">{formPage} </span>
                        LinkedIn URL (optional)
                    </h1>
                    <div className='form-subtitle'>Here's a sniper link to make your life easy - linkedin.com (It'll open in a new tab) 🚀</div>
                    <div className="pb-5">
                        <input type="text" name="firstName" className="form-input" placeholder="Type your answer here..." />
                    </div>
                </>
            )}
           
            <div 
                className='button-div'
                style={{ 
                    display: 'flex',
                    alignItems: formPage < 9 ? 'flex-start' : 'center',
                    justifyContent: formPage < 9 ? 'flex-start' : 'center'
                  }}
            >
                {formPage < 9 ? (
                    <>
                        <button className="form-button me-2" onClick={handleNext}>
                            OK
                        </button>
                        <span className='pt-1'>press <strong>Enter ↵</strong></span>
                    </>
                    
                ) : ( 
                    formPage === 9 && (
                        <button className="form-button me-2" onClick={handleNext}>
                            Submit
                        </button>
                    )
                )} 
            </div>
        </Row>
        <div className="final-page">
            {submitted && (
                <>
                    <h1 className='form-head fw-semibold mb-4'>Thank you for applying</h1>
                    <p className='form-subtitle'>An admissions team member will contact you shortly.</p>
                    <div className="">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='me-5'>
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='me-5'>
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                    </div>
                    <div className='mt-5'>
                        <button className="form-button me-2 fs-3" onClick={handleNext}>
                            Create a typeform
                        </button>
                        <span className='pt-1 f'>press <strong>Enter ↵</strong></span>
                    </div>
                </>
            )}
        </div>
    </div>
  );
};

export default Form;