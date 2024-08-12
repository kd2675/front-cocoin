'use client'

import OrderBoxBidBtn from '@component/module/coin/coin/OrderBoxBidBtn'

type PropsType = {}

const OrderBoxBid = (props: PropsType) => {
	return (
		<>
			<div className='col-span-1 rounded-lg bg-white shadow content-stretch grid grid-cols-3'>
					<OrderBoxBidBtn></OrderBoxBidBtn>
					<OrderBoxBidBtn></OrderBoxBidBtn>
					<OrderBoxBidBtn></OrderBoxBidBtn>
					<OrderBoxBidBtn></OrderBoxBidBtn>
					<OrderBoxBidBtn></OrderBoxBidBtn>
					<OrderBoxBidBtn></OrderBoxBidBtn>
					<OrderBoxBidBtn></OrderBoxBidBtn>
					<OrderBoxBidBtn></OrderBoxBidBtn>
					<OrderBoxBidBtn></OrderBoxBidBtn>
					<OrderBoxBidBtn></OrderBoxBidBtn>
					<OrderBoxBidBtn></OrderBoxBidBtn>
			</div>
		</>
	)
}

export default OrderBoxBid
