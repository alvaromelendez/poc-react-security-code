import React from "react";
import '../App/App.css';

function ViewDelete({btnDeleteClick, btnDeleteCancelClick}) {
    return (
        <React.Fragment>
            <div className="App">
                <h2>DELETE SECURITY CODE</h2>
                <p>Do u want to delete?</p>
                <button onClick={btnDeleteClick}>YES</button>
                <button onClick={btnDeleteCancelClick}>CANCEL</button>
            </div>
        </React.Fragment>
    );
}

export {
    ViewDelete
}