export const basicAnim = {
	initial: {
		opacity: 0,
		transition: {
			type: 'spring',
			duration: 1,
		},
	},
	animate: {
		opacity: 1,
		transition: {
			type: 'spring',
			duration: 1.5,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			type: 'spring',
			duration: 3,
		},
	},
}

export const basicLeftSidebarAnim = {
	initial: {
		x: '-100%',
		opacity: 0.5,
		transition: {
			type: 'spring',
			damping: 20,
		},
	},
	animate: {
		x: '0%',
		opacity: 1,
		transition: {
			type: 'spring',
			damping: 20,
		},
	},
	exit: {
		x: '-100%',
		opacity: 0.5,
		transition: {
			type: 'spring',
			damping: 20,
		},
	},
}

export const basicRightSidebarAnim = {
	initial: {
		x: '100%',
		opacity: 0.5,
		transition: {
			type: 'spring',
			damping: 20,
		},
	},
	animate: {
		x: '0%',
		opacity: 1,
		transition: {
			type: 'spring',
			damping: 20,
		},
	},
	exit: {
		x: '100%',
		opacity: 0.5,
		transition: {
			type: 'spring',
			damping: 20,
		},
	},
}