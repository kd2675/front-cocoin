import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

export type MenuTabType = {
	id: number
	title: string
	sub: {id: number, subTitle:string, subContent:string}[]
}

export type MenuReducerType = {
	isMenu: boolean
	menuNum: number
}

const initState: MenuReducerType = {
	isMenu: false,
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
	},
	// extraReducers: {
	// 	[HYDRATE]: (state, action) => {
	// 		console.log('HYDRATE', state, action.payload);
	// 		return {
	// 			...state,
	// 			...action.payload.subject,
	// 		};
	// 	},
	// },
})

const { actions, reducer: menu } = menuReducer

export const menuActions = actions
export default menu
