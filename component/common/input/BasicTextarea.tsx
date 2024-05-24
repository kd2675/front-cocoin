import React, { useEffect, useState } from 'react'
import { useFormContext, UseFormRegisterReturn } from 'react-hook-form'
import { SignUpRegisterSchemaType } from '@schema/signUp'
import BasicInputErrorP from '@component/common/input/BasicInputErrorP'

type PropsType = {
	id: string
	type: string
	rows: number
	placeholder?: string
	autoComplete: string
	register: UseFormRegisterReturn<any>
	onChange?: () => void
	labelName?: string
}

const BasicTextarea = (props: PropsType) => {
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
			{props.labelName && (
				<label htmlFor={props.id} className="mb-2 block text-sm font-bold text-gray-700">
					{props.labelName}
				</label>
			)}

			<textarea
				id={props.id}
				placeholder={props.placeholder ? props.placeholder : ''}
				autoComplete={props.autoComplete}
				rows={props.rows}
				className="sm:w20 block w-full border-0 px-0 text-sm text-gray-800 focus:ring-0"
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
			{formState?.errors[props.register.name] ? <BasicInputErrorP type={props.type}></BasicInputErrorP> : <p className="invisible text-xs italic text-red-500">test</p>}
		</>
	)
}

export default BasicTextarea
