import Service from '@api/service/Service'
import { axios, BaseDataResponseType } from '@/api'
import { LoginRegisterSchemaType } from '@schema/login'
import { bidType } from '@api/service/cocoin/cocoinAxios'

class AuthAxios extends Service {
	async login(param: LoginParamType) {
		// return this.http.post<BaseResponseType<TokenType>>('/api/auth/ctf/login', data)
		return await axios.post<BaseDataResponseType<TokenType>>('/cocoin/api/auth/ctf/login', param)
	}
	async logout() {
		return await axios.post<BaseDataResponseType<TokenType>>('/cocoin/api/auth/logout')
	}
	async userInfo() {
		return await axios.get<BaseDataResponseType<UserInfoType>>('/cocoin/api/auth/userInfo')
	}
}

export type LoginParamType = LoginRegisterSchemaType

export type TokenType = {
	grantType: string
	accessToken: string
	refreshToken: string
}

export type UserInfoType = {
	id: number;
	oAuth2Id: string;
	email: string;
	name: string;
	phone: string;
	nick: string;
	ip: string;
	block: string;
	walletDTO: walletType;
	authDTOSet: authType[];
}

export type walletType = {
	id: number;
	point: number;
	userId: number;
}

export type authType = {
	id: number;
	role: string;
	userId: number;
}

export default new AuthAxios()
