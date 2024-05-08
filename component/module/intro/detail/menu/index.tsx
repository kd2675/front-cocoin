import React, { useCallback } from 'react'
import { goIntroShlRoute } from '@link/index'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { useRouter } from 'next/router'

type PropsType = {
	children: React.ReactNode
}

const Index = (props: PropsType) => {
	const router = useRouter()
	const dispatch = useDispatch()
	const introSwrRoute = goIntroShlRoute()

	const subMenuNum = useSelector((state: RootState) => state.menu.subMenuNum)

	const title = useSelector((state: RootState) => state.menu.data).filter((v) => v.id === 100)

	const data = useSelector((state: RootState) => state.menu.data)
		.filter((v) => v.id === 100)
		.flatMap((v) => v.sub)

	const onClick = useCallback((id?: number) => {
		introSwrRoute({ type: 'push', id: id })
	}, [])

	return (
		<>
			<section className='body-font text-gray-600'>
				<div className='container mx-auto flex flex-col'>
					<div className='mt-10 flex flex-col sm:flex-row'>
						<div className='hidden border-b border-gray-200 text-center sm:pr-8 lg:block'>
							{data.map((v, i, a) => {
								return (
									<div
										key={i}
										onClick={() => {
											onClick(v.id)
										}}
										className={'flex flex-wrap py-8 md:flex-nowrap'}
									>
										<div className={(subMenuNum == v.id ? 'border-y-2 border-indigo-500 ' : 'border-y-2 ') + 'mb-6 flex flex-shrink-0 flex-col md:mb-0 md:w-64'}>
											<span className='title-font font-semibold text-gray-700'>{v.subTitle}</span>
											<span className='text-sm text-gray-500'>12 Jun 2019</span>
										</div>
									</div>
								)
							})}
						</div>
						<div className='mt-4 text-center'>{props.children}</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default React.memo(Index)
