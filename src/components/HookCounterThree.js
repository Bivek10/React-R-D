import React, { useState } from "react";


function HookCounterThree (){

    const [data, setData] = useState({firstname:"",  lastname:""});

    return(
        <div>
            <input  type="text" value={data.firstname} onChange={e =>setData({...data, firstname:e.target.value})} >
            </input>
            <input  type="text" value={data.lastname} onChange={e =>setData({...data, lastname:e.target.value})} ></input>

            <h2>Firstname:{data.firstname}</h2>
            <h2>Lastname:{data.lastname}</h2>
        </div>
    );


}

export default HookCounterThree;