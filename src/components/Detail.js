import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
const Detail = () => {
    const { id } = useParams();
    const [tail, setDetail] = useState({});
    // console.log(tail.image)
    // const image = tail.image;
    const showdetail = async () => {
        try {
            const res = await fetch(`/hostel/detail/${id}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            const data = await res.json();
            // console.log(data);
            setDetail(data);
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (error) {
            //console.log(error);
        }
    }

    useEffect(() => {
        showdetail();
        // eslint-disable-next-line
    }, []);

    return <div>
        <div>
            <div>
                
                <Card className="bg-dark text-white">
                    <Card.Img src={tail.image} alt="hostel image" />
                    
                        <Card.Title>{tail.hostelname}</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>{tail.address}</Card.Text>
                  
                </Card>

            </div>
        </div>
    </div>
};

export default Detail;
