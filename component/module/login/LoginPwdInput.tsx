import React from 'react'
import BasicInput from '@component/common/input/BasicInput'
import { UseFormRegisterReturn } from 'react-hook-form'
import { LoginRegisterSchemaType } from '@schema/login'

type PropsType = {
	register: UseFormRegisterReturn<keyof LoginRegisterSchemaType>
}

const LoginPwdInput = (props: PropsType) => {
	return (
		<>
			<div className="mb-6">
				<BasicInput id={'userPassword'} type={'password'} autoComplete={'off'} register={props.register} labelName={'비밀번호'} placeholder={'********'}></BasicInput>
			</div>
		</>
	)
}

export default LoginPwdInput
