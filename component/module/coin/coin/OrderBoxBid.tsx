'use client'

type PropsType = {

};

const OrderBoxBid = (props: PropsType) => {
	return (
		<>
			<div className='rounded-lg bg-white p-4 shadow sm:p-6 xl:p-8 col-span-1'>
				<div className='mb-4 flex items-center justify-center'>
						<div className='text-xl font-bold text-gray-900 text-center'>호가창</div>


				</div>
				<div className='mt-8 flex flex-col'>
					<div className=' rounded-lg'>
						<div className='inline-block min-w-full align-middle'>
							<div className='overflow-hidden shadow sm:rounded-lg'>

							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default OrderBoxBid