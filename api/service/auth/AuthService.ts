import Service from '@api/service/Service'
import { axios, BaseResponseType } from '@/api'
import { LoginRegisterSchemaType } from '@schema/login'

class AuthService extends Service {
	async login(data: LoginParamType) {
		// return this.http.post<BaseResponseType<TokenType>>('/api/auth/ctf/login', data)
		return await axios.post<BaseResponseType<TokenType>>('/api/auth/ctf/login', data)
	}
}

export type LoginParamType = LoginRegisterSchemaType

export type TokenType = {
	accessToken: string
	refreshToken: string
}

export default new AuthService()
