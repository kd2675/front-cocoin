'use client'

import OrderBoxBidUpBtn from '@component/module/coin/coin/OrderBoxBidUpBtn'
import OrderBoxBidDownBtn from '@component/module/coin/coin/OrderBoxBidDownBtn'
import { useGetBid, useGetCandles } from '@api/service/cocoin/biz/useCocoinService'

type PropsType = {
	orderPrice: number
	setOrderPrice: (v:number)=>void
}

const OrderBoxBid = (props: PropsType) => {
	const candles = useGetBid()
	return (
		<>
			<div className='col-span-1 grid grid-cols-4 content-stretch rounded-lg bg-white shadow'>
				{candles.data && candles.data.data?.orderbookUnits.reverse().map((v, i, a)=>{
					if (i % 3 == 0){
						return <OrderBoxBidUpBtn orderBook={v} setOrderPrice={props.setOrderPrice}></OrderBoxBidUpBtn>
					}
				})}
				{candles.data && candles.data.data?.orderbookUnits.reverse().map((v, i, a)=>{
					if (i % 3 == 0){
						return <OrderBoxBidDownBtn orderBook={v} setOrderPrice={props.setOrderPrice}></OrderBoxBidDownBtn>
					}
				})}
			</div>
		</>
	)
}

export default OrderBoxBid
