import React, { useState } from "react";


function Day2pah (){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [address,setAddress] = useState("");
    const showResults = ()=>{
        console.log(name,email,address);
    }

    return(
        <>
            <form>
                <div>
                    <label >Name:</label>
                    <input className="name" type="text" onChange={(e)=>{setName(e.target.value)}}></input>
                </div>
                <div>
                    <label >email:</label>
                    <input className="email" type="email" onChange={(e)=>{setEmail(e.target.value)}}></input> 
                </div>
                <div>
                    <label >Address</label>
                    <textarea className="address" onChange={(e)=>{setAddress(e.target.value)}}></textarea>
                </div>
                <button onClick={showResults}></button>
            </form>
        </>

    )
}

export default Day2pah;