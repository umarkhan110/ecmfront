import React from "react";
import { Card } from "react-bootstrap";

const Confirmation = ({ values }) => {

    //destructuring the object from values
  const { name,email, cnic, hostelname } = values;
  return (
    <>
      <Card style={{ marginTop: 100, textAlign: "left" }}>
        <Card.Body>
          <p>
            <strong>First Name :</strong> {name}{" "}
          </p>
          <p>
            <strong>Last Name :</strong> {cnic}{" "}
          </p>
          <p>
            <strong>Age :</strong> {email}{" "}
          </p>
          <p>
            <strong>Email :</strong> {hostelname}{" "}
          </p>
        </Card.Body>
      </Card>
    </>
  );
};

export default Confirmation;
