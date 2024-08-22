import {axios} from '@/api'
import { LoginRegisterSchemaType } from '@schema/login'
import {SignUpRegisterSchemaType} from "@schema/signUp";
import { TokenType } from '@api/service/auth/authAxios'


export const loginV1 = async (data: LoginParamType) => {
	return await axios.post<TokenType>('/api/auth/login', data)
}

export const logoutV1 = async () => {
	return await axios.post('/api/auth/logout')
}

export const tokenRefreshV1 =  async () => {
	return await axios.post<TokenType>('/api/auth/ctf/refresh')
}

export const userInfo = async ()=>{
	return await axios.get<UserInfoType>('/api/auth/ctf/userInfo')
}

export const insSignUp = async (data:InsSignUpParamType) => {
	return await axios.post<number>('/api/auth/signUp/user', data)
}

export const selSignUpEmailCheck = async (userEmail:string) => {
	return await axios.get<number>(`/api/auth/selEmailCheck?userEmail=${userEmail}`)
}

export const selSignUpNickCheck = async (userNick:string) => {
	return await axios.get<number>(`/api/auth/selNickCheck?userNick=${userNick}`)
}


export type LoginParamType = LoginRegisterSchemaType

export type InsSignUpParamType = SignUpRegisterSchemaType;

export type UserInfoType = {
	userId: number
	userEmail: string
	userName: string
	userPhone: string
	userNick: string
	userIp: string
	userBlock: string
	userWalletEntityPoint: number
}

export type UserWalletType = {
	userWalletId: number
	userWalletPoint: number
}