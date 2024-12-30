import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import mutationOptions from '@api/service/auth/act/authOptionMutation'
import { useDispatch } from 'react-redux'
import { modalActions } from '@redux/reducers/modal'
import { setAuthorizationToken } from '@/api'
import { authActions } from '@redux/reducers/auth'
import queryOptions from '@api/service/auth/act/authOptionQuery'
import { useRouter } from 'next/navigation'
import { menuActions } from '@redux/reducers/menu'
import { goLoginRoute } from '@/link'
import { setTimeout } from 'next/dist/compiled/@edge-runtime/primitives'

export const useLogin = () => {
	const dispatch = useDispatch()
	const router = useRouter()
	const queryClient = useQueryClient()

	return useMutation(
		mutationOptions.login({
			onSuccess: async (data) => {
				await setAuthorizationToken(data.data.accessToken)
				// axios.defaults.headers.common['Authorization'] = `Bearer ${data.data.accessToken}`
				// axiosMember.defaults.headers.common['Authorization'] = `Bearer ${data.data.accessToken}`
				dispatch(menuActions.setIsMenu(false))
				dispatch(authActions.setToken(data.data))
				dispatch(
					modalActions.addAlert({
						msg: '로그인 되었습니다.',
						type: 'suc',
						closeCallback: () => {
							// router.back()
						},
					})
				)
			},
			onError: (error) => {
				dispatch(modalActions.addAlert({ msg: '이메일 및 비밀번호를 확인해주세요.', type: 'danger' }))
			},
		}),
		queryClient
	)
}

export const useLogout = () => {
	const dispatch = useDispatch()
	const router = useRouter()
	const queryClient = useQueryClient()

	return useMutation(
		mutationOptions.logout({
			onSuccess: async () => {
				await setAuthorizationToken('')
				dispatch(menuActions.setIsMenu(false))
				dispatch(authActions.delToken())
				dispatch(
					modalActions.addAlert({
						msg: '로그아웃 되었습니다.',
						type: 'suc',
						closeCallback: () => {
							router.refresh()
						},
					})
				)
			},
			onError: (error) => {
				dispatch(menuActions.setIsMenu(false))
				dispatch(authActions.delToken())
				dispatch(
					modalActions.addAlert({
						msg: '오류입니다.',
						type: 'danger',
						closeCallback: () => {
							router.refresh()
						},
					})
				)
			},
		}),
		queryClient
	)
}

export const useUserInfo = () => {
	const dispatch = useDispatch()
	const router = useRouter()
	const queryClient = useQueryClient()

	const loginRoute = goLoginRoute()

	const query = useQuery(queryOptions.getUserInfo(), queryClient)

	if (query.data?.code === 20310) {
		dispatch(
			modalActions.addAlert({
				type: 'danger',
				msg: '로그인이 필요합니다.',
				closeCallback: async () => {
					queryClient.removeQueries({queryKey: ['userInfo']})
					loginRoute({ type: 'push' })
				},
			})
		)
	}

	return query
}
