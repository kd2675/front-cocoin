'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import _ from 'lodash'

type PropsType = {
	state: boolean
	cnt: number
	rate: number
	currentIndex: number
	setCurrentIndex: (num:any)=>void
}

const SlotMachine = (props: PropsType) => {
	// useRef를 사용하여 motion.div의 DOM 요소에 접근하는 참조 생성
	const slotItemRef = useRef(null)

	// 슬롯에 표시될 문자열을 담은 배열
	let arr = ['사과', '포도', '딸기', '수박', '멜론', '망고']

	const [slotVariants, setSlotVariants] = useState<{initial: {}, animate: {}, transition: {}}>({
		initial: { opacity: 1, y: -50 }, // 텍스트는 밑에서 시작해서
		animate: { opacity: 0.9, y: 50 }, // 위로 올라온다
		transition: { duration: 0.3 }, // initial 상태에서 animate 상태까지 도달하는 데에 걸리는 시간은 duration
	});

	// arr = _.shuffle(arr);

	// 현재 보여지고 있는 슬롯의 인덱스를 나타내는 상태 변수
	// const [currentIndex, setCurrentIndex] = useState(0)

	// 애니메이션이 완료되면  호출되는 함수
	const onAnimationComplete = () => {
		// 다음 슬롯으로 이동하기 위해 currentIndex 업데이트
		props.setCurrentIndex((prev: number) => Number((prev + 1) % arr.length))
	}

	// Framer motion 애니메이션에 필요한 속성값 객체
	// const [slotVariants, setSlotVariants] = useState<{ initial: {}; animate: {}; transition: {} }>({
	// 	initial: { opacity: 1 }, // 텍스트는 밑에서 시작해서
	// 	animate: { opacity: 0.9 }, // 위로 올라온다
	// 	transition: { duration: 0.01 }, // initial 상태에서 animate 상태까지 도달하는 데에 걸리는 시간은 duration
	// })

	// 슬롯 멈추기 함수
	const slotStop = () => {
		changeSlotSpeed(0.1, 1) // 속도 줄이기 1
		// changeSlotSpeed(100, props.rate - 300) // 속도 줄이기 2
		// changeSlotSpeed(0.5, props.rate - 300) // 속도 줄이기 3
		setTimeout(() => {
			const index = Math.floor(Math.random() * arr.length) + 0
			setSlotVariants((prev) => ({
				initial: {},
				animate: {},
				transition: {},
			}))
			props.setCurrentIndex(index)
		}, props.rate)
	}

	// 슬롯 속도 변화 함수
	const changeSlotSpeed = (speed: number, delay: number) => {
		setTimeout(() => {
			setSlotVariants((prev) => ({
				...prev,
				transition: { duration: speed },
			}))
		}, delay)
	}

	useEffect(() => {
		if (props.state) {
			slotStop()
		}
	}, [props.state])

	useEffect(() => {
		if (props.state) {
			setSlotVariants({
				initial: { opacity: 1, y: -50 }, // 텍스트는 밑에서 시작해서
				animate: { opacity: 0.9, y: 50 }, // 위로 올라온다
				transition: { duration: 0.3 }, // initial 상태에서 animate 상태까지 도달하는 데에 걸리는 시간은 duration
			})
			setTimeout(() => {
				slotStop()
			}, 800)
		}
	}, [props.cnt])

	return (
		<>
			<div className='flex h-32 flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md'>
				{/* 슬롯 컨테이너 */}
				{/* 애니메이션의 등장,퇴장 감지 / onAnimationComplete을 사용하려면 필요함 */}
				<AnimatePresence>
					{/* 애니메이션 박스 */}
					<motion.div
						key={props.currentIndex} // 현재 슬롯의 인덱스를 키로 사용하여 애니메이션 처리
						ref={slotItemRef}
						// variants={slotVariants}
						initial={slotVariants.initial}
						animate={slotVariants.animate}
						transition={slotVariants.transition}
						// 애니메이션이 완료될 때 호출되는 함수 지정
						onAnimationComplete={onAnimationComplete}
					>
						{/* 슬롯 아이템 보이는 곳 */}
						<div>{arr[props.currentIndex]}</div>
					</motion.div>
				</AnimatePresence>
			</div>
		</>
	)
}

export default SlotMachine
