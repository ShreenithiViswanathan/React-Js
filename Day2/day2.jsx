import React from "react";

function Day2()
{
    const styleOfDiv ={
        backgroundColor: "lightblue",
        color:"blue",
        padding:"10px",
        border:"1px solid blue",
        borderRadius:"5px"
    };
    const styleOfP ={
                color:"darkBlue",
                fontSize:"16px"
    };
    return(
        <>
        <div className="exerxise1"><h1>Hello World!</h1></div>
        <div className="exerxise2">
            <h1>Inline Style in JSX Example.</h1>
            <div style={styleOfDiv}>
                <p style={styleOfP}>This is a paragraph with inline styles applied</p>
            </div>
            
        </div>
        
        </>
    )

}

export default Day2;
