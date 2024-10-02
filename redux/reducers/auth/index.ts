import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MenuTabType } from '@redux/reducers/menu'
import { TokenType, UserInfoType } from '@api/service/auth/authAxios'

export type AuthReducerType = {
	userInfo: UserInfoType | null
} & TokenType

const initState: AuthReducerType = {
	userInfo: null,
	grantType: '',
	accessToken: '',
	refreshToken: '',
}

const authReducer = createSlice({
	name: 'auth',
	initialState: initState,
	reducers: {
		setToken: (state, action: PayloadAction<TokenType>) => {
			state.accessToken = action.payload.accessToken
			state.refreshToken = action.payload.refreshToken
		},
		delToken: (state) => {
			state.accessToken = ''
			state.refreshToken = ''
		},
		tokenRefresh: () => {},
		setUserInfo: (state, action: PayloadAction<UserInfoType>) => {
			state.userInfo = action.payload
		}
	},
})

const { actions, reducer: auth } = authReducer

export const authActions = actions
export default auth
