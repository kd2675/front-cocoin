import React from 'react'

type PropsType = {
	type: string
}

const BasicInputErrorP = (props: PropsType) => {
	return (
		<>
			<p className="text-red-500 text-xs italic">Please check your {props.type}.</p>
		</>
	)
}

export default BasicInputErrorP
