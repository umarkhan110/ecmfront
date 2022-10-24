import React, { useState } from "react";
import { Form, Card, Button, Row, Col } from "react-bootstrap";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const UserDetails = ({ nextStep, handleFormData, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    if (
      validator.isEmpty(values.name)
      // validator.isEmpty(values.cnic) ||
      // validator.isEmpty(values.mobile) ||
      // validator.isEmpty(values.email)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <Card style={{ marginTop: 30}}>
        <Card.Body>
        <h3 style={{marginBottom:30}}>Hostel Owner Information</h3>
          <Form onSubmit={submitFormData} method="POST">
            <Row>
              <Col>
            <Form.Group className="mb-3">
              <Form.Label>Owner Full Name</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="name"
                defaultValue={values.name}
                type="text"
                placeholder="Name"
                onChange={handleFormData("name")}
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
              <Form.Label>Owner CNIC #</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="cnic"
                defaultValue={values.cnic}
                type="text"
                placeholder="CNIC"
                onChange={handleFormData("cnic")}
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
            </Row>
            <Row>
              <Col>
              <Form.Group className="mb-3">
              <Form.Label>Owner Mobile #</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="mobile"
                defaultValue={values.mobile}
                type="text"
                placeholder="Mobile"
                onChange={handleFormData("mobile")}
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
              <Form.Label>Owner Email ID</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="email"
                defaultValue={values.email}
                type="email"
                placeholder="Email"
                onChange={handleFormData("email")}
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
            </Row>
            <Button variant="primary" type="submit">
                Next
              </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserDetails;