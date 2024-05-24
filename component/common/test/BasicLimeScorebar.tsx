import React from 'react'
import { motion } from 'framer-motion'
import { infinityHideShowVariants, progressbarVariants } from '@motion/BasicVariants'

type PropsType = {
	list: string[]
	rating: number
}

const BasicLimeScorebar = (props: PropsType) => {
	return (
		<>
			<motion.div variants={progressbarVariants} className="w-full px-4 py-2 bg-white rounded-t-xl border-2 border-lime-300">
				<div className="flex px-4 gap-2 items-center justify-center">
					<span className={'text-sm text-lime-500 font-fantasy'}>LimeScore : </span>
					{props.list.map((v, i) => {
						return props.rating > i ? (
							<motion.span key={i} variants={infinityHideShowVariants} custom={i} className={'w-4 h-4 border rounded-xl ' + v}></motion.span>
						) : (
							<span key={i} className="w-4 h-4 border border-lime-200 rounded-xl bg-white"></span>
						)
					})}
				</div>
			</motion.div>
		</>
	)
}

export default BasicLimeScorebar
