'use client'

import SlotMachine from '@component/common/test/SlotMachine'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { modalActions } from '@redux/reducers/modal'
import useDidMountEffect from '@hooks/useDidMountEffect'

type PropsType = {}

const Index = (props: PropsType) => {
	const dispatch = useDispatch()

	const [slotStop, setSlotStop] = useState<boolean>(false)
	const [slotCnt, setSlotCnt] = useState<number>(0)
	const [running, setRunning] = useState<boolean>(false)

	const [currentIndex1, setCurrentIndex1] = useState(0)
	const [currentIndex2, setCurrentIndex2] = useState(0)
	const [currentIndex3, setCurrentIndex3] = useState(0)

	const slotStopOnClick = () => {
		setRunning(true)
		if (!running) {
			if (!slotStop) {
				setSlotStop(true)
			} else {
				setSlotCnt((v) => v + 1)
			}
			setTimeout(() => {
				setRunning(false)
			}, 3000)
		}
	}

	const complete = async () => {
		dispatch(modalActions.addAlert({ msg: `test ${currentIndex1} ${currentIndex2} ${currentIndex3}` }))
	}

	useDidMountEffect(() => {
		if (!running) {
			complete()
		}
	}, [running])

	return (
		<>
			<div className='mb-6 flex flex-col items-center gap-4'>
				<div className='flex gap-4'>
					<SlotMachine
						state={slotStop}
						cnt={slotCnt}
						rate={1000}
						currentIndex={currentIndex1}
						setCurrentIndex={setCurrentIndex1}
					></SlotMachine>
					<SlotMachine
						state={slotStop}
						cnt={slotCnt}
						rate={1300}
						currentIndex={currentIndex2}
						setCurrentIndex={setCurrentIndex2}
					></SlotMachine>
					<SlotMachine
						state={slotStop}
						cnt={slotCnt}
						rate={1700}
						currentIndex={currentIndex3}
						setCurrentIndex={setCurrentIndex3}
					></SlotMachine>

					<button
						type={'button'}
						disabled={running}
						className={
							(running ? 'bg-red-700 ' : ' hover:border-green-600 hover:bg-green-500 hover:text-white ') +
							'col-span-1 w-full border border-white bg-blue-100 py-1 text-center text-xs font-bold text-gray-800 shadow-md'
						}
						onClick={slotStopOnClick}
					>
						돌리기
					</button>
				</div>
			</div>
			<div className='flex min-h-screen items-center justify-center'>
				<div className='mx-auto max-w-[720px]'>
					<div className='border-slate-300 mx-auto mb-4 block max-w-[360px] border-b pb-2'>
						<a
							target='_blank'
							href='https://www.material-tailwind.com/docs/html/card'
							className='text-slate-700 block w-full px-4 py-2 text-center transition-all'
						>
							More components on <b>Material Tailwind</b>.
						</a>
					</div>

					<div className='relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 bg-clip-border p-8 text-white shadow-md shadow-gray-900/20'>
						<div className='relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none'>
							<p className='block font-sans text-sm font-normal uppercase leading-normal text-white antialiased'>
								standard
							</p>
							<h1 className='mt-6 flex justify-center gap-1 font-sans text-7xl font-normal tracking-normal text-white antialiased'>
								<span className='mt-2 text-4xl'>￦</span>
								<span className={'self-end text-4xl'}>10,000</span>
								<span className='self-end text-2xl'>/once</span>
							</h1>
						</div>
						<div className='p-0'>
							<ul className='flex flex-col gap-4'>
								<li className='flex items-center gap-4'>
									<span className='rounded-full border border-white/20 bg-white/20 p-1'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth='2'
											stroke='currentColor'
											className='h-3 w-3'
										>
											<path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5'></path>
										</svg>
									</span>
									<p className='block font-sans text-base font-normal leading-relaxed text-inherit antialiased'>
										5 team members
									</p>
								</li>
								<li className='flex items-center gap-4'>
									<span className='rounded-full border border-white/20 bg-white/20 p-1'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth='2'
											stroke='currentColor'
											className='h-3 w-3'
										>
											<path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5'></path>
										</svg>
									</span>
									<p className='block font-sans text-base font-normal leading-relaxed text-inherit antialiased'>
										200+ components
									</p>
								</li>
								<li className='flex items-center gap-4'>
									<span className='rounded-full border border-white/20 bg-white/20 p-1'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth='2'
											stroke='currentColor'
											className='h-3 w-3'
										>
											<path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5'></path>
										</svg>
									</span>
									<p className='block font-sans text-base font-normal leading-relaxed text-inherit antialiased'>
										40+ built-in pages
									</p>
								</li>
								<li className='flex items-center gap-4'>
									<span className='rounded-full border border-white/20 bg-white/20 p-1'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth='2'
											stroke='currentColor'
											className='h-3 w-3'
										>
											<path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5'></path>
										</svg>
									</span>
									<p className='block font-sans text-base font-normal leading-relaxed text-inherit antialiased'>
										1 year free updates
									</p>
								</li>
								<li className='flex items-center gap-4'>
									<span className='rounded-full border border-white/20 bg-white/20 p-1'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth='2'
											stroke='currentColor'
											className='h-3 w-3'
										>
											<path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5'></path>
										</svg>
									</span>
									<p className='block font-sans text-base font-normal leading-relaxed text-inherit antialiased'>
										Lifetime technical support
									</p>
								</li>
							</ul>
						</div>
						<div className='mt-12 p-0'>
							<button
								className='block w-full select-none rounded-lg bg-white px-7 py-3.5 text-center align-middle font-sans text-sm font-bold uppercase text-blue-gray-900 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
								type='button'
							>
								Buy Now
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Index
