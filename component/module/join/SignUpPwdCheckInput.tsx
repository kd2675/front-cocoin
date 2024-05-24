import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import BasicInput from '@component/common/input/BasicInput'
import { SignUpRegisterSchemaType } from '@schema/signUp'

type PropsType = {
	register: UseFormRegisterReturn<keyof SignUpRegisterSchemaType>
}

const SignUpPwdCheckInput = (props: PropsType) => {
	return (
		<>
			<div className="col-span-6 sm:col-span-6">
				<BasicInput id={'userPwdCheck'} type={'password'} labelName={'패스워드 확인'} placeholder={'*********'} autoComplete={'off'} register={props.register}></BasicInput>
			</div>
		</>
	)
}

export default SignUpPwdCheckInput
