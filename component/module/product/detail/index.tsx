import React, {useEffect} from 'react'
import Layout from '@component/common/layout'
import DetailTitle from '@component/module/product/detail/DetailTitle'
import DetailContent from '@component/module/product/detail/DetailContent'
import DetailPrice from '@component/module/product/detail/DetailPrice'
import DetailElement from '@component/module/product/detail/DetailElement'
import {menuActions} from "@redux/reducers/menu";
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";

type PropsType = {
	productTitle: string
	productContent: string
	productImage: string
	element: {
		elementTitle: string
		elementContent: string
	}[]
}

const Index = (props:PropsType) => {
	const router = useRouter();
	const dispatch = useDispatch();

	const id = router.query.id;

	useEffect(() => {
		dispatch(menuActions.setSubMenuNum(Number(id)))
		return ()=>{dispatch(menuActions.setSubMenuNum(Number(0)))}
	}, [router])
	
	return (
		<Layout>
			<DetailTitle></DetailTitle>
			<DetailContent></DetailContent>
			<DetailPrice></DetailPrice>
			<DetailElement></DetailElement>
		</Layout>
	)
}

export default Index
