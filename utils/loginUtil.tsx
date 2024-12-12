'use client'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { useEffect } from 'react'
import { axios } from '@/api'
import { useUserInfo } from '@api/service/auth/biz/useAuthService'
import { authActions } from '@redux/reducers/auth'

type PropsType = {

};

const LoginUtil = (props: PropsType) => {
	const dispatch = useDispatch()
	const accessToken: string = useSelector((state: RootState) => state.auth.accessToken)

	useEffect(() => {
		if (accessToken){
			axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`

			useUserInfo()
		}
	}, [])

	return (
		<>

		</>
	)
}

export default LoginUtil