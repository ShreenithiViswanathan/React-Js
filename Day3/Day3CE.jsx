import { useState } from "react"

function Day3CE() {
   
    const [visiblity , setVisiblity] = useState(true);
   
    return(

        <>
            <div>
                {visiblity}? <h1>Hi,how are you??</h1>:<h1> </h1>
            </div>
            <button onClick={() => setVisiblity(false)}>Click me</button>
        </>
    )
}

export default Day3CE
