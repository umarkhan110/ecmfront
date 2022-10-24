import React from 'react'
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
import Useplace from './Useplace';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
const Home = () => {
  const history = useNavigate();
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [key, setKey] = useState('home');
  const [validated, setValidated] = useState(false);

  const [address, setAdress] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null
  });
  console.log(coordinates)
  const handleSelect = async value => {
    const result = await geocodeByAddress(value);

    const latlng = await getLatLng(result[0]);
    setAdress(value)
    setCoordinates(latlng)
    console.log(latlng)
  }
  // const [input1, setInput1] = useState({
  //   email: '',
  //   password: ''
  // });

  // const [input, setInput] = useState({
  //   fname: '',
  //   email: '',
  //   password: ''
  //   });
  //   function handleChange (event){
  //   const {name, value} = event.target;
  //   setInput(prevInput =>{
  //   return{
  //   ...prevInput,
  //   [name]: value
  //   }
  //   })
  //   }
  //   const handleClick= async (event)=>{
  //   event.preventDefault();
  //   const {  fname,email,password}  = input;

  //       //axios.post('http://localhost:3001/npeopl', cnewUsr);
  //       const res = await fetch('/hostel/signup',{
  //           method:"POST",
  //           headers:{
  //             "Content-Type":"application/json"
  //           },
  //           body:JSON.stringify({
  //               fname,email,password
  //           })
  //       });
  //   const data = await res.json();
  //   //console.log(data.message)
  //   if (res.status === 422 || !data){
  //       window.alert(data.message);
  //       //console.log("invalid");  
  //   }else{
  //       window.alert("Account is created Successfully");

  //   }
  //   }


  //   function handleChange1(event) {
  //     const { name, value } = event.target;
  //     setInput1(prevInput => {
  //       return {
  //         ...prevInput,
  //         [name]: value
  //       }
  //     })
  //   }
  //   const handleClick1 = async (event) => {
  //     event.preventDefault();
  //     //console.log(input.lemail);
  //     const { email, password } = input1;
  //     const res = await fetch('/hostel/signin', {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({
  //         email,
  //         password
  //       })

  //     });

  //     const data = res.json();
  //     if (res.status === 400 || !data) {
  //       window.alert("Invalid");
  //     }else if (res.status === 201 || data.message === "Admin") {
  //       history("/admin")
  //     } else {
  //       // dispatch({type:"USER", payload:true});
  //       //alert("Signin Successfully")
  //       history("/");
  //     }

  //   }



  return (
    <div>
      <>

        <div className='main2' >
          <div className='overlay'></div>
          <div className='main2zindx'>
            <Row>
              <Col><span>
                <AiTwotoneStar color="white" />
                <AiTwotoneStar color="yellow" size="20" />
                <AiTwotoneStar color="white" />
              </span></Col>
            </Row>
          </div>
          <h2 className='main2zindx' >EasyBook Hotel Booking System</h2>
          <span></span>
          <h3 className='main2zindx'>Let's start exploring the world together with EasyBook</h3>
          <div className='main-search-input-wrap' >
            <div className='main-search-input fl-wrap'>
              <Form>
                <Row>
                  <Col>
                    <PlacesAutocomplete
                      value={address}
                      onChange={setAdress}
                      onSelect={handleSelect}>
                      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div>
                          <input
                            {...getInputProps({
                              placeholder: 'Location ...',
                              className: 'locat',
                            })}
                          />
                          <div className="autocomplete-dropdown-container">
                            {loading ? <div>Loading...</div> : null}
                            {suggestions.map(suggestion => {
                              const style = {
                                backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                              };
                              return (
                                <div
                                  {...getSuggestionItemProps(suggestion, { style })} >
                                  {suggestion.description}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </PlacesAutocomplete>
                  </Col>
                  <Col>
                    <select className='gend'>
                      <option>Choose Gender</option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                    </select>
                  </Col>
                  <Col>
                    <NavLink to={`/searh/${coordinates.lat}/${coordinates.lng}`}><button className='main-search-button'>Search <i><AiOutlineSearch size="23px" /></i></button>
                    </NavLink>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </div>



      </>

    </div>
  )
}

export default Home
