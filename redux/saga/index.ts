import {all, put} from "@redux-saga/core/effects";
import { AlertType, modalActions } from 'redux/reducers/modal'
import main from "@redux/saga/main";
import auth from '@redux/saga/auth'

export default function* rootSagas() {
    yield all([...main, ...auth])
}

export function* addAlert({msg}:{msg:AlertType}) {
    try {
        yield put(modalActions.addAlert(msg))
        console.log("loginSuccessSaga")
    } catch (err) {
        console.error(err)
    }
}