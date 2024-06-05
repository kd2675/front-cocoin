import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type CommonReducerType = {
	health: number
	select: number
	isLeftSidebar: 'y' | 'n'
	isRightSidebar: 'y' | 'n'
}

const initState: CommonReducerType = {
	health: 0,
	select: 1,
	isLeftSidebar: 'n',
	isRightSidebar: 'n',
}

const commonReducer = createSlice({
	name: 'common',
	initialState: initState,
	reducers: {
		setHealth: (state, action: PayloadAction<number>) => {
			state.health = action.payload
		},
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

const { actions, reducer: common } = commonReducer

export const commonActions = actions
export default common
