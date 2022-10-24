import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Blgn } from './Edititm';

function EditItem(props) {
    const a = useContext(Blgn);
    console.log(a.image);
    const history = useNavigate();
    const [input, setInput] = useState({
        name: a.name,
        price: a.price,
        description:a.description,
        category: a.category,
        image: a.image
    });
 
    useEffect(() => {
        setInput(a)
    }, [a]);
    const hii = (event) => {
        const { name, value } = event.target;
        setInput(prevalue => {
            return {
                ...prevalue,
                [name]: value
            }
        })
    }

    const imageUpload = (event) => {
        console.log(event.target.files[0]);
        setInput({ ...input, image: event.target.files[0] })
    }

    const hoo = async (event) => {
        const { name, price, description, category, image} = input;
      
        event.preventDefault();
      
        const res = await fetch(`/product/updateitem/${a._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                price,
                description,
                category
            })
        });
        const data1 = await res.json();
        if (!data1) {
            console.log("message not send");
        } else {
            alert("Product Updated");
            history('/');
        }
    }

    return (
        <div className='main' >
            <div >
                <h3>Edit item</h3>
                <form method="PUT">
                <div className='mainform1'>
                        <table>
                            <tr>
                                <td> <label>Product Name &nbsp; &nbsp;</label></td>
                                <td><input onChange={hii} name="name" value={input.name} placeholder="add product"></input></td>
                            </tr>
                            <tr>
                                <td><label>Product Price &nbsp; &nbsp;</label> </td>
                                <td> <input onChange={hii} name="price" value={input.price} placeholder="add price"></input></td>
                            </tr>
                            <tr>
                                <td><label>Product description &nbsp; &nbsp;</label></td>
                                <td><input onChange={hii} name="description" value={input.description} placeholder="description"></input></td>
                            </tr>
                            <tr>
                                <td> <label>Category &nbsp; &nbsp;</label></td>
                                <td><input onChange={hii} name="category" value={input.category} placeholder="category"></input>
                                </td>
                            </tr>
                            <tr>
                                <td>  <label>Product Image &nbsp; &nbsp;</label></td>
                                <img src={input.image}></img>
                                <td><input className="input1" onChange={imageUpload}  name="image" type="file" placeholder="image"></input>
                                </td>
                            </tr>
                        </table>
                        <br></br>
                       
                    </div>
             
                   
                    <button className="blgbtn" onClick={hoo}>Update</button>
                </form>
                
            </div>
        </div>
    )
}
export default EditItem
