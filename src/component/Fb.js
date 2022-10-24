import React, { useState, useEffect } from 'react';
import { useHistory, NavLink } from "react-router-dom";


const Fb = () => {
    const [notes, setNotes] = useState([]);
   console.log(notes)
    const [input, setInput] = useState({

        url: "",
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


    const hoo = async (event) => {
        const { url } = input;
       
        event.preventDefault();
        //console.log(bcontent)
        try {
            const res = await fetch('/api/download', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    url,
                   
                })
            });
           const data1 = await res.json();
            console.log(data1)
            setNotes(data1)
            if (res.status === 422) {
                const error = new Error(res.error);
                throw error
            }else {
                alert("Blog Published");
            }
            
        } catch (error) {
            alert("Blog Not Published");
        }
        
    }

   

    return (
        <div className="blogmain">
            <div className="blgmain_1" >
                <h1></h1>
                <form method="POST">
                    <div className="input1field">
                    <input className="input1" onChange={hii} name="url" value={input.url} placeholder="Please Insert Your Link"></input>
                    </div>
                 

                    <button className="blgbtn" onClick={hoo}>Search</button>
                </form>
            </div>
     
        </div>
    )
}

export default Fb
