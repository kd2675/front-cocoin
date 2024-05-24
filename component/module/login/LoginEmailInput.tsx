import React from 'react'
import BasicInput from '@component/common/input/BasicInput'
import { UseFormRegisterReturn } from 'react-hook-form'
import { SignUpRegisterSchemaType } from '@schema/signUp'
import { LoginRegisterSchemaType } from '@schema/login'

type PropsType = {
	register: UseFormRegisterReturn<keyof LoginRegisterSchemaType>
}

const LoginEmailInput = (props: PropsType) => {
	return (
		<>
			<div className="mb-2">
				<BasicInput id={'userEmail'} type={'email'} autoComplete={'email'} register={props.register} labelName={'이메일'} placeholder={'email'}></BasicInput>
			</div>
		</>
	)
}

export default LoginEmailInput
