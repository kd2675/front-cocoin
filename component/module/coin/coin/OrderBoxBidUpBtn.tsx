'use client'

import { orderBook } from '@api/service/cocoin/cocoinAxios'

type PropsType = {
	orderBook: orderBook
	setOrderPrice: (v: number) => void
}

const OrderBoxBidUpBtn = (props: PropsType) => {
	return (
		<>
			<button className='col-span-1 w-full border border-white bg-blue-100 py-1 text-center text-xs font-bold text-gray-800 shadow-md hover:border-green-600 hover:bg-green-500 hover:text-white'>
				{props.orderBook.askSize}
			</button>

			<button
				className='col-span-2 w-full border border-white bg-blue-100 py-1 text-center font-bold text-gray-800 shadow-md hover:border-red-600 hover:bg-red-500 hover:text-white'
				onClick={(e) => {
					props.setOrderPrice(Number(e.currentTarget.textContent))
				}}
			>
				{props.orderBook.askPrice}
			</button>

			<div className='col-span-1'></div>
		</>
	)
}

export default OrderBoxBidUpBtn
