import React from "react";
import { useReducerApp } from "./useAppReducer";
import { Action } from "./Action";

const SECURITY_CODE = 'AMELENDEZ';
function useApp() {
    const {
        state
        , dispatch
    } = useReducerApp();

    const { types } = Action();

    React.useEffect(() => {
        if (state.ViewLoadingEnable) {
            setTimeout(() => {
                dispatch({Type: types.SHOW_VIEW_DELETE});
            }, 3000);
        }
    }, [state.ViewLoadingEnable]);

    const btnCheckClick = () => {
        if (state.SecurityCode.toUpperCase() === SECURITY_CODE) {
            dispatch({Type: types.CHECK_SUCESS});
        } else {
            dispatch({Type: types.CHECK_FAIL});
        }
    };

    const btnDeleteClick = () => {
        dispatch({Type: types.CONFIRM_DELETE});
    }

    const btnRecoverClick = () => {
        dispatch({Type: types.CONFIRM_RECOVER});
    }

    const btnCancelRecoverClick = () => {
        dispatch({Type: types.CANCEL_RECOVER});
    }

    const btnDeleteCancelClick = () => {
        dispatch({Type: types.CANCEL_DELETE});
    }

    const txtSecurityCodeChange = (event) => {
        dispatch({Type: types.CHANGE_SECURITY_CODE, Payload: event.target.value});
    }

    return {
        state
        , btnCheckClick
        , txtSecurityCodeChange
        , btnDeleteClick
        , btnDeleteCancelClick
        , btnRecoverClick
        , btnCancelRecoverClick
    };
}

export {
    useApp
}