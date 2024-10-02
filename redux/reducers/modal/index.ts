// *** counterSlice.ts 파일
// 슬라이스를 생성해준다.

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { v4 } from 'uuid'
import { MouseEventHandler, ReactNode } from 'react'

export type AlertType = {
	uuid?: string;
	msg: ReactNode | string;
	type?: null | 'info' | 'danger' | 'suc' | 'warn';
	openCallback?: Function
	closeCallback?: Function
}

export type ToastType = {
	uuid?: string;
	msg: ReactNode | string;
	type?: null | 'info' | 'danger' | 'suc' | 'warn';
	btnFunc?: ()=>void;
	openCallback?: ()=>void;
	closeCallback?: ()=>void;
}

export type ConfirmType = {
	uuid?: string;
	title: ReactNode | string;
	msg: ReactNode;
	type?: null | 'suc' | 'warn' | 'danger';
	btn1Text?: string;
	btn1Func?: ()=>void;
	btn2Text?: string;
	btn2Func?: ()=>void;
	openCallback?: ()=>void;
	closeCallback?: ()=>void;
}

export type NotiType = {
	uuid?: string;
	title: ReactNode | string;
	msg: ReactNode | string;
	type?: null | 'info' | 'danger' | 'suc' | 'warn';
	btnFunc?: ()=>void;
	openCallback?: ()=>void;
	closeCallback?: ()=>void;
}

export type ModalReducerType = {
	alert: AlertType[],
	toast: ToastType[],
	confirm: ConfirmType[]
	noti: NotiType[]
}

const initState: ModalReducerType = {
	alert: [],
	toast: [],
	confirm: [],
	noti: []
}

// slice 생성
const modalReducer = createSlice({
	name: 'modal',
	initialState: initState,
	reducers: {
		// action의 타입은 PayloadAction<제네릭> 으로 지정해준다.
		addAlert: (state, action: PayloadAction<AlertType>) => {
			action.payload.uuid = v4()
			// state.push(action.payload);
			// state.alert.push(action.payload)
			state.alert = [{ ...action.payload }, ...state.alert]
			return state
		},
		deleteAlert: (state) => {
			state.alert = [...state.alert.slice(1, state.alert.length)]
			return state
			// return [...state.slice(0, state.length - 1)]
			// return state.slice(0, state.length - 1);
		},
		deleteAllAlert: (state) => {
			state.alert = []
			return state
		},
		addToast: (state, action: PayloadAction<ToastType>) => {
			action.payload.uuid = v4()
			state.toast = [{ ...action.payload }, ...state.toast]
			return state
		},
		deleteToast: (state) => {
			state.toast = [...state.toast.slice(1, state.toast.length)]
			return state
		},
		addConfirm: (state, action: PayloadAction<ConfirmType>) => {
			action.payload.uuid = v4()
			state.confirm = [{ ...action.payload }, ...state.confirm]
			return state
		},
		deleteConfirm: (state) => {
			state.confirm = [...state.confirm.slice(1, state.confirm.length)]
			return state
		},
		addNoti: (state, action: PayloadAction<NotiType>) => {
			action.payload.uuid = v4()
			state.noti = [{ ...action.payload }, ...state.noti]
			return state
		},
		deleteNoti: (state, action: PayloadAction<string>) => {
			state.noti = state.noti.filter((v)=>v.uuid != action.payload)
			// state.noti = [...state.noti.slice(1, state.noti.length)]
			return state
		},
		deleteAllNoti: (state) => {
			state.noti = []
			return state
		},
	}
})

const { actions, reducer: modal } = modalReducer

export const modalActions = actions
export default modal