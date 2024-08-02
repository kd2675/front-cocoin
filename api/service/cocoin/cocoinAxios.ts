import Service from '@api/service/Service'
import { axios, BaseResponseType } from '@/api'
import { OrderRegisterSchemaType } from '@schema/cocoin'
import { UserInfoType } from '@/types/UserInfoType'

class AuthAxios extends Service {
	async order(data: OrderParamType) {
		// return this.http.post<BaseResponseType<TokenType>>('/api/auth/ctf/login', data)
		return await axios.post<BaseResponseType<OrderType>>('/api/auth/ctf/login', data)
	}
}

export type OrderParamType = OrderRegisterSchemaType

export type OrderType = {
	id: bigint
	orderSlct: string
	coinSlct: string
	margin: number
	price: number
	cnt: number
	userDTO: UserInfoType
}

export default new AuthAxios()
