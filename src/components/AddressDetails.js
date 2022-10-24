import React, { useState } from "react";
import { Form, Card, Button, Row, Col, Input } from "react-bootstrap";
import validator from "validator";
import { Formik } from 'formik';

const AddressDetails = ({ nextStep, handleFormData, handleFormData1, prevStep, values }) => {
 
  const [error, setError] = useState(false);
  const submitFormData = (e) => {
    e.preventDefault();
    if (
      validator.isEmpty(values.hostelname)
      // validator.isEmpty(values.address) ||
      // validator.isEmpty(values.country) ||
      // validator.isEmpty(values.city)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };
  return (
    <>

      <Card style={{ marginTop: 30 }}>
        <Card.Body>
          <h3 style={{ marginBottom: 30 }}>Hostel property information</h3>
          <Form onSubmit={submitFormData} method="POST">
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Hostel Name</Form.Label>
                  <Form.Control
                    style={{ border: error ? "2px solid red" : "" }}
                    name="hostelname"
                    defaultValue={values.hostelname}
                    placeholder="Hostel Name"
                    onChange={handleFormData("hostelname")}
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                </Form.Group>
              </Col>
              <Col>
               

              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    style={{ border: error ? "2px solid red" : "" }}
                    name="country"
                    defaultValue={values.country}
                    placeholder="country"
                    onChange={handleFormData("country")}
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    style={{ border: error ? "2px solid red" : "" }}
                    name="city"
                    defaultValue={values.city}
                    placeholder="city"
                    onChange={handleFormData("city")}
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                </Form.Group></Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Picture Upload</Form.Label>
                  <Form.Control
                    defaultValue={values.image}
                    type="file"
                    name="image"
                    onChange={handleFormData1}
                  >
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>




            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button variant="primary" onClick={prevStep}>
                Previous
              </Button>

              <Button variant="primary" type="submit">
                Next
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default AddressDetails;