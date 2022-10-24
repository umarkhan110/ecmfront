import React, { useState, useEffect, createContext } from 'react'
import { useParams } from 'react-router-dom';
import EditItem from './EditItem';

const Blgn = createContext();
const Edititm = () => {
    const { id } = useParams();
    // console.log(id)
    const [edit, setEdit] = useState({});
    //console.log(edit);
    const edititem = async () => {
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
           setEdit(data);
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (error) {
            //console.log(error);
        }
    }
    useEffect(() => {
        edititem();
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <Blgn.Provider value={edit}>
                <EditItem hnb={edit} />
            </Blgn.Provider>
            <div>
            <img src={edit.image}></img>
            </div>
        </div>
    )
}

export default Edititm
export { Blgn };

