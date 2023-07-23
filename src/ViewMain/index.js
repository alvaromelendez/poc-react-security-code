import React from "react";
import '../App/App.css';

function ViewMain({ btnCheckClick, txtSecurityCodeChange, SecurityCode}) {
    return (
        <React.Fragment>
            <div className="App">
                <h2>SECURITY CODE</h2>
                <p>type the security code for validate...</p>
                <input onChange={txtSecurityCodeChange} placeholder="security code" value={SecurityCode}/>
                <button onClick={btnCheckClick}>CHECK</button>
            </div>
        </React.Fragment>
    );
}

export {
    ViewMain
}