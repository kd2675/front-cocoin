import AuthService, { LoginParamType, TokenType } from '@api/service/auth/AuthService'
import { MutationParam } from '@api/service/Service'
import type { DefaultError } from '@tanstack/query-core'
import { BaseResponseType } from '@/api'

const mutationKeys = {
	login: ['login'] as const,
}

const mutationOptions = {
	login: (props?: MutationParam) => ({
		mutationKey: mutationKeys.login,
		mutationFn: async (data: LoginParamType) => {
			const res = await AuthService.login(data)
			return res.data
		},
		onSuccess: async (data: BaseResponseType<TokenType>, variables: LoginParamType, context: unknown) => {
			props?.onSuccess?.(data)
		},
		onError: (error: DefaultError, variables: LoginParamType, context: unknown) => {
			props?.onError?.(error)
		},
	}),
}

export default mutationOptions
