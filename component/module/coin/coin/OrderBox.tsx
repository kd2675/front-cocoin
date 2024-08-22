'use client'

import OrderBoxChart from '@component/module/coin/coin/OrderBoxChart'
import OrderBoxBid from '@component/module/coin/coin/OrderBoxBid'
import OrderBoxOrder from '@component/module/coin/coin/OrderBoxOrder'
import { useState } from 'react'

type PropsType = {}
const OrderBox = (props: PropsType) => {
	const [orderPrice, setOrderPrice] = useState<number>(80102000)

	return (
		<>
			<div className='grid w-full grid-cols-3 gap-4 xl:grid-cols-3 2xl:grid-cols-6'>
				<OrderBoxChart></OrderBoxChart>
				<OrderBoxBid orderPrice={orderPrice} setOrderPrice={setOrderPrice}></OrderBoxBid>
				<OrderBoxOrder orderPrice={orderPrice} setOrderPrice={setOrderPrice}></OrderBoxOrder>
			</div>
		</>
	)
}

export default OrderBox
