'use client'

import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { modalActions } from '@redux/reducers/modal'

type PropsType = {
	orderPrice: number
	setOrderPrice: (v:number)=>void
}

const OrderBoxOrder = (props: PropsType) => {
	const dispatch = useDispatch()

	const coin = 132422323

	const tex = 1000000

	const [orderLev, setOrderLev] = useState<number>(1)
	// const [orderPrice, setOrderPrice] = useState<number>(80102000)
	const [orderCnt, setOrderCnt] = useState<number>(Math.round((coin / props.orderPrice / 2) * 1000) / 1000)
	const [orderPer, setOrderPer] = useState<number>(50)
	const [price, setPrice] = useState<number>(Math.round(props.orderPrice * orderCnt))
	const [fullPrice, setFullPrice] = useState<number>(Math.round(price + tex))

	const orderLevChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = Number(e.target.value)
		setOrderLev(value)
	}

	const orderPerChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = Number(e.target.value)
		setOrderPer(value)
	}

	const orderAddClick = (addPrice: number) => {
		// const p = Math.round(((Number(price.current) + addPrice) / coin) * 100)
		// if (p > 100) {
		// 	setOrderPer(100)
		// } else {
		// 	setOrderPer(p)
		// }
		setOrderPer((p: number) => {
			if (p + addPrice > 100) {
				return 100
			} else {
				return p + addPrice
			}
		})
	}

	useEffect(() => {
		setOrderCnt(Math.round((coin / props.orderPrice) * (orderPer / 100) * 1000) / 1000)
	}, [props.orderPrice])

	// useEffect(() => {
	// 	setOrderPer(Math.round((Number(price) / (coin - tex)) * 100))
	// }, [orderCnt])

	useEffect(() => {
		const current = Math.round((coin - tex) * (orderPer / 100))
		numberCheck(current)
		setOrderCnt(Math.round((coin / props.orderPrice) * (orderPer / 100) * 1000) / 1000)
	}, [orderPer])

	const numberCheck = (v: any) => {
		let num = v || 0
		if (!isFinite(num)) return
		num = num.toString()

		if (num !== '0' && !num.includes('.')) {
			num = num.replace(/^0+/, '')
		}

		if (num > coin - tex) {
			num = coin - tex
		}

		setPrice(num)
	}

	useEffect(() => {
		setFullPrice(Number(price) + tex)
	}, [price, tex])

	const addComma = (price: number) => {
		let returnString = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
		return returnString
	}

	const rmComma = (price: string) => {
		let returnString = price?.toString().replaceAll(',', '')
		return returnString
	}

	return (
		<>
			<div className='col-span-2 rounded-lg bg-white p-4 shadow sm:p-6 xl:p-8'>
				<div className='mb-4 flex items-center justify-between'>
					<div>
						<h3 className='mb-2 text-xl font-bold text-gray-900'>주문창</h3>
						<span className='text-base font-normal text-gray-500'>This is a list of latest transactions</span>
					</div>
					<div className='flex-shrink-0'>
						{/*<a href='#' className='rounded-lg p-2 text-sm font-medium text-cyan-600 hover:bg-gray-100'>*/}
						{/*	View all*/}
						{/*</a>*/}
					</div>
				</div>
				<div className='mt-8 flex flex-col'>
					<div className={'mt-0'}>
						<div className='font-semibold'>배율</div>
					</div>
					<div className='mt-6 w-full px-6'>
						<div className='relative h-2 w-full rounded-full bg-gray-300'>
							<input
								type={'range'}
								value={orderLev}
								onChange={orderLevChange}
								className='absolute left-0 top-0 h-2 w-full rounded-full bg-teal-500'
								min={1}
								max={300}
								style={{ cursor: 'pointer' }}
							/>
							{/*<span*/}
							{/*	className='absolute top-0 z-10 -ml-2 -mt-1 h-4 w-4 cursor-pointer rounded-full bg-white shadow'*/}
							{/*	style={{ left: '50%' }}*/}
							{/*></span>*/}
							{/*<span className='absolute left-0 top-0 h-2 rounded-full bg-teal-500' style={{ width: '50%' }}></span>*/}
						</div>
						<div className='mt-2 flex justify-between text-xs text-gray-600'>
							<span className='w-8 text-left'>1x</span>
							<span className='w-8 text-center'>75x</span>
							<span className='w-8 text-center'>150x</span>
							<span className='w-8 text-center'>225x</span>
							<span className='w-8 text-right'>300x</span>
						</div>
					</div>
					<div className='flex justify-between'>
						<div
							className='mt-[14px] cursor-pointer truncate rounded-[4px] border border-[#E7EAEE] p-3 text-[#191D23]'
							onClick={() => {
								orderAddClick(1)
							}}
						>
							1x
						</div>
						<div
							className='mt-[14px] cursor-pointer truncate rounded-[4px] border border-[#E7EAEE] p-3 text-[#191D23]'
							onClick={() => {
								orderAddClick(5)
							}}
						>
							25x
						</div>
						<div
							className='mt-[14px] cursor-pointer truncate rounded-[4px] border border-green-700 p-3 text-[#191D23]'
							onClick={() => {
								orderAddClick(10)
							}}
						>
							50x
						</div>
						<div
							className='mt-[14px] cursor-pointer truncate rounded-[4px] border border-[#E7EAEE] p-3 text-[#191D23]'
							onClick={() => {
								orderAddClick(50)
							}}
						>
							125x
						</div>
					</div>
					<div className='mt-4'>
						<div className='font-semibold'>주문가격</div>
						<div>
							<input
								className='mt-1 w-full rounded-[4px] border border-[#A0ABBB] p-2 text-right'
								value={addComma(props.orderPrice)}
								onChange={(e) => {
									const value = rmComma(e.target.value)
									if (isNaN(Number(value))) {
									} else {
										props.setOrderPrice(Number(value))
									}
								}}
								min={0}
								// type='number'
							/>
						</div>
					</div>
					<div className='mt-6'>
						<div className='font-semibold'>주문수량</div>
						<div>
							<input
								className='mt-1 w-full rounded-[4px] border border-[#A0ABBB] p-2 text-right'
								value={orderCnt}
								onChange={(e) => {
									setOrderCnt(Number(e.target.value))
								}}
								min={0}
								readOnly={true}
								style={{ cursor: 'default' }}
								type='number'
							/>
						</div>
					</div>
					<div className='mt-6 w-full px-6'>
						<div className='relative h-2 w-full rounded-full bg-gray-300'>
							<input
								type={'range'}
								value={orderPer}
								onChange={orderPerChange}
								className='absolute left-0 top-0 h-2 w-full rounded-full bg-teal-500'
								min={0}
								max={100}
								style={{ cursor: 'pointer' }}
							/>
							{/*<span*/}
							{/*	className='absolute top-0 z-10 -ml-2 -mt-1 h-4 w-4 cursor-pointer rounded-full bg-white shadow'*/}
							{/*	style={{ left: '50%' }}*/}
							{/*></span>*/}
							{/*<span className='absolute left-0 top-0 h-2 rounded-full bg-teal-500' style={{ width: '50%' }}></span>*/}
						</div>
						<div className='mt-2 flex justify-between text-xs text-gray-600'>
							<span className='w-8 text-left'>0%</span>
							<span className='w-8 text-center'>25%</span>
							<span className='w-8 text-center'>50%</span>
							<span className='w-8 text-center'>75%</span>
							<span className='w-8 text-right'>100%</span>
						</div>
					</div>
					<div className={'mt-1'}>
						<div className='flex justify-between'>
							<div
								className='mt-[14px] cursor-pointer truncate rounded-[4px] border border-[#E7EAEE] p-3 text-[#191D23]'
								onClick={() => {
									orderAddClick(1)
								}}
							>
								+1%
							</div>
							<div
								className='mt-[14px] cursor-pointer truncate rounded-[4px] border border-[#E7EAEE] p-3 text-[#191D23]'
								onClick={() => {
									orderAddClick(5)
								}}
							>
								+5%
							</div>
							<div
								className='mt-[14px] cursor-pointer truncate rounded-[4px] border border-green-700 p-3 text-[#191D23]'
								onClick={() => {
									orderAddClick(10)
								}}
							>
								+10%
							</div>
							<div
								className='mt-[14px] cursor-pointer truncate rounded-[4px] border border-[#E7EAEE] p-3 text-[#191D23]'
								onClick={() => {
									orderAddClick(50)
								}}
							>
								+50%
							</div>
						</div>
					</div>
					<div className='mt-6 flex justify-between'>
						<p className='text-gray-700'>lev</p>
						<p className='text-gray-700'>{orderLev}x</p>
					</div>
					<div className='mt-2 flex justify-between'>
						<p className='text-gray-700'>Per</p>
						<p className='text-gray-700'>{orderPer}%</p>
					</div>
					<div className='mb-2 mt-6 flex justify-between'>
						<p className='text-gray-700'>Wallet</p>
						<p className='text-gray-700'>￦{addComma(coin)}</p>
					</div>
					<div className='mb-2 mt-6 flex justify-between'>
						<p className='text-gray-700'>Price</p>
						<p className='text-gray-700'>￦{addComma(price)}</p>
					</div>
					<div className='flex justify-between'>
						<p className='text-gray-700'>Tex</p>
						<p className='text-gray-700'>￦{addComma(tex)}</p>
					</div>
					<hr className='my-4' />
					<div className='flex justify-between'>
						<p className='text-lg font-bold'>Total</p>
						<div className=''>
							<p className='mb-1 text-lg font-bold'>￦{addComma(fullPrice)}</p>
						</div>
					</div>
					<button
						type={'button'}
						className='mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600'
						onClick={() => {
							dispatch(modalActions.addAlert({ msg: '가격 : ' + fullPrice }))
						}}
					>
						Check out
					</button>
				</div>
			</div>
		</>
	)
}

export default OrderBoxOrder
