'use client'

type PropsType = {}

const OrderBoxBidBtn = (props: PropsType) => {
	return (
		<>
					<button className='col-span-1 py-1 text-center w-full bg-white font-bold text-gray-800 shadow-md hover:border-green-600 hover:bg-green-500 hover:text-white'>
						Send
					</button>

					<button className='col-span-1 py-1 text-center w-full bg-white font-bold text-gray-800 shadow-md hover:border-red-600 hover:bg-red-500 hover:text-white'>
						Close
					</button>

					<button className='col-span-1 py-1 text-center w-full bg-white font-bold text-gray-800 shadow-md hover:border-yellow-600 hover:bg-yellow-500 hover:text-white'>
						Wait
					</button>
		</>
	)
}

export default OrderBoxBidBtn
