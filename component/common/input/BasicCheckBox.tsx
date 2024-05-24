import React, { useEffect, useState } from 'react'
import { useFormContext, UseFormRegisterReturn } from 'react-hook-form'
import BasicInputErrorP from '@component/common/input/BasicInputErrorP'

type PropsType = {
	id: number
	register: UseFormRegisterReturn<any>
	onChange?: () => void
	labelName?: string
}

const BasicCheckBox = (props: PropsType) => {
	const { formState, clearErrors } = useFormContext()
	let [formStateData, setFormStateData] = useState<'default' | 'focus' | 'error'>('default')

	useEffect(() => {
		if (formState?.errors[props.register.name]) {
			setFormStateData((prevState) => {
				if (prevState === 'focus') {
					return prevState
				} else {
					return 'error'
				}
			})
		}
	}, [formState])

	return (
		<>
			<div className="flex">
				<input
					id={props.id + ''}
					type={'checkbox'}
					value={props.id}
					className="peer h-6 w-6 appearance-none rounded-full bg-gray-400 transition-all duration-200 checked:scale-75 checked:bg-green-300"
					{...props.register}
					onChange={async () => {
						if (formStateData == 'error') {
							await setFormStateData('default')
							clearErrors(props.register.name)
						}
						if (props.onChange) {
							props.onChange()
						}
					}}
					onFocus={async (e) => {
						await setFormStateData('focus')
						clearErrors(props.register.name)
					}}
					onBlur={async (e) => {
						await setFormStateData('default')
						await props.register.onBlur(e)
					}}
				/>
				{props.labelName && (
					<label
						htmlFor={props.id + ''}
						className="cursor-pointer select-none rounded-lg border-2 border-gray-200 py-1 px-2 font-bold text-gray-200 transition-colors duration-200 ease-in-out peer-checked:border-gray-200 peer-checked:bg-gray-200 peer-checked:text-gray-900"
					>
						{props.labelName}
					</label>
				)}
			</div>
			{formState?.errors[props.register.name] ? <BasicInputErrorP type={'checkbox'}></BasicInputErrorP> : <p className="invisible text-xs italic text-red-500">test</p>}
		</>
	)
}

export default BasicCheckBox
