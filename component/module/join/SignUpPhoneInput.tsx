import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import BasicInput from '@component/common/input/BasicInput'
import { SignUpRegisterSchemaType } from '@schema/signUp'

type PropsType = {
	register: UseFormRegisterReturn<keyof SignUpRegisterSchemaType>
}

const SignUpPhoneInput = (props: PropsType) => {
	return (
		<>
			<div className="col-span-4">
				<BasicInput id={'userPhone'} type={'tel'} labelName={'전화번호'} autoComplete={'off'} register={props.register}></BasicInput>
			</div>
		</>
	)
}

export default SignUpPhoneInput
