import React from "react";


function Day1CY() {
    let tableObj =[{
        name:"mugesh",
        age:18
    },

    ]

    const addUser = ()=>{
        tableObj.push({
            name:document.getElementsByClassName("nameInput"),
            age:document.getElementsByClassName("ageInput")
        },)
    }
    
    return(
        <>
            <div className="form">
                <div className="name">
                    <label>name</label>
                    <input className="nameInput" type="text"></input>
                </div>
                <div className="age">
                    <label>age</label>
                    <input className="ageInput" type="number"></input>
                </div>
                <button className="add" onClick={addUser}>Add</button>
            </div>

            <div className="table">
                <table>
                    <tr>
                        <th>name</th>
                        <th>age</th>
                    </tr>
                    
                    {
                        tableObj.map((item, index) => (
                            <tr key={index}>
                                <td >{item.name}</td>
                                <td >{item.age}</td>
                            </tr>

                        ))
                }
                
                </table>
            </div>
        </>
    )
}

export default Day1CY;