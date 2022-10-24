import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { IoTrashBin } from 'react-icons/io5';
import { HiPencilAlt } from 'react-icons/hi';
const Dashboard = () => {
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
    const del = async (id) => {
        console.log(id)

        const res = await fetch(`/product/deleteitem/${id}`, {
            method: "DELETE",
            headers: {
                "Accept": "application/json"
            }
        });
        const data2 = await res.json();

        if (!data2) {
            console.log("product not deleted");
        } else {
            postItem();
        }

    }
    return (
        <div className='main'>
            <div>
                <h3>Products</h3>
                <div className='dashboard'>
                    <table>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </table>
                </div>
                {items.map((elem) => {
                    const { _id, name, price, description, category, image } = elem;
                    return (
                        <div key={_id} >
                            <form method="GET">
                                <div className='dashboard'>
                                    <table>
                                        <td>
                                            <tr> <p>{name} </p></tr>
                                        </td>
                                        <td>
                                            <tr> <p>{price} </p></tr>
                                        </td>
                                        <td>
                                            <tr> <p>{category} </p></tr>
                                        </td>
                                        <td>
                                            <tr><NavLink to={`/edititm/${_id}`} className="button"><HiPencilAlt size={32} /></NavLink></tr>
                                        </td>
                                        <td>
                                            <tr><div className="edit1234" >
                                                <form method="DELETE" ><IoTrashBin size={32} onClick={() => { del(_id) }} /></form>
                                            </div></tr>
                                        </td>

                                    </table>
                                </div>
                            </form>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Dashboard

