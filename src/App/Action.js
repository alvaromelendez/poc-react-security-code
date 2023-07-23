function Action() {
    const types = {
        SHOW_VIEW_DELETE: 'SHOW_VIEW_DELETE',
        CHECK_SUCESS: 'CHECK_SUCESS',
        CHECK_FAIL: 'CHECK_FAIL',
        CONFIRM_DELETE: 'CONFIRM_DELETE',
        CONFIRM_RECOVER: 'CONFIRM_RECOVER',
        CANCEL_RECOVER: 'CANCEL_RECOVER',
        CANCEL_DELETE: 'CANCEL_DELETE',
        CHANGE_SECURITY_CODE: 'CHANGE_SECURITY_CODE'
    }
    return {
        types
    };
}

export {
    Action
}