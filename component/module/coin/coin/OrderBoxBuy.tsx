'use client'

import { FormProvider, SubmitErrorHandler, SubmitHandler, UseFormReturn } from 'react-hook-form'
import { OrderRegisterSchemaType } from '@schema/cocoin'
import { useDispatch, useSelector } from 'react-redux'
import { useOrder } from '@api/service/cocoin/useCocoinService'
import { modalActions } from '@redux/reducers/modal'
import { ChangeEvent, useEffect, useState } from 'react'
import { RootState } from '@redux/store'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useUserInfo } from '@api/service/auth/useAuthService'

type PropsType = {
	methods: UseFormReturn<OrderRegisterSchemaType>
	orderPrice: number
	setOrderPrice: (v: number) => void
}

const OrderBoxBuy = (props: PropsType) => {
	const dispatch = useDispatch()
	const useOrderMutate = useOrder()

	const userInfo = useUserInfo()

	const coin = userInfo.data?.data.walletDTO.point ?? 0

	const tex = 1000000

	const methods = props.methods
	const submitHandler: SubmitHandler<OrderRegisterSchemaType> = async (data) => {
		console.log('submitData : ', data)
		dispatch(
			modalActions.addConfirm({
				type: 'warn',
				msg: `유형 : ${
					marginSlct == 'l' ? '롱' : '숏'
				}\n마진 : ${margin}x\n주문금액 : ${price}\n개수 : ${cnt}\n지불금액 : ${fullPrice}`,
				title: '주문 내용',
				btn2Text: '주문',
				btn2Func: () => {
					useOrderMutate.mutate(data)
				},
			})
		)
		// useOrderMutate.mutate(data)
	}
	const submitErrorHandler: SubmitErrorHandler<OrderRegisterSchemaType> = (data) => {
		let value = Object.values(data)[0]
		console.log('submitErrorData : ', data)

		dispatch(modalActions.addAlert({ msg: value.message, type: 'danger' }))
	}

	const [marginSlct, setMarginSlct] = useState<string>('l')
	const [margin, setMargin] = useState<number>(1)
	// const [orderPrice, setOrderPrice] = useState<number>(80102000)
	const [orderPer, setOrderPer] = useState<number>(50)
	const [cnt, setCnt] = useState<number>(Math.round((coin / props.orderPrice / 2) * 1000) / 1000)
	const [price, setPrice] = useState<number>(Math.round(props.orderPrice * cnt))
	const [fullPrice, setFullPrice] = useState<number>(Math.round(price + tex))

	const marginOnClick = (value: string) => {
		setMarginSlct(value)
		// methods.setValue('marginSlct', value)
	}

	const orderLevOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = Number(e.target.value)
		setMargin(value)
		// methods.setValue('margin', value)
	}

	const orderPerChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = Number(e.target.value)
		setOrderPer(value)
	}

	const cntChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = Number(e.target.value)
		setCnt(value)
		// methods.setValue('cnt', value)
	}

	const priceChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = rmComma(e.target.value)
		if (isNaN(Number(value))) {
		} else {
			props.setOrderPrice(Number(value))
			// methods.setValue('price', price)
		}
	}

	const marginClick = (margin: number) => {
		setMargin(margin)
		// methods.setValue('margin', margin)
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
		methods.setValue('orderSlct', 'b')
		methods.setValue('coinSlct', 'BTC')
		methods.setValue('marginSlct', marginSlct)
		methods.setValue('margin', margin)
		methods.setValue('cnt', cnt)
		methods.setValue('price', props.orderPrice)
	}, [coin, marginSlct, margin, cnt, props.orderPrice])

	useEffect(() => {
		const cnt = Math.round((coin / props.orderPrice) * (orderPer / 100) * 1000) / 1000
		setCnt(cnt)
		// methods.setValue('cnt', cnt)
	}, [coin, props.orderPrice])

	// useEffect(() => {
	// 	setOrderPer(Math.round((Number(price) / (coin - tex)) * 100))
	// }, [orderCnt])

	useEffect(() => {
		const current = Math.round((coin - tex) * (orderPer / 100))
		numberCheck(current)
		const cnt = Math.round((coin / props.orderPrice) * (orderPer / 100) * 1000) / 1000
		setCnt(cnt)
		// methods.setValue('cnt', cnt)
	}, [coin, orderPer])

	const numberCheck = (v: any) => {
		let price = v || 0
		if (!isFinite(price)) return
		price = price.toString()

		if (price !== '0' && !price.includes('.')) {
			price = price.replace(/^0+/, '')
		}

		if (price > coin - tex) {
			price = coin - tex
		}

		setPrice(price)
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
			<FormProvider {...methods}>
				<div className='flex items-center justify-between'>
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
				<div className={'mt-4 flex items-stretch'}>
					<button
						type={'button'}
						className={
							(marginSlct === 'l' ? 'bg-blue-600 ' : 'bg-blue-100 ') +
							'w-full rounded-md py-1.5 font-medium text-blue-50 hover:bg-blue-600'
						}
						onClick={(e) => {
							marginOnClick('l')
						}}
					>
						long
					</button>
					<button
						type={'button'}
						className={
							(marginSlct === 's' ? 'bg-red-600 ' : 'bg-red-100 ') +
							'w-full rounded-md py-1.5 font-medium text-red-50 hover:bg-red-600'
						}
						onClick={() => {
							marginOnClick('s')
						}}
					>
						short
					</button>
				</div>
				<div className='mt-8 flex flex-col'>
					<div className={'mt-0'}>
						<div className='font-semibold'>배율</div>
					</div>
					<div className='mt-6 w-full px-6'>
						<div className='relative h-2 w-full rounded-full bg-gray-300'>
							<input
								type={'range'}
								value={margin}
								onChange={orderLevOnChange}
								className={
									(marginSlct === 'l' ? 'accent-blue-600 ' : 'accent-red-600 ') +
									'absolute left-0 top-0 h-2 w-full rounded-full'
								}
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
							className='mt-[14px] cursor-pointer truncate rounded-[4px] border border-[#E7EAEE] p-3 text-[#191D23] hover:border-green-700'
							onClick={() => {
								marginClick(1)
							}}
						>
							1x
						</div>
						<div
							className='mt-[14px] cursor-pointer truncate rounded-[4px] border border-[#E7EAEE] p-3 text-[#191D23] hover:border-green-700'
							onClick={() => {
								marginClick(25)
							}}
						>
							25x
						</div>
						<div
							className='mt-[14px] cursor-pointer truncate rounded-[4px] border border-[#E7EAEE] p-3 text-[#191D23] hover:border-green-700'
							onClick={() => {
								marginClick(50)
							}}
						>
							50x
						</div>
						<div
							className='mt-[14px] cursor-pointer truncate rounded-[4px] border border-[#E7EAEE] p-3 text-[#191D23] hover:border-green-700'
							onClick={() => {
								marginClick(125)
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
								onChange={priceChange}
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
								value={cnt}
								onChange={cntChange}
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
								className={
									(marginSlct === 'l' ? 'accent-blue-600 ' : 'accent-red-600 ') +
									'absolute left-0 top-0 h-2 w-full rounded-full'
								}
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
								className='mt-[14px] cursor-pointer truncate rounded-[4px] border border-[#E7EAEE] p-3 text-[#191D23] hover:border-green-700'
								onClick={() => {
									orderAddClick(1)
								}}
							>
								+1%
							</div>
							<div
								className='mt-[14px] cursor-pointer truncate rounded-[4px] border border-[#E7EAEE] p-3 text-[#191D23] hover:border-green-700'
								onClick={() => {
									orderAddClick(5)
								}}
							>
								+5%
							</div>
							<div
								className='mt-[14px] cursor-pointer truncate rounded-[4px] border border-[#E7EAEE] p-3 text-[#191D23] hover:border-green-700'
								onClick={() => {
									orderAddClick(10)
								}}
							>
								+10%
							</div>
							<div
								className='mt-[14px] cursor-pointer truncate rounded-[4px] border border-[#E7EAEE] p-3 text-[#191D23] hover:border-green-700'
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
						<p className='text-gray-700'>{margin}x</p>
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
						className={
							(marginSlct === 'l' ? 'bg-blue-500 ' : 'bg-red-600 ') +
							'mt-6 w-full rounded-md py-1.5 font-medium text-blue-50 hover:bg-blue-600'
						}
						// onClick={() => {
						// 	dispatch(modalActions.addAlert({ msg: '가격 : ' + fullPrice }))
						// }}
						onClick={() => {
							methods.handleSubmit(submitHandler, submitErrorHandler)()
						}}
					>
						Check out
					</button>
				</div>
			</FormProvider>
		</>
	)
}

export default OrderBoxBuy
