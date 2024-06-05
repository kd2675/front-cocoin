import {all, put} from "@redux-saga/core/effects";
import { AlertType, modalActions } from 'redux/reducers/modal'
import common from "redux/saga/common";
import auth from '@redux/saga/auth'

export default function* rootSagas() {
    yield all([...common, ...auth])
}

export function* addAlert({msg}:{msg:AlertType}) {
    try {
        yield put(modalActions.addAlert(msg))
        console.log("loginSuccessSaga")
    } catch (err) {
        console.error(err)
    }
}