import Service from '@api/service/Service'
import { axios, BaseDataResponseType } from '@/api'
import { OrderRegisterSchemaType } from '@schema/cocoin'
import { UserInfoType } from '@api/service/auth/authAxios'

class AuthAxios extends Service {
	async order(data: OrderParamType) {
		return await axios.post<BaseDataResponseType<OrderType>>('/cocoin/api/cocoin/order', data)
	}

	async getTicker() {
		return await axios.get<BaseDataResponseType<tickerType>>('/cocoin/api/cocoin/ctf/chart/ticker')
	}

	async getCandles() {
		return await axios.get<BaseDataResponseType<candleType[]>>('/cocoin/api/cocoin/ctf/chart/candles')
	}

	async getBid() {
		return await axios.get<BaseDataResponseType<bidType>>('/cocoin/api/cocoin/ctf/chart/bid')
	}
}

export type tickerType = {
	market: string
	tradeDate: string
	tradeTime: string
	tradeDateKst: string
	tradeTimeKst: string
	tradeTimestamp: string
	openingPrice: string
	highPrice: string
	lowPrice: string
	tradePrice: string
	prevClosingPrice: string
	change: string
	changePrice: string
	changeRate: string
	signedChangePrice: string
	signedChangeRate: string
	tradeVolume: string
	accTradePrice: string
	accTradePrice24h: string
	accTradeVolume: string
	accTradeVolume24h: string
	highest52WeekPrice: string
	highest52WeekDate: string
	lowest52WeekPrice: string
	lowest52WeekDate: string
	timestamp: string
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
	market: string
	candleDateTimeUtc: string
	candleDateTimeKst: string
	openingPrice: string
	highPrice: string
	lowPrice: string
	tradePrice: string
	timestamp: string
	candleAccTradePrice: string
	candleAccTradeVolume: string
	unit: string
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
