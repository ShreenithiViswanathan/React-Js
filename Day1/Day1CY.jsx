import React from "react";


function Day1CY(){

    const checkFunction = ()=>{
        const name1 = "muruga" ;
        const name2 = "mugesh" ;

        
        const name1Obj = {n1:"muruga"};
        const name2Obj = {n2:"mugesh"};

        
        console.log(name1 === name1Obj.n1);
        console.log(name2 === name2Obj.n2);

    }


    return(
        <>
            <div>
                <button onClick={checkFunction}>CHECK</button>
            </div>
        </>

    )
}

export default Day1CY;