import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type MenuTabType = {
	id: number
	title: string
	sub: {id: number, subTitle:string, subContent:string}[]
}

export type MenuReducerType = {
	data: MenuTabType[]
	isMenu: boolean
	menuNum: number
	subMenuNum: number
	isMobileMenu: boolean
}

const initState: MenuReducerType = {
	data: [{
		id: 100,
		title: '소개',
		sub: [
			{ id: 101, subTitle: '인사말', subContent: '인사말입니다.' },
			{ id: 102, subTitle: '연혁', subContent: '연혁입니다.'  },
			{ id: 103, subTitle: '비전', subContent: '비전입니다.'  },
		],
	},
		{
			id: 200,
			title: '제품',
			sub: [
				{ id: 201, subTitle: '소개', subContent: '인사말입니다.'  },
				{ id: 202, subTitle: '소개', subContent: '인사말입니다.'  },
				{ id: 203, subTitle: '소개', subContent: '인사말입니다.'  },
			],
		},
		{
			id: 300,
			title: '공지',
			sub: [
				{ id: 301, subTitle: '소개', subContent: '인사말입니다.'  },
				{ id: 302, subTitle: '소개', subContent: '인사말입니다.'  },
				{ id: 303, subTitle: '소개', subContent: '인사말입니다.'  },
			],
		},
		{
			id: 400,
			title: '문의',
			sub: [
				{ id: 401, subTitle: '소개', subContent: '인사말입니다.'  },
				{ id: 402, subTitle: '소개', subContent: '인사말입니다.'  },
				{ id: 403, subTitle: '소개', subContent: '인사말입니다.'  },
			],
		}],
	isMenu: false,
	menuNum: 0,
	subMenuNum: 0,
	isMobileMenu: false,
}

const menuReducer = createSlice({
	name: 'menu',
	initialState: initState,
	reducers: {
		setData: (state, action: PayloadAction<MenuTabType[]>) => {
			state.data = action.payload
		},
		setIsMenu: (state, action: PayloadAction<boolean>) => {
			state.isMenu = action.payload
		},
		setIsMobileMenu: (state, action: PayloadAction<boolean>) => {
			state.isMobileMenu = action.payload
		},
		setMenuNum: (state, action: PayloadAction<number>) => {
			state.menuNum = action.payload
		},
		setSubMenuNum: (state, action: PayloadAction<number>) => {
			state.subMenuNum = action.payload
		},
		toggleIsMenu: (state) => {
			if (state.isMenu) {
				state.isMenu = false
			} else {
				state.isMenu = true
			}
		},
		toggleIsMobileMenu: (state) => {
			if (state.isMobileMenu) {
				state.isMobileMenu = false
			} else {
				state.isMobileMenu = true
			}
		},
	},
})

const { actions, reducer: menu } = menuReducer

export const menuActions = actions
export default menu
