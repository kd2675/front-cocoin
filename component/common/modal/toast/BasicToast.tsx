import React, { SetStateAction, useEffect, useRef, useState } from 'react'
import ModalBg from '@component/common/modal/modalBg'
import { Progress } from '@material-tailwind/react'
import { ToastType } from '@redux/reducers/modal'

type PropsType = {
	closeFunc: () => void
} & ToastType

const BasicToast = (props: PropsType) => {
	const [state, setState] = useState<number>(0)
	const fire = useRef<SetStateAction<any>>()

	useEffect(() => {
		if (props.openCallback) {
			props.openCallback()
		}
		return () => {
			if (props.closeCallback) {
				props.closeCallback()
			}
		}
	}, [])

	const btnFuc = () => {
		const btnFuc = props.btnFunc
			? () => {
					props.btnFunc ? props.btnFunc() : () => {}
					props.closeFunc()
			  }
			: props.closeFunc
		btnFuc()
	}

	const timeOut = () => {
		fire.current = setInterval(() => {
			setState((v) => {
				if (v < 100) {
					return v + 0.1
				} else {
					return v
				}
			})
		}, 5)
	}

	useEffect(() => {
		timeOut()

		return () => {
			clearTimeout(fire.current)
		}
	}, [])

	useEffect(() => {
		if (state > 99) {
			props.closeFunc()
		}
	}, [state])

	return (
		<>
			<ModalBg></ModalBg>
			<div data-modal-main='example2' className='relative ml-auto overflow-y-auto '>
				<div className='w-full'>
					<div
						id='toast-default'
						className='flex w-full items-center rounded-lg bg-white p-4 text-black shadow dark:bg-gray-800 dark:text-gray-400'
						role='alert'
					>
						<div className='inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-500 dark:bg-blue-800 dark:text-blue-200'>
							<svg className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
								<path
									fillRule='evenodd'
									d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z'
									clipRule='evenodd'
								></path>
							</svg>
						</div>
						<div className='w-full text-center font-normal'>{props.msg}</div>
						<button
							type='button'
							className='-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white'
							data-collapse-toggle='toast-default'
							aria-label='Close'
							onClick={btnFuc}
						>
							<span className='sr-only'>Close</span>
							<svg className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
								<path
									fillRule='evenodd'
									d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
									clipRule='evenodd'
								></path>
							</svg>
						</button>
					</div>
				</div>

				<Progress
					value={state}
					variant="filled"
					size="md"
					placeholder={undefined}
				/>
			</div>
		</>
	)
}

export default BasicToast
