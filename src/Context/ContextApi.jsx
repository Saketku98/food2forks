import { createContext, useState } from "react";
import App from "../App";

let ref = createContext();

export default ref;


export function Data(){

    let [content,setContent]=useState([]);
    let [id,setId]=useState([]);

    const add =(data)=>{
        setContent(data)
    }

    const addId=(data)=>{
        setId(data)
    }



    return <ref.Provider  value={{content,add,id,addId}}>
        <App/>
    </ref.Provider>
}