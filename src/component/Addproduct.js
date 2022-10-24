import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { useNavigate} from 'react-router-dom';
import './admin.css';
const AddProduct = () => {

const history = useNavigate();
    const [input, setInput] = useState({
        name: "",
        price: "",
        description: "",
        category: "",
        image: ""
    });

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
        const { name, price, description, category, image } = input;
        const formData = new FormData();
        formData.append('name', input.name);
        formData.append('price', input.price);
        formData.append('description', input.description);
        formData.append('category', input.category);
        formData.append('image', input.image, input.image.name);
        event.preventDefault();
        //console.log(bcontent)
        try {
            const res = await fetch('/product/additem/', {
                body: formData,
                method: "POST",
            });

            if (res.status === 422) {
                const error = new Error(res.error);
                throw error
            } else {
                console.log("product added");
               // alert("product added")
history('/');
            }

        } catch (error) {
            console.log("product not added")
        }

    }



    return (
        <div className='main'>
            <div >
                <h3>Add Product</h3>
                <form method="POST" action="/upload" encType='multipart/form-data' className='mainform'>
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
                                <td><input className="input1" onChange={imageUpload} name="image" type="file" placeholder="image"></input>
                                </td>
                            </tr>
                        </table>
                        <br></br>
                    </div>
                    <button className="btn" onClick={hoo}>Add Product</button>
                </form>
            </div>

        </div>
    )
}


export default AddProduct
