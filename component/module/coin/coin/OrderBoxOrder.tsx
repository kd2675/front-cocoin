'use client'

type PropsType = {}

const OrderBoxOrder = (props: PropsType) => {
	return (
		<>
			<div className='col-span-2 rounded-lg bg-white p-4 shadow sm:p-6 xl:p-8'>
				<div className='mb-4 flex items-center justify-between'>
					<div>
						<h3 className='mb-2 text-xl font-bold text-gray-900'>주문창</h3>
						<span className='text-base font-normal text-gray-500'>This is a list of latest transactions</span>
					</div>
					<div className='flex-shrink-0'>
						<a href='#' className='rounded-lg p-2 text-sm font-medium text-cyan-600 hover:bg-gray-100'>
							View all
						</a>
					</div>
				</div>
				<div className='mt-8 flex flex-col'>
					<div className='w-full px-6'>
						<div className='relative h-2 w-full rounded-full bg-gray-300'>
							<span
								className='absolute top-0 z-10 -ml-2 -mt-1 h-4 w-4 cursor-pointer rounded-full bg-white shadow'
								style={{ left: '50%' }}
							></span>
							<span className='absolute left-0 top-0 h-2 rounded-full bg-teal-500' style={{ width: '50%' }}></span>
						</div>
						<div className='mt-2 flex justify-between text-xs text-gray-600'>
							<span className='w-8 text-left'>0%</span>
							<span className='w-8 text-center'>25%</span>
							<span className='w-8 text-center'>50%</span>
							<span className='w-8 text-center'>75%</span>
							<span className='w-8 text-right'>100%</span>
						</div>
					</div>
					<div className='mt-6'>
						<div className='font-semibold'>How much would you like to send?</div>
						<div>
							<input
								className='mt-1 w-full rounded-[4px] border border-[#A0ABBB] p-2 text-right'
								value='100.00'
								type='text'
								placeholder='100.00'
							/>
						</div>
						<div className='flex justify-between'>
							<div className='mt-[14px] cursor-pointer truncate rounded-[4px] border border-[#E7EAEE] p-3 text-[#191D23]'>
								$10.00
							</div>
							<div className='mt-[14px] cursor-pointer truncate rounded-[4px] border border-[#E7EAEE] p-3 text-[#191D23]'>
								$50.00
							</div>
							<div className='mt-[14px] cursor-pointer truncate rounded-[4px] border border-green-700 p-3 text-[#191D23]'>
								$100.00
							</div>
							<div className='mt-[14px] cursor-pointer truncate rounded-[4px] border border-[#E7EAEE] p-3 text-[#191D23]'>
								$200.00
							</div>
						</div>
					</div>
					<div className='mb-2 mt-6 flex justify-between'>
						<p className='text-gray-700'>Price</p>
						<p className='text-gray-700'>$129.99</p>
					</div>
					<div className='flex justify-between'>
						<p className='text-gray-700'>Tex</p>
						<p className='text-gray-700'>$4.99</p>
					</div>
					<hr className='my-4' />
					<div className='flex justify-between'>
						<p className='text-lg font-bold'>Total</p>
						<div className=''>
							<p className='mb-1 text-lg font-bold'>$134.98 USD</p>
						</div>
					</div>
					<button className='mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600'>
						Check out
					</button>
				</div>
			</div>
		</>
	)
}

export default OrderBoxOrder
