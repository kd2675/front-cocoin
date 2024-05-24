import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type MainReducerType = {
	select: number
	isLeftSidebar: 'y' | 'n'
	isRightSidebar: 'y' | 'n'
}

const initState: MainReducerType = {
	select: 1,
	isLeftSidebar: 'n',
	isRightSidebar: 'n',
}

const mainReducer = createSlice({
	name: 'main',
	initialState: initState,
	reducers: {
		setSelect: (state, action: PayloadAction<number>) => {
			state.select = action.payload
		},
		isLeftSidebar: (state, action: PayloadAction<'y' | 'n' | 'r'>) => {
			if (action.payload == 'y') {
				state.isLeftSidebar = 'y'
			} else if (action.payload == 'n') {
				state.isLeftSidebar = 'n'
			} else if (action.payload == 'r') {
				if (state.isLeftSidebar === 'n') {
					state.isLeftSidebar = 'y'
				} else {
					state.isLeftSidebar = 'n'
				}
			}
		},
		isRightSidebar: (state, action: PayloadAction<'y' | 'n' | 'r'>) => {
			if (action.payload == 'y') {
				state.isRightSidebar = 'y'
			} else if (action.payload == 'n') {
				state.isRightSidebar = 'n'
			} else if (action.payload == 'r') {
				if (state.isRightSidebar === 'n') {
					state.isRightSidebar = 'y'
				} else {
					state.isRightSidebar = 'n'
				}
			}
		},
	},
})

const { actions, reducer: main } = mainReducer

export const mainActions = actions
export default main
