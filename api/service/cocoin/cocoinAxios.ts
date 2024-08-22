import Service from '@api/service/Service'
import { axios, BaseResponseType } from '@/api'
import { OrderRegisterSchemaType } from '@schema/cocoin'
import { UserInfoType } from '@/types/UserInfoType'

class AuthAxios extends Service {
	async order(data: OrderParamType) {
		return await axios.post<BaseResponseType<OrderType>>('/order')
	}
	async getCandles() {
		const {data} = await axios.get<BaseResponseType<candleType[]>>('/cocoin/api/cocoin/ctf/chart/candles')
		return data;
	}
	async getBid() {
		const {data} = await axios.get<BaseResponseType<bidType>>('/cocoin/api/cocoin/ctf/chart/bid')
		return data;
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

export type candleType = {
	"market": string,
	"candleDateTimeUtc": string,
	"candleDateTimeKst": string,
	"openingPrice": string,
	"highPrice": string,
	"lowPrice": string,
	"tradePrice": string,
	"timestamp": string,
	"candleAccTradePrice": string,
	"candleAccTradeVolume": string,
	"unit": string
}

export type bidType = {
	market: string
	timestamp: string
	totalAskSize: string
	totalBidSize: string
	orderbookUnits: orderBook[]
}

export type orderBook = {
	askPrice: string
	bidPrice: string
	askSize: string
	bidSize: string
}

export default new AuthAxios()
