import React, {useEffect} from 'react'
import Layout from '@component/common/layout'
import NoticeList from '@component/module/notice/NoticeList'
import { querySelNoticeList } from '@query/notice'
import {menuActions} from "@redux/reducers/menu";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";

const Index = () => {
	const router = useRouter();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(menuActions.setSubMenuNum(Number(300)))
		return ()=>{dispatch(menuActions.setSubMenuNum(Number(0)))}
	}, [router])

	return (
		<>
			<Layout>
				<NoticeList/>
			</Layout>
		</>
	)
}

export default Index