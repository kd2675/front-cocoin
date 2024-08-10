'use client'

type PropsType = {

};

const OrderSuc = (props: PropsType) => {
	return (
		<>
			<div className='my-4 grid grid-cols-1 xl:gap-4 2xl:grid-cols-2'>
				<div className='mb-4 h-full rounded-lg bg-white p-4 shadow sm:p-6'>
					<div className='mb-4 flex items-center justify-between'>
						<h3 className='text-xl font-bold leading-none text-gray-900'>Latest Customers</h3>
						<a
							href='#'
							className='inline-flex items-center rounded-lg p-2 text-sm font-medium text-cyan-600 hover:bg-gray-100'
						>
							View all
						</a>
					</div>
					<div className='flow-root'>
						<ul role='list' className='divide-y divide-gray-200'>
							<li className='py-3 sm:py-4'>
								<div className='flex items-center space-x-4'>
									<div className='flex-shrink-0'>
										<img
											className='h-8 w-8 rounded-full'
											src='https://demo.themesberg.com/windster/images/users/neil-sims.png'
											alt='Neil image'
										/>
									</div>
									<div className='min-w-0 flex-1'>
										<p className='truncate text-sm font-medium text-gray-900'>Neil Sims</p>
										<p className='truncate text-sm text-gray-500'>
											<a
												href='/cdn-cgi/l/email-protection'
												className='__cf_email__'
												data-cfemail='17727a767e7b57607e7973646372653974787a'
											>
												[email&#160;protected]
											</a>
										</p>
									</div>
									<div className='inline-flex items-center text-base font-semibold text-gray-900'>$320</div>
								</div>
							</li>
							<li className='py-3 sm:py-4'>
								<div className='flex items-center space-x-4'>
									<div className='flex-shrink-0'>
										<img
											className='h-8 w-8 rounded-full'
											src='https://demo.themesberg.com/windster/images/users/bonnie-green.png'
											alt='Neil image'
										/>
									</div>
									<div className='min-w-0 flex-1'>
										<p className='truncate text-sm font-medium text-gray-900'>Bonnie Green</p>
										<p className='truncate text-sm text-gray-500'>
											<a
												href='/cdn-cgi/l/email-protection'
												className='__cf_email__'
												data-cfemail='d4b1b9b5bdb894a3bdbab0a7a0b1a6fab7bbb9'
											>
												[email&#160;protected]
											</a>
										</p>
									</div>
									<div className='inline-flex items-center text-base font-semibold text-gray-900'>$3467</div>
								</div>
							</li>
							<li className='py-3 sm:py-4'>
								<div className='flex items-center space-x-4'>
									<div className='flex-shrink-0'>
										<img
											className='h-8 w-8 rounded-full'
											src='https://demo.themesberg.com/windster/images/users/michael-gough.png'
											alt='Neil image'
										/>
									</div>
									<div className='min-w-0 flex-1'>
										<p className='truncate text-sm font-medium text-gray-900'>Michael Gough</p>
										<p className='truncate text-sm text-gray-500'>
											<a
												href='/cdn-cgi/l/email-protection'
												className='__cf_email__'
												data-cfemail='57323a363e3b17203e3933242332257934383a'
											>
												[email&#160;protected]
											</a>
										</p>
									</div>
									<div className='inline-flex items-center text-base font-semibold text-gray-900'>$67</div>
								</div>
							</li>
							<li className='py-3 sm:py-4'>
								<div className='flex items-center space-x-4'>
									<div className='flex-shrink-0'>
										<img
											className='h-8 w-8 rounded-full'
											src='https://demo.themesberg.com/windster/images/users/thomas-lean.png'
											alt='Neil image'
										/>
									</div>
									<div className='min-w-0 flex-1'>
										<p className='truncate text-sm font-medium text-gray-900'>Thomes Lean</p>
										<p className='truncate text-sm text-gray-500'>
											<a
												href='/cdn-cgi/l/email-protection'
												className='__cf_email__'
												data-cfemail='284d45494144685f41464c5b5c4d5a064b4745'
											>
												[email&#160;protected]
											</a>
										</p>
									</div>
									<div className='inline-flex items-center text-base font-semibold text-gray-900'>$2367</div>
								</div>
							</li>
							<li className='pb-0 pt-3 sm:pt-4'>
								<div className='flex items-center space-x-4'>
									<div className='flex-shrink-0'>
										<img
											className='h-8 w-8 rounded-full'
											src='https://demo.themesberg.com/windster/images/users/lana-byrd.png'
											alt='Neil image'
										/>
									</div>
									<div className='min-w-0 flex-1'>
										<p className='truncate text-sm font-medium text-gray-900'>Lana Byrd</p>
										<p className='truncate text-sm text-gray-500'>
											<a
												href='/cdn-cgi/l/email-protection'
												className='__cf_email__'
												data-cfemail='a2c7cfc3cbcee2d5cbccc6d1d6c7d08cc1cdcf'
											>
												[email&#160;protected]
											</a>
										</p>
									</div>
									<div className='inline-flex items-center text-base font-semibold text-gray-900'>$367</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div className='rounded-lg bg-white p-4 shadow sm:p-6 xl:p-8 '>
					<h3 className='mb-10 text-xl font-bold leading-none text-gray-900'>Acquisition Overview</h3>
					<div className='block w-full overflow-x-auto'>
						<table className='w-full border-collapse items-center bg-transparent'>
							<thead>
							<tr>
								<th
									className='whitespace-nowrap border-l-0 border-r-0 bg-gray-50 px-4 py-3 text-left align-middle text-xs font-semibold uppercase text-gray-700'>
									Top Channels
								</th>
								<th
									className='whitespace-nowrap border-l-0 border-r-0 bg-gray-50 px-4 py-3 text-left align-middle text-xs font-semibold uppercase text-gray-700'>
									Users
								</th>
								<th
									className='min-w-140-px whitespace-nowrap border-l-0 border-r-0 bg-gray-50 px-4 py-3 text-left align-middle text-xs font-semibold uppercase text-gray-700'></th>
							</tr>
							</thead>
							<tbody className='divide-y divide-gray-100'>
							<tr className='text-gray-500'>
								<th className='whitespace-nowrap border-t-0 p-4 px-4 text-left align-middle text-sm font-normal'>
									Organic Search
								</th>
								<td className='whitespace-nowrap border-t-0 p-4 px-4 align-middle text-xs font-medium text-gray-900'>
									5,649
								</td>
								<td className='whitespace-nowrap border-t-0 p-4 px-4 align-middle text-xs'>
									<div className='flex items-center'>
										<span className='mr-2 text-xs font-medium'>30%</span>
										<div className='relative w-full'>
											<div className='h-2 w-full rounded-sm bg-gray-200'>
												<div className='h-2 rounded-sm bg-cyan-600' style={{ width: '30%' }}></div>
											</div>
										</div>
									</div>
								</td>
							</tr>
							<tr className='text-gray-500'>
								<th className='whitespace-nowrap border-t-0 p-4 px-4 text-left align-middle text-sm font-normal'>
									Referral
								</th>
								<td className='whitespace-nowrap border-t-0 p-4 px-4 align-middle text-xs font-medium text-gray-900'>
									4,025
								</td>
								<td className='whitespace-nowrap border-t-0 p-4 px-4 align-middle text-xs'>
									<div className='flex items-center'>
										<span className='mr-2 text-xs font-medium'>24%</span>
										<div className='relative w-full'>
											<div className='h-2 w-full rounded-sm bg-gray-200'>
												<div className='h-2 rounded-sm bg-orange-300' style={{ width: '24%' }}></div>
											</div>
										</div>
									</div>
								</td>
							</tr>
							<tr className='text-gray-500'>
								<th className='whitespace-nowrap border-t-0 p-4 px-4 text-left align-middle text-sm font-normal'>
									Direct
								</th>
								<td className='whitespace-nowrap border-t-0 p-4 px-4 align-middle text-xs font-medium text-gray-900'>
									3,105
								</td>
								<td className='whitespace-nowrap border-t-0 p-4 px-4 align-middle text-xs'>
									<div className='flex items-center'>
										<span className='mr-2 text-xs font-medium'>18%</span>
										<div className='relative w-full'>
											<div className='h-2 w-full rounded-sm bg-gray-200'>
												<div className='h-2 rounded-sm bg-teal-400' style={{ width: '18%' }}></div>
											</div>
										</div>
									</div>
								</td>
							</tr>
							<tr className='text-gray-500'>
								<th className='whitespace-nowrap border-t-0 p-4 px-4 text-left align-middle text-sm font-normal'>
									Social
								</th>
								<td className='whitespace-nowrap border-t-0 p-4 px-4 align-middle text-xs font-medium text-gray-900'>
									1251
								</td>
								<td className='whitespace-nowrap border-t-0 p-4 px-4 align-middle text-xs'>
									<div className='flex items-center'>
										<span className='mr-2 text-xs font-medium'>12%</span>
										<div className='relative w-full'>
											<div className='h-2 w-full rounded-sm bg-gray-200'>
												<div className='h-2 rounded-sm bg-pink-600' style={{ width: '12%' }}></div>
											</div>
										</div>
									</div>
								</td>
							</tr>
							<tr className='text-gray-500'>
								<th className='whitespace-nowrap border-t-0 p-4 px-4 text-left align-middle text-sm font-normal'>
									Other
								</th>
								<td className='whitespace-nowrap border-t-0 p-4 px-4 align-middle text-xs font-medium text-gray-900'>
									734
								</td>
								<td className='whitespace-nowrap border-t-0 p-4 px-4 align-middle text-xs'>
									<div className='flex items-center'>
										<span className='mr-2 text-xs font-medium'>9%</span>
										<div className='relative w-full'>
											<div className='h-2 w-full rounded-sm bg-gray-200'>
												<div className='h-2 rounded-sm bg-indigo-600' style={{ width: '9%' }}></div>
											</div>
										</div>
									</div>
								</td>
							</tr>
							<tr className='text-gray-500'>
								<th className='whitespace-nowrap border-t-0 p-4 pb-0 text-left align-middle text-sm font-normal'>
									Email
								</th>
								<td className='whitespace-nowrap border-t-0 p-4 pb-0 align-middle text-xs font-medium text-gray-900'>
									456
								</td>
								<td className='whitespace-nowrap border-t-0 p-4 pb-0 align-middle text-xs'>
									<div className='flex items-center'>
										<span className='mr-2 text-xs font-medium'>7%</span>
										<div className='relative w-full'>
											<div className='h-2 w-full rounded-sm bg-gray-200'>
												<div className='h-2 rounded-sm bg-purple-500' style={{ width: '7%' }}></div>
											</div>
										</div>
									</div>
								</td>
							</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	)
}

export default OrderSuc