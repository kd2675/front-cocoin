import { useMutation, useQueryClient } from '@tanstack/react-query'
import mutationOptions from '@api/service/auth/queries'
import { useDispatch } from 'react-redux'
import { MutationParam } from '@api/service/Service'

export const useLogin = (props?:MutationParam) => {
	const dispatch = useDispatch()
	const queryClient = useQueryClient()

	return useMutation(mutationOptions.login(props), queryClient)
}
