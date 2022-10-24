import React, { useState, useEffect } from 'react'
import UserDetails from './UserDetails'
import Confirmation from './Confirmation';
import AddressDetails from './AddressDetails'
import Facilities from './Facilities'
import { Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const MultiStepForm = () => {
  const history = useNavigate();
  const [step, setStep] = useState(1);

  const gethostel = async () => {
    try {
      const res = await fetch('/hostel/hosteldetail', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      const data = await res.json();


      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      history('/sign');
    }
  }
  useEffect(() => {
    gethostel();
    // eslint-disable-next-line
  }, []);


  const [input, setInput] = useState({
    name: '',
    cnic: '',
    mobile: '',
    email: '',
    hostelname: '',
    country: '',
    city: '',
    image: '',
    warden: '',
    room: '',
    security: ''
  })
  const nextStep = () => {
    setStep(step + 1)
  }
  const prevStep = () => {
    setStep(step - 1)
  }

  const handleChange = input => event => {
    const { value } = event.target;
    console.log(value)
    setInput(prevInput => {
      return {
        ...prevInput,
        [input]: value
      }
    })
  }
  const changeHandler = (event) => {
    console.log(event.target.files[0]);
    setInput({ ...input, image: event.target.files[0] })
  }

  switch (step) {
    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also input as value to the fprm
    case 1:
      return (
        <div className="App">
          <Container>
            <Form method="GET"></Form>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <UserDetails nextStep={nextStep} handleFormData={handleChange} values={input} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    case 2:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <AddressDetails nextStep={nextStep} prevStep={prevStep} handleFormData={handleChange}
                  handleFormData1={changeHandler} values={input} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    case 3:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Facilities nextStep={nextStep} prevStep={prevStep} handleFormData={handleChange} values={input} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    /* Only formData is passed as prop to show the final value at form submit
  case 4:
    return (
      <div className="App">
        <Container>
          <Row>
            <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
              <Confirmation values={input}  />
            </Col>
          </Row>
        </Container>
      </div>
    );*/
    // default case to show nothing
    default:
      return (
        <div className="App">
          <h1>Umar</h1>
        </div>
      );
  }


}



export default MultiStepForm

