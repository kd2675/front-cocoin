import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { menuActions, MenuTabType } from '@redux/reducers/menu'
import { goInquiryRoute, goIntroShlRoute, goNoticeRoute, goProductRoute } from '@link/index'
import {RootState} from "@redux/store";

const MenuTab = (props: MenuTabType) => {
	const dispatch = useDispatch()
	const subMenuNum = useSelector((state: RootState) => state.menu.subMenuNum)

	const introRoute = goIntroShlRoute()
	const productRoute = goProductRoute()
	const noticeRoute = goNoticeRoute()
	const inquiryRoute = goInquiryRoute()
	const setTabMouseEnter = () => {
		dispatch(menuActions.setIsMenu(true))
		dispatch(menuActions.setMenuNum(props.id))
	}

	const onClick = (id: number) => {
		switch (id) {
			case 100:
				introRoute({ type: 'push' })
				break
			case 200:
				productRoute({ type: 'push' })
				break
			case 300:
				noticeRoute({ type: 'push' })
				break
			case 400:
				inquiryRoute({ type: 'push' })
				break
		}
	}
	return (
		<>
			<div
				onMouseEnter={setTabMouseEnter}
				onClick={() => {
					onClick(props.id)
				}}
				className={(subMenuNum.toString().substring(0,1) == props.id.toString().substring(0,1) ? 'border-indigo-500 border-opacity-100 ' : 'border-green-500 ') +'z-20 cursor-pointer border-b-2 border-green-500 border-opacity-0 p-4 text-white text-center text-2xl duration-200 hover:border-opacity-100 hover:text-green-500'}
			>
				<span>{props.title}</span>
			</div>
		</>
	)
}

export default MenuTab
