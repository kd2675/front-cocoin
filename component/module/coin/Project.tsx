'use client'

type PropsType = {

};

const Project = (props: PropsType) => {
	return (
		<>
			<div className='mb-4 grid grid-cols-1 gap-6 xl:grid-cols-2'>
				<div
					className='relative flex flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md xl:col-span-2'>
					<div
						className='relative m-0 flex items-center justify-between overflow-hidden rounded-xl bg-transparent bg-clip-border p-6 text-gray-700 shadow-none'>
						<div>
							<h6
								className='mb-1 block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased'>
								상위 3인 회원 현황
							</h6>
							<p
								className='flex items-center gap-1 font-sans text-sm font-normal leading-normal text-blue-gray-600 antialiased'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth='3'
									stroke='currentColor'
									aria-hidden='true'
									className='h-4 w-4 text-blue-500'
								>
									<path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5'></path>
								</svg>
								<strong>30 done</strong> this month
							</p>
						</div>
						{/*<button*/}
						{/*	aria-expanded='false'*/}
						{/*	aria-haspopup='menu'*/}
						{/*	id=':r5:'*/}
						{/*	className='middle none relative h-8 max-h-[32px] w-8 max-w-[32px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'*/}
						{/*	type='button'*/}
						{/*>*/}
						{/*		<span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>*/}
						{/*			<svg*/}
						{/*				xmlns='http://www.w3.org/2000/svg'*/}
						{/*				fill='currenColor'*/}
						{/*				viewBox='0 0 24 24'*/}
						{/*				strokeWidth='3'*/}
						{/*				stroke='currentColor'*/}
						{/*				aria-hidden='true'*/}
						{/*				className='h-6 w-6'*/}
						{/*			>*/}
						{/*				<path*/}
						{/*					strokeLinecap='round'*/}
						{/*					strokeLinejoin='round'*/}
						{/*					d='M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z'*/}
						{/*				></path>*/}
						{/*			</svg>*/}
						{/*		</span>*/}
						{/*</button>*/}
					</div>
					<div className='overflow-x-scroll p-6 px-0 pb-2 pt-0'>
						<table className='w-full min-w-[640px] table-auto'>
							<thead>
							<tr>
								<th className='border-b border-blue-gray-50 px-6 py-3 text-left'>
									<p className='block font-sans text-[11px] font-medium uppercase text-blue-gray-400 antialiased'>
										user
									</p>
								</th>
								<th className='border-b border-blue-gray-50 px-6 py-3 text-left'>
									<p className='block font-sans text-[11px] font-medium uppercase text-blue-gray-400 antialiased'>
										point
									</p>
								</th>
								<th className='border-b border-blue-gray-50 px-6 py-3 text-left'>
									<p className='block font-sans text-[11px] font-medium uppercase text-blue-gray-400 antialiased'>
										percent
									</p>
								</th>
							</tr>
							</thead>
							<tbody>
							<tr>
								<td className='border-b border-blue-gray-50 px-5 py-3'>
									<div className='flex items-center gap-4'>
										<p className='block font-sans text-sm font-bold leading-normal text-blue-gray-900 antialiased'>
											kimd0
										</p>
									</div>
								</td>

								<td className='border-b border-blue-gray-50 px-5 py-3'>
									<p className='block font-sans text-xs font-medium text-blue-gray-600 antialiased'>￦130,000,000</p>
								</td>
								<td className='border-b border-blue-gray-50 px-5 py-3'>
									<div className='w-10/12'>
										<p className='mb-1 block font-sans text-xs font-medium text-blue-gray-600 antialiased'>60%</p>
										<div
											className='flex-start flex h-1 w-full overflow-hidden rounded-sm bg-blue-gray-50 font-sans text-xs font-medium'>
											<div
												className='h-{full flex items-center justify-center bg-gradient-to-tr from-blue-600 to-blue-400 text-white'
												style={{ width: '60%' }}
											></div>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td className='border-b border-blue-gray-50 px-5 py-3'>
									<div className='flex items-center gap-4'>
										<p className='block font-sans text-sm font-bold leading-normal text-blue-gray-900 antialiased'>
											Add Progress Track
										</p>
									</div>
								</td>
								<td className='border-b border-blue-gray-50 px-5 py-3'>
									<p className='block font-sans text-xs font-medium text-blue-gray-600 antialiased'>$3,000</p>
								</td>
								<td className='border-b border-blue-gray-50 px-5 py-3'>
									<div className='w-10/12'>
										<p className='mb-1 block font-sans text-xs font-medium text-blue-gray-600 antialiased'>10%</p>
										<div
											className='flex-start flex h-1 w-full overflow-hidden rounded-sm bg-blue-gray-50 font-sans text-xs font-medium'>
											<div
												className='flex h-full items-center justify-center bg-gradient-to-tr from-blue-600 to-blue-400 text-white'
												style={{ width: '10%' }}
											></div>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td className='border-b border-blue-gray-50 px-5 py-3'>
									<div className='flex items-center gap-4'>
										<p className='block font-sans text-sm font-bold leading-normal text-blue-gray-900 antialiased'>
											Fix Platform Errors
										</p>
									</div>
								</td>
								<td className='border-b border-blue-gray-50 px-5 py-3'>
									<p className='block font-sans text-xs font-medium text-blue-gray-600 antialiased'>Not set</p>
								</td>
								<td className='border-b border-blue-gray-50 px-5 py-3'>
									<div className='w-10/12'>
										<p className='mb-1 block font-sans text-xs font-medium text-blue-gray-600 antialiased'>100%</p>
										<div
											className='flex-start flex h-1 w-full overflow-hidden rounded-sm bg-blue-gray-50 font-sans text-xs font-medium'>
											<div
												className='flex h-full items-center justify-center bg-gradient-to-tr from-green-600 to-green-400 text-white'
												style={{ width: '100%' }}
											></div>
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

export default Project