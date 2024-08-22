import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'
import { modalActions } from '@redux/reducers/modal'
import mutationOptions from '@api/service/cocoin/cocoinOptionMutation'
import queryOptions from '@api/service/cocoin/cocoinOptionQuery'

export const useOrder = () => {
	const dispatch = useDispatch()
	const queryClient = useQueryClient()

	return useMutation(
		mutationOptions.order({
			onSuccess: (data) => {
				dispatch(modalActions.addAlert({ msg: '성공입니다.', type: 'suc' }))
			},
			onError: (error) => {
				dispatch(modalActions.addAlert({ msg: '이메일 및 비밀번호를 확인해주세요.', type: 'danger' }))
			},
		}),
		queryClient
	)
}

export const useGetCandles = () => {
	return useQuery(queryOptions.getCandles())
}

export const useGetBid = () => {
	return useQuery(queryOptions.getBid())
}
