import React, { useCallback, useEffect } from 'react'
import Layout from '@component/common/layout'
import { useRouter } from 'next/router'
import Menu from 'component/module/intro/detail/menu'
import { first } from 'lodash'
import { goIntroShlRoute } from '@link/index'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { menuActions } from '@redux/reducers/menu'

const Index = () => {
	const router = useRouter()
	const introSwrRoute = goIntroShlRoute()
	const dispatch = useDispatch()

	const title = useSelector((state: RootState) => state.menu.data).filter((v) => v.id === 100)

	const data = useSelector((state: RootState) => state.menu.data)
		.filter((v) => v.id === 100)
		.flatMap((v) => v.sub)

	const onClick = useCallback((id?: number) => {
		introSwrRoute({ type: 'push', id: id })
	}, [])

	useEffect(() => {
		dispatch(menuActions.setSubMenuNum(Number(100)))
		return ()=>{dispatch(menuActions.setSubMenuNum(Number(0)))}
	}, [router])

	return (
		<>
			<Layout>
				<section className='body-font text-gray-600'>
					<div className='container mx-auto px-5 py-8'>
						<div className='mb-20 flex w-full flex-wrap'>
							<div className='mb-6 w-full lg:mb-0 lg:w-1/2'>
								<h1 className='title-font mb-2 text-2xl font-medium text-gray-900 sm:text-3xl'>{first(title)?.title}</h1>
								<div className='h-1 w-20 rounded bg-indigo-500'></div>
							</div>
							<p className='w-full leading-relaxed text-gray-500 lg:w-1/2'>
								Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies
								heirloom prism food truck ugh squid celiac humblebrag.
							</p>
						</div>
						<div className='-m-4 hidden flex-wrap lg:flex'>
							{data.map((v) => {
								return (
									<>
										<div className='p-4 md:w-1/3'>
											<div
												className='flex h-full cursor-pointer flex-col rounded-lg bg-gradient-to-b from-gray-50 via-green-50 to-green-100 bg-size-200 bg-pos-0 p-8 shadow-xl duration-500 hover:bg-pos-100'
												onClick={() => {
													onClick(v.id)
												}}
											>
												<div className='mb-3 flex items-center'>
													<div className='mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white'>
														<svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='h-5 w-5' viewBox='0 0 24 24'>
															<path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
														</svg>
													</div>
													<h2 className='title-font text-lg font-medium text-gray-900'>{v.subTitle}</h2>
												</div>
												<div className='flex-grow'>
													<p className='text-base leading-relaxed'>{v.subContent}</p>
													<a className='mt-3 inline-flex items-center text-indigo-500'>
														바로가기
														<svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='ml-2 h-4 w-4' viewBox='0 0 24 24'>
															<path d='M5 12h14M12 5l7 7-7 7'></path>
														</svg>
													</a>
												</div>
											</div>
										</div>
									</>
								)
							})}
						</div>
					</div>
				</section>
			</Layout>
		</>
	)
}

export default Index
