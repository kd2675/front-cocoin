'use client'

import { useHealth } from '@api/service/health/biz/useHealthService'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { commonActions } from '@redux/reducers/common'
import { useEffect } from 'react'

export default function Health() {
	const router = useRouter()
	const dispatch = useDispatch()

	const health = useHealth()

	useEffect(() => {
		dispatch(commonActions.setHealth(health ? 1 : 0))
	}, [])

	const goBack = () => {
		router.back()
	}
	return <>{health.data && <h2 onClick={goBack}>{health.data.data}</h2>}</>
}
