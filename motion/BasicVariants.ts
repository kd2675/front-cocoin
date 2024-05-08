export const UpVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			y: {
				type: 'spring',
				damping: 10,
				stiffness: 50,
				duration: 0.1,
			},
			staggerChildren: 1,
			// staggerChildren이 없다면
			//모든 child가 parent가 나타나고0.5s 후 동시에 나타난다.
		},
	},
}

export const DownVariants = {
	hidden: { opacity: 0, y: -15 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			y: {
				type: 'spring',
				damping: 10,
				stiffness: 50,
				duration: 0.1,
			},
			staggerChildren: 1,
			// staggerChildren이 없다면
			//모든 child가 parent가 나타나고0.5s 후 동시에 나타난다.
		},
	},
}

export const progressbarVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			y: {
				type: 'spring',
				damping: 10,
				stiffness: 50,
				duration: 0.1,
			},
		},
	},
}

export const infinityHideShowVariants: {} = {
	hidden: {
		opacity: 0.2,
	},
	visible: (i: number) => ({
		opacity: 1,
		transition: {
			delay: i * 0.1,
			duration: 1,
			repeat: Infinity,
			repeatDelay: 0.5,
			repeatType: 'reverse',
		},
	}),
}

export const rightSidebarVariants = {
	hidden: {
		opacity: 0,
		x: 100,
		transition: {
			type: 'spring',
			duration: 0.2,
		},
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'spring',
			duration: 0.4,
		},
	},
}
