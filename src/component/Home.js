import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
const Home = () => {
    const [items, setItems] = useState([]);

    const postItem = async () => {
        try {
            const res = await fetch('/product/showitems', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            const data = await res.json();
            setItems(data);
            console.log(data)
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
    return (
        <div className='main'>
            <div className='page1'>
                <h2>Buy Watch</h2>
                <h2>Online in Pakistan</h2>
                <h2><button>Shop Now</button></h2>
            </div>
            <div className='page22'>                
                    {items.map((elem) => {
                        const { _id, name, price, description, category, image } = elem;
                        return (
                            <div key={_id} className="page2">
                                <form method="GET">
                                <NavLink to={`/showproduct/${_id}`}><img src={image}></img></NavLink>
                                        
                                        <div className='nampr'>
                                            <div className='nampr1'>{name}</div>
                                            <div>Rs{price} </div>
                                        </div>
                                        <p>{category} </p>  
                                </form>
                            </div>
                        )
                    })
                    }
            </div>
        </div>
    )
}

export default Home
