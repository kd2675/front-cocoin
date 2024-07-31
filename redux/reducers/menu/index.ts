import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type MenuTabType = {
	id: number
	title: string
	sub: { id: number; subTitle: string; subContent: string }[]
}

export type MenuReducerType = {
	isMenu: boolean
	isProfile: boolean
	isSetting: boolean
	isAlarm: boolean
	menuNum: number
}

const initState: MenuReducerType = {
	isMenu: false,
	isProfile: false,
	isSetting: false,
	isAlarm: false,
	menuNum: 1,
}

const menuReducer = createSlice({
	name: 'menu',
	initialState: initState,
	reducers: {
		setIsMenu: (state, action: PayloadAction<boolean>) => {
			state.isMenu = action.payload
		},
		toggleIsMenu: (state) => {
			if (state.isMenu) {
				state.isMenu = false
			} else {
				state.isMenu = true
			}
		},
		setMenuNum: (state, action: PayloadAction<number>) => {
			state.menuNum = action.payload
		},
		toggleIsProfile: (state) => {
			if (state.isProfile) {
				state.isProfile = false
			} else {
				state.isProfile = true
			}
		},
		toggleIsSetting: (state) => {
			if (state.isSetting) {
				state.isSetting = false
			} else {
				state.isSetting = true
			}
		},
		toggleIsAlarm: (state) => {
			if (state.isAlarm) {
				state.isAlarm = false
			} else {
				state.isAlarm = true
			}
		},
	},
})

const { actions, reducer: menu } = menuReducer

export const menuActions = actions
export default menu
