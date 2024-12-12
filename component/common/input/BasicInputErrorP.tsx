import React from 'react'

type PropsType = {
	type: string
}

const BasicInputErrorP = (props: PropsType) => {
	return (
		<>
			<p className="text-red-500 text-xs italic pt-1">Please check your {props.type}.</p>
		</>
	)
}

export default BasicInputErrorP
