import { useState } from "react";


function Day3pah() {
    const modes = ["Kaioken" ,"SuperSaiyan"];
    const [index,setIndex] = useState(0);
    let [count ,setCount] = useState(0);
    const [mode,setMode] = useState(modes[index]);
    const handleChange = ()=>{
        setCount(count++);
        if(count%4===0)
        {
            setIndex(!index);
        }
        setMode(modes[index]); 

    }
    return(
        <>
            <div>
                <h1> {mode} </h1>
                <button onClick={()=>handleChange}></button>
            </div>
        </>

    )

}
export default Day3pah;