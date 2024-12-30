import Service from '@api/service/Service'
import { axios, BaseDataResponseType } from '@/api'
import { bidType, candleType, OrderParamType, OrderType, tickerType } from '@api/service/cocoin/vo/cocoinType'

class AuthAxios extends Service {
	async order(data: OrderParamType) {
		return await axios.post<BaseDataResponseType<OrderType>>('/cocoin/order', data)
	}

	async getTicker() {
		return await axios.get<BaseDataResponseType<tickerType>>('/cocoin/ctf/chart/ticker')
	}

	async getCandles() {
		return await axios.get<BaseDataResponseType<candleType[]>>('/cocoin/ctf/chart/candles')
	}

	async getBid() {
		return await axios.get<BaseDataResponseType<bidType>>('/cocoin/ctf/chart/bid')
	}
}

export default new AuthAxios()
