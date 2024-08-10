'use client'

import OrderBoxChart from '@component/module/coin/coin/OrderBoxChart'
import OrderBoxBid from '@component/module/coin/coin/OrderBoxBid'
import OrderBoxOrder from '@component/module/coin/coin/OrderBoxOrder'

type PropsType = {}
const OrderBox = (props: PropsType) => {
	return (
		<>
			<div className='grid w-full grid-cols-3 gap-4 xl:grid-cols-3 2xl:grid-cols-6'>
				<OrderBoxChart></OrderBoxChart>
				<OrderBoxBid></OrderBoxBid>
				<OrderBoxOrder></OrderBoxOrder>
			</div>
		</>
	)
}

export default OrderBox
