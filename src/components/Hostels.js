import React, { useState, useEffect } from 'react';
import { Row, Col,Card, Container, NavLink } from 'react-bootstrap';
const Hostels = () => {
    const [items, setItems] = useState([]);
    const postItem = async () => {
        try {
            const res = await fetch('/hostel/hosteldetails', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            const data = await res.json();
            setItems(data);

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
    return <div>
        <div>
            <div>

                {items.map((elem) => {
                    const { _id, name, email, mobile, cnic, hostelname, address, country, city, image, warden, room, security } = elem;
                    return (
                        <div key={_id} >
                            <form method="GET">
                            <a  href={`/details/${_id}`}>
                                <Card className="text-white" style={{width:"400px", border:"none",float:"left",marginTop:"30px", marginLeft:"30px"}}>
                                   <Card.Img src={image} style={{cursor:"pointer"}}/>
                                    <Card.ImgOverlay>
                                        <Card.Title style={{background:"white",borderRadius:"10px", position:"relative", top:"-30px", padding:"1px 10px"}}><p style={{fontWeight:"bold",  textTransform: "uppercase"}}>{hostelname}</p></Card.Title>
                                        {/* <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This content is a little bit longer.
                                        </Card.Text> */}
                                        <Card.Text style={{position:"relative", top:"100px"}}>{address}, {city}</Card.Text>
                                    </Card.ImgOverlay>
                                </Card>
                                </a> 
                            </form>
                        </div>
                    )
                })
                }
            </div>
        </div>
    </div>;
};

export default Hostels;
