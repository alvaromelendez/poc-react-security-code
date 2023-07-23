import React from 'react';
import { ViewMain } from '../ViewMain';
import { ViewLoading } from '../ViewLoading';
import { useApp } from './useApp';
import { ViewDelete } from '../ViewDelete';
import { ViewRecover } from '../ViewRecover';
import { ViewFail } from '../ViewFail';

function App() {
    const {
        state
        , btnCheckClick
        , txtSecurityCodeChange
        , btnDeleteClick
        , btnDeleteCancelClick
        , btnRecoverClick
        , btnCancelRecoverClick
    } = useApp();
    return (
        <React.Fragment>
            {
                state.ViewMainEnable && <ViewMain btnCheckClick={btnCheckClick} txtSecurityCodeChange={txtSecurityCodeChange} SecurityCode={state.SecurityCode}/>
            }
            {
                state.ViewLoadingEnable && <ViewLoading/>
            }
            {
                state.ViewFailEnable && <ViewFail/>
            }
            {
                state.ViewDeleteEnable && <ViewDelete btnDeleteClick={btnDeleteClick} btnDeleteCancelClick={btnDeleteCancelClick}/>
            }
            {
                state.ViewRecoverEnable && <ViewRecover btnRecoverClick={btnRecoverClick} btnCancelRecoverClick={btnCancelRecoverClick}/>
            }
        </React.Fragment>
    );
}

export {
    App
}