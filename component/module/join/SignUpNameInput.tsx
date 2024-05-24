import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import BasicInput from '@component/common/input/BasicInput'
import { SignUpRegisterSchemaType } from '@schema/signUp'

type PropsType = {
	register: UseFormRegisterReturn<keyof SignUpRegisterSchemaType>
}

const SignUpNameInput = (props: PropsType) => {
	return (
		<>
			<div className="col-span-2 sm:col-span-2">
				<BasicInput id={'userName'} type={'text'} labelName={'이름'} autoComplete={'off'} register={props.register}></BasicInput>
			</div>
		</>
	)
}

export default SignUpNameInput
