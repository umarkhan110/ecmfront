import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './image/logo.png';
import { useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown, Tabs, Tab, Modal, Button, Form, Row, Col, InputGroup } from 'react-bootstrap';
import './hostel.css';
import { FaSignInAlt } from 'react-icons/fa'
import { AiTwotoneStar } from 'react-icons/ai';
import { AiFillHome } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai'
import { FaRegTimesCircle } from 'react-icons/fa'
import MultiStepForm from './MultiStepForm';
const Signin = () => {

  const history = useNavigate();
  const [show2, setShow2] = useState(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [key, setKey] = useState('home');
  const [validated, setValidated] = useState(false);

  const [input1, setInput1] = useState({
    email: '',
    password: ''
  });

  const [input, setInput] = useState({
    fname: '',
    email: '',
    password: ''
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setInput(prevInput => {
      return {
        ...prevInput,
        [name]: value
      }
    })
  }
  const handleClick = async (event) => {
    event.preventDefault();
    const { fname, email, password } = input;

    //axios.post('http://localhost:3001/npeopl', cnewUsr);
    const res = await fetch('/hostel/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fname, email, password
      })
    });
    const data = await res.json();
    //console.log(data.message)
    if (res.status === 422 || !data) {
      window.alert(data.message);
      //console.log("invalid");  
    } else {
      window.alert("Account is created Successfully");

    }
  }


  function handleChange1(event) {
    const { name, value } = event.target;
    setInput1(prevInput => {
      return {
        ...prevInput,
        [name]: value
      }
    })
  }
  const handleClick1 = async (event) => {
    event.preventDefault();
    //console.log(input.lemail);
    const { email, password } = input1;
    const res = await fetch('/hostel/signin', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })

    });

    const data1 = res.json();
    if (res.status === 400 || !data1) {
      window.alert("Invalid");
    } else if (data1.message === "Admin") {
      history("/admin")
    }else {
      history("/");
    }

  }


  return (
    <div>
      <Modal show={show2} onHide={handleClose2} id='main-register'>
        <Modal.Header id="modalhead">
          <Modal.Title>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className='mb-3'
            >
              <Tab eventKey="home" title="Login">
                <h5>Sign In <span className='span1'>EASY</span><span className='span2'>BOOK</span></h5>
                <Form method="POST">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="formlabel">Email address</Form.Label>
                    <Form.Control onChange={handleChange1} type="text" name="email" placeholder="" value={input1.email} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="formlabel">Password</Form.Label>
                    <Form.Control onChange={handleChange1} className="two" type="password" name="password" placeholder="" value={input1.password} />
                  </Form.Group>
                  <Button id='btn' onClick={handleClick1}>
                    Log In
                  </Button>
                </Form>
              </Tab>

              <Tab eventKey="profile" title="Register" >
                <h5>Sign Up <span className='span1'>EASY</span><span className='span2'>BOOK</span></h5>
                <Form noValidate validated={validated}>

                  <Form.Group mb="3" controlId="validationCustom01">
                    <Form.Label className="formlabel">Full name</Form.Label>
                    <Form.Control onChange={handleChange} type="text" name="fname"
                      placeholder="" value={input.fname} />
                  </Form.Group>
                  <Form.Group mb="3" controlId="validationCustom02">
                    <Form.Label className="formlabel">Email Address</Form.Label>
                    <Form.Control onChange={handleChange} type="text" name="email"
                      placeholder="" value={input.email} />
                  </Form.Group>
                  <Form.Group mb="3" controlId="validationCustomUsername">
                    <>
                      <Form.Label htmlFor="inputPassword5" className="formlabel">Password</Form.Label>
                      <Form.Control onChange={handleChange} type="text" name="password"
                        placeholder="" value={input.password} />
                    </>
                  </Form.Group>
                  <Form.Group mb="3" controlId="validationCustomUsername">
                    <>
                      <Form.Label htmlFor="inputPassword5" className="formlabel">Gender</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Choose Gender</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                      </Form.Select>
                    </>
                  </Form.Group>

                  <Button id="btn" type="submit" onClick={handleClick}>Register</Button>
                </Form>
              </Tab>
            </Tabs>
          </Modal.Title>
        </Modal.Header>
      </Modal>
    </div>
  )
}

export default Signin
