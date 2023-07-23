import React from "react";
import '../App/App.css';

function ViewRecover({btnRecoverClick, btnCancelRecoverClick}) {
    return (
        <React.Fragment>
            <div className="App">
                <h2>RECOVER SECURITY CODE</h2>
                <p>Do u want to recover?</p>
                <button onClick={btnRecoverClick}>YES</button>
                <button onClick={btnCancelRecoverClick}>Go Index</button>
            </div>
        </React.Fragment>
    );
}

export {
    ViewRecover
}