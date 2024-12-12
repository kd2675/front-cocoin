import Service from '@api/service/Service'
import { axiosMember, BaseDataResponseType } from '@/api'
import { LoginParamType, TokenType, UserInfoType } from '@api/service/auth/vo/authType'

class AuthAxios extends Service {
	async login(param: LoginParamType) {
		// return this.http.post<BaseResponseType<TokenType>>('/api/auth/ctf/login', data)
		return await axiosMember.post<BaseDataResponseType<TokenType>>('/member/ctf/login', param)
	}
	async logout() {
		return await axiosMember.post<BaseDataResponseType<TokenType>>('/member/logout')
	}
	async userInfo() {
		return await axiosMember.get<BaseDataResponseType<UserInfoType>>('/member/userInfo')
	}
}

export default new AuthAxios()
