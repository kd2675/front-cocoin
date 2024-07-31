'use client'

import Lank from '@component/module/coin/home/Lank'
import Project from '@component/module/coin/home/Project'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { menuActions } from '@redux/reducers/menu'

type PropsType = {}

const Index = (props: PropsType) => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(menuActions.setMenuNum(1))
	}, [])
	return (
		<>
			<div className='mt-12 rounded-lg bg-gray-50/50'>
				<Lank></Lank>
				<Project></Project>
			</div>
		</>
	)
}

export default Index
