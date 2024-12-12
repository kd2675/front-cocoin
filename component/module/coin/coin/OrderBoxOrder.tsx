'use client'

import { ChangeEvent, MouseEventHandler, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { modalActions } from '@redux/reducers/modal'
import { FormProvider, SubmitErrorHandler, SubmitHandler, useForm, UseFormReturn } from 'react-hook-form'
import { OrderRegisterSchema, OrderRegisterSchemaType } from '@schema/cocoin'
import { SignUpRegisterSchemaType } from '@schema/signUp'
import { useOrder } from '@api/service/cocoin/biz/useCocoinService'
import OrderBoxBuy from '@component/module/coin/coin/OrderBoxBuy'
import { yupResolver } from '@hookform/resolvers/yup'
import OrderBoxSell from '@component/module/coin/coin/OrderBoxSell'

type PropsType = {
	orderPrice: number
	setOrderPrice: (v: number) => void
}

const OrderBoxOrder = (props: PropsType) => {
	const dispatch = useDispatch()
	const [orderSlct, setOrderSlct] = useState<string>('b')

	const methods = useForm<OrderRegisterSchemaType>({
		resolver: yupResolver(OrderRegisterSchema),
		mode: 'onSubmit',
		reValidateMode: 'onSubmit',
		shouldFocusError: false,
	})

	const orderSlctRegister = methods.register('orderSlct')
	const coinSlctRegister = methods.register('coinSlct')
	const marginSlctRegister = methods.register('marginSlct')
	const marginRegister = methods.register('margin')
	const cntRegister = methods.register('cnt')
	const priceRegister = methods.register('price')

	useEffect(() => {
		methods.setValue('price', props.orderPrice)
	}, [props.orderPrice])

	return (
		<>
			<div className='col-span-2 rounded-lg bg-white p-4 shadow sm:p-6 xl:p-8'>
				<div className={'relative -top-6 flex items-center justify-start'}>
					<button
						type={'button'}
						className={(orderSlct === 'b' ? 'bg-blue-600 ' : 'bg-blue-100 ') + 'rounded-md px-4 py-1.5 font-medium text-blue-50 hover:bg-blue-600'}
						onClick={() => {
							setOrderSlct('b')
						}}
					>
						buy
					</button>
					<button
						type={'button'}
						className={(orderSlct === 's' ? 'bg-red-600 ' : 'bg-red-100 ') + 'rounded-md px-4 py-1.5 font-medium text-red-50 hover:bg-red-600'}
						onClick={() => {
							setOrderSlct('s')
						}}
					>
						sell
					</button>
				</div>
				{orderSlct == 'b' ? (
					<OrderBoxBuy
						methods={methods}
						orderPrice={props.orderPrice}
						setOrderPrice={props.setOrderPrice}
					></OrderBoxBuy>
				) : (
					<OrderBoxSell
						methods={methods}
						orderPrice={props.orderPrice}
						setOrderPrice={props.setOrderPrice}
					></OrderBoxSell>
				)}
			</div>
		</>
	)
}

export default OrderBoxOrder
