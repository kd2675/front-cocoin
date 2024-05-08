import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {MenuTabType} from "@redux/reducers/menu";

export type TokenType = {
    accessToken: string
    refreshToken: string
}

export type AuthReducerType = {} & TokenType

const initState: AuthReducerType = {
    accessToken: "",
    refreshToken: ""
}

const authReducer = createSlice({
    name: 'auth',
    initialState: initState,
    reducers: {
        setToken: (state, action: PayloadAction<TokenType>) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        },
        tokenRefresh: () => {
        },
    },
})

const {actions, reducer: auth} = authReducer

export const authActions = actions
export default auth
