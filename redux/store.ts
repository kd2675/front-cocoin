// *** store.ts 파일
// 1. 루트리듀서를 만든다 : HYDRATE 액션을 처리하고, 슬라이스들을 통합한다.
// 2. store 생성함수를 만든다.
// 3. next-redux-wrapper 라이브러리의 wrapper를 만들어 export 해준다.

import { Action, AnyAction, CombinedState, configureStore, Reducer, ThunkAction } from '@reduxjs/toolkit'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import { combineReducers } from 'redux'
import { persistStore, persistReducer } from "redux-persist";
import auth, { AuthReducerType } from '@redux/reducers/auth'
import modal, { ModalReducerType } from 'redux/reducers/modal'
import common, { CommonReducerType } from 'redux/reducers/common'
import createSagaMiddleware from '@redux-saga/core'
import Router from 'next/router'
import rootSagas from '@redux/saga'
import menu, { MenuReducerType } from '@redux/reducers/menu'
import createWebStorage from '@redux/createWebStorage'

// ### 리듀서 State 타입 정의
export interface ReducerStates {
	auth: AuthReducerType
	common: CommonReducerType
	menu: MenuReducerType
	modal: ModalReducerType
}

const persistConfig = {
	key: "root",
	// storage: storage, // localStorage를 사용할 경우
	storage: createWebStorage, // sessionStorage를 사용할 경우
	// whitelist: ["auth"],
	blacklist: ['modal']
};

// ### 루트 리듀서 생성
// 1) next-redux-wrapper의 HYDRATE 액션을 정의해주고,
// 2) 슬라이스들을 통합한다.
// next-redux-wrapper의 사용 매뉴얼이므로 그냥 이대로 해주면 알아서 처리된다.
const rootReducer = combineReducers({
	auth,
	common,
	menu,
	modal,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// ### store 생성 함수
const sagaMiddleware = createSagaMiddleware({
	context: {
		router: Router,
	},
})

if (process.env.NODE_ENV === 'development') {
	// middleware.push(logger);
}


// store 생성
export const store = configureStore({
	// reducer: rootReducer as Reducer<ReducerStates>, // 리듀서
	reducer: persistedReducer, // 리듀서
	// middleware, // 미들웨어
	middleware: (getDefaultMiddleware) => [
		...getDefaultMiddleware({
			serializableCheck: {
				// Ignore these action types
				ignoredActions: ['modal/addConfirm', 'modal/addToast', 'persist/PERSIST'],
				// Ignore these field paths in all actions
				ignoredActionPaths: ['payload.btn1Fuc', 'payload.btn2Fuc', 'payload.btnFuc', 'payload.openCallback', 'payload.closeCallback'],
				// Ignore these paths in the state
				ignoredPaths: ['modal.confirm', 'modal.toast'],
			},
		}),
		sagaMiddleware,
	],
	// devTools: process.env.NODE_ENV === 'development' // 개발자도구
})
sagaMiddleware.run(rootSagas)

// ### 타입 익스포트
// export type AppStore = ReturnType<typeof store> // store 타입
export type RootState = ReturnType<typeof rootReducer> // RootState 타입
// export type RootState = ReturnType<AppStore['getState']>; // RootState 타입(위와 동일함)
// export type AppDispatch = AppStore['dispatch'] // dispatch 타입
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action> // Thunk 를 위한 타입
export const persistor = persistStore(store);
// ### next-redux-wrapper의 wrapper 생성
// const wrapper2 = createWrapper<AppStore>(store, {
// debug: process.env.NODE_ENV === 'development'
// })

// wrapper 익스포트
// export default wrapper2
