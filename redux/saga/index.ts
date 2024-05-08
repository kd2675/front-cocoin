import {all, put} from "@redux-saga/core/effects";
import {alertActions} from "@redux/reducers/alert";
import {Alert} from "@redux/types/alertType";
import main from "@redux/saga/main";

export default function* rootSagas() {
    yield all([...main,])
}

export function* addAlert({msg}:{msg:Alert}) {
    try {
        yield put(alertActions.addAlert(msg))
        console.log("loginSuccessSaga")
    } catch (err) {
        console.error(err)
    }
}