// import { setAuthorizationToken } from '@api/index'
// import { call, getContext, put, takeLeading, select } from '@redux-saga/core/effects'
// import { insSignUp, InsSignUpParamType, LoginParamType, loginV1, logoutV1, tokenRefreshV1, userInfo, UserInfoType } from 'api/deprecated/auth'
// import { PayloadAction } from '@reduxjs/toolkit'
// import {authActions} from '@redux/reducers/auth'
// import { modalActions } from 'redux/reducers/modal'
// import { NextRouter } from 'next/router'
// import { useSelector } from 'react-redux'
// import { TokenType } from '@api/service/auth/act/authAxios'
//
// function* signUpSaga(action: PayloadAction<InsSignUpParamType>) {
// 	const router: NextRouter = yield getContext('router')
//
// 	try {
// 		yield call(insSignUp, action.payload)
// 		yield router.replace('/')
// 		yield put(modalActions.addAlert({ msg: '회원가입을 축하드려요!', type: 'suc' }))
// 	} catch (err) {
// 		yield put(modalActions.addAlert({ msg: '회원가입에 실패하였습니다.', type: 'danger' }))
// 	}
// }
//
// function* loginSaga(action: PayloadAction<LoginParamType>) {
// 	const router: NextRouter = yield getContext('router')
//
// 	try {
// 		const { data }: { data: TokenType } = yield call(loginV1, action.payload)
// 		// yield put(authActions.loginSuccess({ accessToken: data.accessToken, refreshToken: data.refreshToken }))
// 		console.log('loginSaga', data)
// 		yield call(tokenRefreshSaga)
// 		// yield call(setAuthorizationToken, data.accessToken)
// 		yield put(modalActions.addAlert({ msg: '로그인 성공!.' }))
// 		// yield put(authActions.setIsToken('y'))
//
// 		yield router.push('/')
// 	} catch (err) {
// 		// yield put(authActions.loginFail())
// 		yield put(modalActions.addAlert({ msg: '로그인에 실패하였습니다.', type: 'danger' }))
// 		console.log('loginFailSaga')
// 		console.error(err)
// 	}
// }
//
// function* logoutSaga() {
// 	const router: NextRouter = yield getContext('router')
// 	try {
// 		yield call(tokenRefreshSaga)
//
// 		yield call(logoutV1)
// 		// yield put(authActions.setIsToken('n'))
// 		// yield put(authActions.setUserInfo(null))
// 		yield call(setAuthorizationToken, '')
// 		yield router.push('/')
//
// 		console.log('logoutSaga')
// 	} catch (err) {
// 		yield router.reload()
// 		console.error(err)
// 	}
// }
//
// function* tokenRefreshSaga() {
// 	try {
// 		const { data }: { data: TokenType } = yield call(tokenRefreshV1)
// 		if (data.accessToken == null) {
// 			// yield put(authActions.setIsToken('n'))
// 			return
// 		}
// 		yield call(setAuthorizationToken, data.accessToken)
// 		// yield put(authActions.setIsToken('y'))
// 		yield call(setUserInfoSage)
//
// 		console.log('tokenRefreshSaga', data)
// 	} catch (err) {
// 		// yield put(authActions.setIsToken('n'))
// 		console.error(err)
// 	}
// }
//
// function* setUserInfoSage() {
// 	try {
// 		const { data }: { data: UserInfoType } = yield call(userInfo)
// 		// yield put(authActions.setUserInfo(data))
// 	} catch (err) {
// 		console.log('setUserInfoSage err')
// 		console.log(err)
// 	}
// }
//
// export function* authSaga() {
// 	// yield takeLeading(authActions.signUp, signUpSaga)
// 	// yield takeLeading(authActions.login, loginSaga)
// 	// yield takeLeading(authActions.logout, logoutSaga)
// 	yield takeLeading(authActions.tokenRefresh, tokenRefreshSaga)
//
// 	// yield takeLeading(authActions.loginSuccess, loginSuccessSaga)
// 	// yield takeLeading(authActions.loginFail, loginFailSaga)
// }
//
export function* authSaga() {
	// yield takeLeading(authActions.signUp, signUpSaga)
	// yield takeLeading(authActions.login, loginSaga)
	// yield takeLeading(authActions.logout, logoutSaga)
	// yield takeLeading(authActions.tokenRefresh, tokenRefreshSaga)

	// yield takeLeading(authActions.loginSuccess, loginSuccessSaga)
	// yield takeLeading(authActions.loginFail, loginFailSaga)
}
const auth = [authSaga()]

export default auth
