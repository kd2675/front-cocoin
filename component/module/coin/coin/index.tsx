'use client'

import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { menuActions } from '@redux/reducers/menu'
import OrderBox from '@component/module/coin/coin/OrderBox'
import OrderPer from '@component/module/coin/coin/OrderPer'
import OrderSuc from '@component/module/coin/coin/OrderSuc'
import OrderFooterCard from '@component/module/coin/coin/OrderFooterCard'

type PropsType = {}

const Index = (props: PropsType) => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(menuActions.setMenuNum(3))
	}, [])

	return (
		<>
			<div>
				<div className='flex overflow-hidden bg-white'>
					<div id='main-content' className='relative h-full w-full overflow-y-auto bg-gray-50'>
						<div className='px-4 pt-6'>
							<OrderBox></OrderBox>
							<OrderPer></OrderPer>
							<OrderSuc></OrderSuc>
						</div>
						<OrderFooterCard></OrderFooterCard>
					</div>
				</div>
			</div>
		</>
	)
}

export default Index
