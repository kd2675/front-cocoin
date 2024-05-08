import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type MainReducerType = {
}

const initState: MainReducerType = {
}

const mainReducer = createSlice({
	name: 'main',
	initialState: initState,
	reducers: {

	},
})

const { actions, reducer: main } = mainReducer

export const mainActions = actions
export default main
