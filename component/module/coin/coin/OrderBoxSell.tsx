'use client'

import { UseFormReturn } from 'react-hook-form'
import { OrderRegisterSchemaType } from '@schema/cocoin'

type PropsType = {
	methods: UseFormReturn<OrderRegisterSchemaType>
	orderPrice: number
	setOrderPrice: (v: number) => void
};

const OrderBoxSell = (props: PropsType) => {
	return (
		<>
			<div>포지션이 없습니다.</div>
		</>
	)
}

export default OrderBoxSell