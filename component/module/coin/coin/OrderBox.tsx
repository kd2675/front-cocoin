'use client'

import OrderBoxChart from '@component/module/coin/coin/OrderBoxChart'
import OrderBoxBid from '@component/module/coin/coin/OrderBoxBid'
import OrderBoxOrder from '@component/module/coin/coin/OrderBoxOrder'
import { useEffect, useState } from 'react'
import { useGetTicker } from '@api/service/cocoin/useCocoinService'
import { useForm } from 'react-hook-form'
import { LoginRegisterSchema, LoginRegisterSchemaType } from '@schema/login'
import { yupResolver } from '@hookform/resolvers/yup'
import { OrderRegisterSchema, OrderRegisterSchemaType } from '@schema/cocoin'

type PropsType = {}
const OrderBox = (props: PropsType) => {
	const ticker = useGetTicker()

	const [orderPrice, setOrderPrice] = useState<number>(Number(ticker.data?.data.tradePrice))

	return (
		<>
			<div className='grid w-full grid-cols-3 gap-4 xl:grid-cols-3 2xl:grid-cols-6'>
				<OrderBoxChart></OrderBoxChart>
				<OrderBoxBid orderPrice={orderPrice} setOrderPrice={setOrderPrice}></OrderBoxBid>
				<OrderBoxOrder orderPrice={orderPrice} setOrderPrice={setOrderPrice}></OrderBoxOrder>
			</div>
		</>
	)
}

export default OrderBox
