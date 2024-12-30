import AuthService from '@api/service/auth/act/authAxios'
import { MutationParam } from '@api/service/Service'
import type { DefaultError } from '@tanstack/query-core'
import { BaseDataResponseType, BaseResponseType } from '@/api'
import { LoginParamType, TokenType } from '@api/service/auth/vo/authType'

const mutationKeys = {
	login: ['login'] as const,
	logout: ['logout'] as const,
}

const mutationOptions = {
	login: (props?: MutationParam) => ({
		mutationKey: mutationKeys.login,
		mutationFn: async (data: LoginParamType) => {
			const res = await AuthService.login(data)
			return res.data
		},
		onSuccess: async (data: BaseDataResponseType<TokenType>, variables: LoginParamType, context: unknown) => {
			props?.onSuccess?.(data)
		},
		onError: (error: DefaultError, variables: LoginParamType, context: unknown) => {
			props?.onError?.(error)
		},
	}),
	logout: (props?: MutationParam) => ({
		mutationKey: mutationKeys.logout,
		mutationFn: async () => {
			const res = await AuthService.logout()
			return res.data
		},
		onSuccess: async (data: BaseResponseType) => {
			props?.onSuccess?.(data)
		},
		onError: (error: DefaultError) => {
			props?.onError?.(error)
		},
	}),
}

export default mutationOptions
