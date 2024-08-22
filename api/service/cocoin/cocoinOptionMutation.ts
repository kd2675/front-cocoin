import { MutationParam } from '@api/service/Service'
import type { DefaultError } from '@tanstack/query-core'
import { BaseResponseType } from '@/api'
import cocoinAxios, { OrderParamType, OrderType } from '@api/service/cocoin/cocoinAxios'

const mutationKeys = {
	order: ['order'] as const,
}

const mutationOptions = {
	order: (props?: MutationParam) => ({
		mutationKey: mutationKeys.order,
		mutationFn: async (data: OrderParamType) => {
			const res = await cocoinAxios.order(data)
			return res.data
		},
		onSuccess: async (data: BaseResponseType<OrderType>, variables: OrderParamType, context: unknown) => {
			props?.onSuccess?.(data)
		},
		onError: (error: DefaultError, variables: OrderParamType, context: unknown) => {
			props?.onError?.(error)
		},
	}),
}

export default mutationOptions
