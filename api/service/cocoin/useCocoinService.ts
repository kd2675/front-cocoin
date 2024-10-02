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
				dispatch(modalActions.addAlert({ msg: '주문을 다시 확인해주세요.' + error.message, type: 'danger' }))
			},
		}),
		queryClient
	)
}

export const useGetTicker = () => {
	return useQuery(queryOptions.getTicker())
}

export const useGetCandles = () => {
	return useQuery(queryOptions.getCandles())
}

export const useGetBid = () => {
	return useQuery(queryOptions.getBid())
}
