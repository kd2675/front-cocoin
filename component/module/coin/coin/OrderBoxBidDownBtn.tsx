'use client'

import { orderBook } from '@api/service/cocoin/cocoinAxios'

type PropsType = { orderBook: orderBook }

const OrderBoxBidUpBtn = (props: PropsType) => {
	return (
		<>
			<div className='col-span-1'></div>

			<button className='col-span-2 w-full bg-white py-1 text-center font-bold text-gray-800 shadow-md hover:border-red-600 hover:bg-red-500 hover:text-white'>
				{props.orderBook.bidPrice}
			</button>
			<button className='col-span-1 w-full bg-white py-1 text-center font-bold text-gray-800 shadow-md hover:border-yellow-600 hover:bg-yellow-500 hover:text-white'>
				{props.orderBook.bidSize}
			</button>
		</>
	)
}

export default OrderBoxBidUpBtn
