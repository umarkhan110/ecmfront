import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Card, Button, Row, Col } from "react-bootstrap";
import validator from "validator";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
const Facilities = ({ handleFormData, prevStep, values, input }) => {
  const [addres, setAdress] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null
  });
  // console.log(coordinates)
  const handleSelect = async value => {
    const result = await geocodeByAddress(value);
    const latlng = await getLatLng(result[0]);
    setAdress(value)
    setCoordinates(latlng)
    // console.log(latlng)
  }
const history = useNavigate();
console.log(values)
  const handleClick = async (event) => {
    event.preventDefault();
   const formData = new FormData();
    formData.append('name', values.name);
    formData.append('mobile', values.mobile);
    formData.append('cnic', values.cnic);
    formData.append('email', values.email);
    formData.append('hostelname', values.hostelname);
    formData.append('address', addres);
    formData.append('lat', coordinates.lat);
    formData.append('lng', coordinates.lng);
    formData.append('country', values.country);
    formData.append('city', values.city);
    formData.append('warden', values.warden);
    formData.append('room', values.room);
    formData.append('security', values.security);
    formData.append('image', values.image, values.image.name);
    
    event.preventDefault();
    try {
      const res = await fetch('/hostel/addhostels/', {
        body: formData,
        method: "POST",
      });
      const data = await res.json();
      //console.log(data.message)
      if (res.status === 422 || !data) {
        window.alert(data.message);
        //console.log("invalid");  
      } else {
        window.alert("Hostel is Added Successfully");
// history("/")
      }
    } catch (error) {
      console.log("Hostel not added")
    }

  }
  return (
    <>

      <Card style={{ marginTop: 30 }}>
        <Card.Body>
          <h3 style={{ marginBottom: 30 }}>Hostel Facilities</h3>
          <Form method="POST">
            <Row>
              <Col>
              <PlacesAutocomplete
                  value={addres}
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
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Warden</Form.Label>
                  <br></br>
                  <Row>
                    <Col><input style={{width:"18px", height:"18px", marginTop:"8px" }} type="radio" name="warden" value="24/7" onChange={handleFormData("warden")} />
                      <label style={{marginLeft:"20px", fontSize:"15px",color:"black"}}>24/7</label></Col>
                    <Col><input  style={{width:"18px", height:"18px", marginTop:"8px" }} type="radio" name="warden" value="office" onChange={handleFormData("warden")} />
                      <label style={{marginLeft:"20px", fontSize:"15px",color:"black"}}>Office time</label></Col>
                  </Row>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Common Room</Form.Label>
                  <br></br>
                  <Row>
                    <Col><input  style={{width:"18px", height:"18px", marginTop:"8px" }} type="radio" name="room" value="yes" onChange={handleFormData("room")} />
                      <label style={{marginLeft:"20px", fontSize:"15px",color:"black"}}>Yes</label></Col>
                    <Col><input style={{width:"18px", height:"18px", marginTop:"8px" }} type="radio" name="room" value="no" onChange={handleFormData("room")} />
                      <label style={{marginLeft:"20px", fontSize:"15px",color:"black"}}>No</label></Col>
                  </Row>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Security Guard</Form.Label>
                  <br></br>
                  <Row>
                    <Col><input  style={{width:"18px", height:"18px", marginTop:"8px" }} type="Checkbox" name="security" value="security" checked onChange={handleFormData("security")} />
                      <label style={{marginLeft:"20px", fontSize:"15px",color:"black"}}>Yes</label></Col>

                  </Row>
                </Form.Group>
              </Col>
            </Row>


            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button variant="primary" onClick={prevStep}>
                Previous
              </Button>

              <Button variant="primary" onClick={handleClick}>
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default Facilities;