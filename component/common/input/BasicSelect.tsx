import React, { FC, useEffect, useState } from 'react'
import { useFormContext, UseFormRegisterReturn } from 'react-hook-form'
import { SignUpRegisterSchemaType } from '@schema/signUp'
import BasicInputErrorP from '@component/common/input/BasicInputErrorP'

type PropsType = {
	id: string
	type: string
	placeholder?: string
	autoComplete: string
	register: UseFormRegisterReturn<any>
	onChange?: () => void
	labelName?: string
	children: React.ReactNode
}

const BasicSelect = (props: PropsType) => {
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

			<select
				id={props.id}
				aria-placeholder={props.placeholder ?? ''}
				autoComplete={props.autoComplete}
				className={
					(formStateData == 'error' ? 'border-red-300 ' : 'border-gray-300 ') +
					'focus:shadow-outline mt-1 block w-full appearance-none rounded-md text-gray-700  shadow focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
				}
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
			>
				{props.children}
			</select>
			{formState?.errors[props.register.name] ? <BasicInputErrorP type={props.type}></BasicInputErrorP> : <p className="invisible text-xs italic text-red-500">test</p>}
		</>
	)
}

export default BasicSelect
