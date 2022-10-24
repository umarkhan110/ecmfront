import React from "react";
import { useState, useEffect, useRef } from "react";
//import "./table.css";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
const TableList = () => {
  //const approv = useRef();
  const [items, setItems] = useState([]);
  //console.log(items)
  // const approv =()=>{
  //   if(itmes.role == 0){
  //    get("approved").style.display='none';
     
  //   }
  // }
  const postItem = async () => {
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
      setItems(data);
      //console.log(data)
      
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    postItem();
    // eslint-disable-next-line
  }, []);

  
  const stat = async (_id) => {
    const res = await fetch(`/hostel/approved/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({

      })
    });
    const data1 = await res.json(); 
    // console.log(data1)
    
    if (!data1) {
      console.log("Hostel not approved");
  } else {
      postItem();

  }
  }
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Striped Table with Hover</Card.Title>
                <p className="card-category">
                  Here is a subtitle for this table
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <form method="GET">
                  <Table className="table-hover table-striped">
                    <thead>
                      <tr>
                        <th className="border-0">Hostel Name</th>
                        <th className="border-0">Address</th>
                        <th className="border-0">Country</th>
                        <th className="border-0">City</th>
                        <th className="border-0">Status</th>
                        <th className="border-0">Approve</th>
                      </tr>
                    </thead>
                    {items.map((elem) => {
                      const { _id, hostelname, address, country, city, role } = elem;
                      return (
                        <tbody>
                          <tr>
                            <td>{hostelname}</td>
                            <td>{address}</td>
                            <td>{country}</td>
                            <td>{city}</td>
                            <td>{role}</td>
                            <td>{role === 1 ? <Button>Already Approved</Button> : <form method="PUT" ><Button onClick={() => { stat(_id) }}>Approved</Button></form>}</td>
                            <td ></td>
                          </tr>
                        </tbody>
                      )
                    })
                    }
                  </Table>
                </form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Table on Plain Background</Card.Title>
                <p className="card-category">
                  Here is a subtitle for this table
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Salary</th>
                      <th className="border-0">Country</th>
                      <th className="border-0">City</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>$36,738</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Minerva Hooper</td>
                      <td>$23,789</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Sage Rodriguez</td>
                      <td>$56,142</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Philip Chaney</td>
                      <td>$38,735</td>
                      <td>Korea, South</td>
                      <td>Overland Park</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Doris Greene</td>
                      <td>$63,542</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Mason Porter</td>
                      <td>$78,615</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;
