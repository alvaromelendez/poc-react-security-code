import React from "react";
import { Action } from "./Action";

function useReducerApp() {
    const [state, dispatch] = React.useReducer(useReducerMain, INITIAL_STATE);
    return {
        state
        , dispatch
    };
}

const useReducerObj = (state, action) => {
    const { types } = Action();
    return {
        [types.CHECK_SUCESS]: { ...state, ViewMainEnable: false, ViewLoadingEnable: true, ViewFailEnable: false},
        [types.CHECK_FAIL]: { ...state, ViewFailEnable: true},
        [types.CHANGE_SECURITY_CODE]: { ...state, SecurityCode: action.Payload},
        [types.SHOW_VIEW_DELETE]: { ...state, ViewLoadingEnable: false, ViewDeleteEnable: true},
        [types.CANCEL_DELETE]: { ...state, ViewMainEnable: true, ViewDeleteEnable: false, SecurityCode: ''},
        [types.CONFIRM_DELETE]: { ...state, ViewDeleteEnable: false, ViewRecoverEnable: true},
        [types.CONFIRM_RECOVER]: { ...state, ViewMainEnable: true, ViewRecoverEnable: false},
        [types.CANCEL_RECOVER]: { ...state, ViewMainEnable: true, ViewRecoverEnable: false, SecurityCode: ''},
    };
}

const useReducerMain = (state, action) => {
    var response = useReducerObj(state, action)[action.Type];
    if (response === null) {
        return INITIAL_STATE;
    } else {
        return response;
    }
}

const INITIAL_STATE = {
    ViewMainEnable: true,
    SecurityCode: '',
    ViewLoadingEnable: false,
    ViewDeleteEnable: false,
    ViewRecoverEnable: false,
    ViewFailEnable: false
};

export {
    useReducerApp
}