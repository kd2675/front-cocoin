import React from 'react'
import { goHomeRoute } from '@link/index'
import { useRouter } from 'next/router'
import { publish } from '../../../../socket'
import { useSocketClient } from '../../../../socket/useSocketClient'
import HeaderCardSwipe from '@component/common/layout/HeaderCardSwipe'

const Index = () => {
	const router = useRouter()
	const homeRoute = goHomeRoute()
	const socketClient = useSocketClient()
	const homeOnClick = (props: any) => {
		// publish(socketClient, '/pub/hello', { name: 'te' })
		homeRoute({ type: 'push' })
	}

	return (
		<>
			<header className='body-font mt-24 border bg-white text-gray-600 lg:rounded-t-lg'>
				<div className='fixed top-0 z-40 flex h-24 w-full flex-col flex-wrap items-center justify-center bg-white p-2'>
					<div className='title-font order-first flex cursor-pointer  font-medium text-gray-900 ' onClick={homeOnClick}>
						<img src={'/images/favicon-96x96.png'} className='h-8 w-8 rounded-full bg-white text-white' />
						<span className='ml-3 text-2xl font-bold'>수북농업</span>
					</div>
				</div>
			</header>
		</>
	)
}

export default Index
