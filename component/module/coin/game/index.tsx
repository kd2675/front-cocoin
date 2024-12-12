'use client'

import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { menuActions } from '@redux/reducers/menu'
import { useRouter } from 'next/navigation'
import { goGameBasicBuyRouter } from '@/link'

type PropsType = {}

const Index = (props: PropsType) => {
	const dispatch = useDispatch()
	const router = useRouter()
	const basicRouter = goGameBasicBuyRouter()
	useEffect(() => {
		dispatch(menuActions.setMenuNum(4))
	}, [])
	const basicOnClick = () => {
		basicRouter({ type: 'push' })
	}

	return (
		<>
			<section className='p-4'>
				<div className='relative flex h-full min-h-[314px] w-full flex-col items-center justify-center rounded-xl !bg-gray-900 bg-white bg-clip-border px-8 text-gray-700'>
					<div className='container mx-auto text-center'>
						<h2 className='mb-4 block font-sans text-4xl font-semibold leading-[1.3] tracking-normal text-white antialiased'>
							Game
						</h2>
						<p className='mb-8 block font-sans text-xl font-normal leading-relaxed text-white antialiased opacity-70'>
							Choose the perfect plan for your dining experience
						</p>
					</div>
				</div>
				<div className='lg:px-30 -mt-16 px-10 pb-16 pt-8 xl:px-40'>
					<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
						<div className='relative z-10 flex translate-y-0 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md lg:h-max lg:scale-105'>
							<div className='p-6 text-center'>
								<h5 className='mb-2 mt-2 flex justify-center font-sans text-xl font-semibold leading-snug tracking-normal text-green-500 antialiased'>
									Basic Plan
								</h5>
								<h3 className='mb-2 mt-5 flex justify-center font-sans text-3xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
									￦10,000
									<span className='block -translate-y-1 self-end font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
										/once
									</span>
								</h3>
								<ul className='mb-5 mt-2 flex flex-col items-center justify-start gap-3 pt-6'>
									<div className=''>
										<li className='flex items-center gap-2 py-1 text-gray-700'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												strokeWidth='2'
												stroke='currentColor'
												aria-hidden='true'
												className='h-5 w-5 text-inherit'
											>
												<path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5'></path>
											</svg>
											<p className='block font-sans text-base font-normal leading-relaxed text-inherit antialiased'>
												Online ordering
											</p>
										</li>
										<li className='flex items-center gap-2 py-1 text-gray-700'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												strokeWidth='2'
												stroke='currentColor'
												aria-hidden='true'
												className='h-5 w-5 text-inherit'
											>
												<path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5'></path>
											</svg>
											<p className='block font-sans text-base font-normal leading-relaxed text-inherit antialiased'>
												Limited support
											</p>
										</li>
									</div>
								</ul>
								<button
									className='flex w-full select-none items-center justify-center gap-4 rounded-lg bg-gray-900 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
									type='button'
									onClick={basicOnClick}
								>
									join{' '}
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth='2'
										stroke='currentColor'
										aria-hidden='true'
										className='h-5 w-5'
									>
										<path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'></path>
									</svg>
								</button>
							</div>
						</div>
						<div className='relative z-10 flex translate-y-0 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md lg:h-max lg:scale-105'>
							<div className='p-6 text-center'>
								<h5 className='mb-2 mt-2 flex justify-center font-sans text-xl font-semibold leading-snug tracking-normal text-green-500 antialiased'>
									Premium Plan
								</h5>
								<h3 className='mb-2 mt-5 flex justify-center font-sans text-3xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
									$19.99
									<span className='block -translate-y-1 self-end font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
										/per month
									</span>
								</h3>
								<ul className='mb-5 mt-2 flex flex-col items-center justify-start gap-3 pt-6'>
									<div className=''>
										<li className='flex items-center gap-2 py-1 text-gray-700'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												strokeWidth='2'
												stroke='currentColor'
												aria-hidden='true'
												className='h-5 w-5 text-inherit'
											>
												<path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5'></path>
											</svg>
											<p className='block font-sans text-base font-normal leading-relaxed text-inherit antialiased'>
												Online ordering
											</p>
										</li>
										<li className='flex items-center gap-2 py-1 text-gray-700'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												strokeWidth='2'
												stroke='currentColor'
												aria-hidden='true'
												className='h-5 w-5 text-inherit'
											>
												<path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5'></path>
											</svg>
											<p className='block font-sans text-base font-normal leading-relaxed text-inherit antialiased'>
												24/7 support
											</p>
										</li>
										<li className='flex items-center gap-2 py-1 text-gray-700'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												strokeWidth='2'
												stroke='currentColor'
												aria-hidden='true'
												className='h-5 w-5 text-inherit'
											>
												<path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5'></path>
											</svg>
											<p className='block font-sans text-base font-normal leading-relaxed text-inherit antialiased'>
												Special events access
											</p>
										</li>
									</div>
								</ul>
								<button
									className='flex w-full select-none items-center justify-center gap-4 rounded-lg bg-gray-900 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
									type='button'
								>
									join{' '}
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth='2'
										stroke='currentColor'
										aria-hidden='true'
										className='h-5 w-5'
									>
										<path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'></path>
									</svg>
								</button>
							</div>
						</div>
						<div className='relative z-10 flex translate-y-0 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md lg:h-max lg:scale-105'>
							<div className='p-6 text-center'>
								<h5 className='mb-2 mt-2 flex justify-center font-sans text-xl font-semibold leading-snug tracking-normal text-green-500 antialiased'>
									Ultimate Plan
								</h5>
								<h3 className='mb-2 mt-5 flex justify-center font-sans text-3xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
									$29.99
									<span className='block -translate-y-1 self-end font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
										/per month
									</span>
								</h3>
								<ul className='mb-5 mt-2 flex flex-col items-center justify-start gap-3 pt-6'>
									<div className=''>
										<li className='flex items-center gap-2 py-1 text-gray-700'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												strokeWidth='2'
												stroke='currentColor'
												aria-hidden='true'
												className='h-5 w-5 text-inherit'
											>
												<path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5'></path>
											</svg>
											<p className='block font-sans text-base font-normal leading-relaxed text-inherit antialiased'>
												Online ordering
											</p>
										</li>
										<li className='flex items-center gap-2 py-1 text-gray-700'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												strokeWidth='2'
												stroke='currentColor'
												aria-hidden='true'
												className='h-5 w-5 text-inherit'
											>
												<path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5'></path>
											</svg>
											<p className='block font-sans text-base font-normal leading-relaxed text-inherit antialiased'>
												24/7 support
											</p>
										</li>
										<li className='flex items-center gap-2 py-1 text-gray-700'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												strokeWidth='2'
												stroke='currentColor'
												aria-hidden='true'
												className='h-5 w-5 text-inherit'
											>
												<path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5'></path>
											</svg>
											<p className='block font-sans text-base font-normal leading-relaxed text-inherit antialiased'>
												Special events access
											</p>
										</li>
										<li className='flex items-center gap-2 py-1 text-gray-700'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												strokeWidth='2'
												stroke='currentColor'
												aria-hidden='true'
												className='h-5 w-5 text-inherit'
											>
												<path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5'></path>
											</svg>
											<p className='block font-sans text-base font-normal leading-relaxed text-inherit antialiased'>
												Personal chef consultation
											</p>
										</li>
									</div>
								</ul>
								<button
									className='flex w-full select-none items-center justify-center gap-4 rounded-lg bg-gray-900 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
									type='button'
								>
									join{' '}
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth='2'
										stroke='currentColor'
										aria-hidden='true'
										className='h-5 w-5'
									>
										<path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'></path>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Index
