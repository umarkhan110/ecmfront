import React, { useState, useEffect, createContext } from 'react'
import { useParams } from 'react-router-dom';

const ProductFull = () => {
    const { id } = useParams();
    // console.log(id)
    const [showful, setShowfull] = useState({});
    console.log(showful);
    const showfull = async () => {
        try {
            const res = await fetch(`/product/edit/${id}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            const data = await res.json();
            setShowfull(data);
            console.log(data)
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (error) {
            //console.log(error);
        }
    }
    useEffect(() => {
        showfull();
     
    }, []);

    return (
        <div>
            <div className='page3'>
                <div><img src={showful.image}></img></div>
                <div>
                    <h2>{showful.name}</h2>
                    <h4>Rs{showful.price}</h4>
                    <p>{showful.description}</p>
                </div>

            </div>
        </div>
    )
}



export default ProductFull
