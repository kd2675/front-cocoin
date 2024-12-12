import { MutationParam } from '@api/service/Service'
import type { DefaultError } from '@tanstack/query-core'
import { BaseDataResponseType } from '@/api'
import cocoinAxios from '@api/service/cocoin/act/cocoinAxios'
import { OrderParamType, OrderType } from '@api/service/cocoin/vo/cocoinType'

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
		onSuccess: async (data: BaseDataResponseType<OrderType>, variables: OrderParamType, context: unknown) => {
			props?.onSuccess?.(data)
		},
		onError: (error: DefaultError, variables: OrderParamType, context: unknown) => {
			props?.onError?.(error)
		},
	}),
}

export default mutationOptions
