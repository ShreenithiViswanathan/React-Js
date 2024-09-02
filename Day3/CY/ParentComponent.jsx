import { useState } from "react"
import Childcomponent from "../ChildComponentl";
function ParentComponent() {
    const [location ,setLocation] = useState("New York");
    const handleChange = ()=>{
        const value = document.getElementsByClassName("location")[0].value;
        setLocation(value);
    }
    return (
        <>
            <div>
                <h1>Weather Application</h1>

            </div>
            <div>
                <input placeholder="Enter a location"  className="location" ></input>
                <button onClick={handleChange}>Update Location</button>
            </div>
            <Childcomponent location={location}/>
        </>

    )
}
export default ParentComponent
