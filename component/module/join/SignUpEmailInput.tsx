import React from 'react'
import { useFormContext, UseFormRegisterReturn } from 'react-hook-form'
import BasicInput from '@component/common/input/BasicInput'
import { selSignUpEmailCheck } from 'api/deprecated/auth'
import { SignUpRegisterSchemaType } from '@schema/signUp'
import { useDispatch, useSelector } from 'react-redux'

type PropsType = {
	register: UseFormRegisterReturn<keyof SignUpRegisterSchemaType>
}

const SignUpEmailInput = (props: PropsType) => {
	let dispatch = useDispatch()

	const { getValues } = useFormContext<SignUpRegisterSchemaType>()

	// const check = async () => {
	// 	let values = getValues('userEmail')
	// 	if (values.length > 0) {
	// 		let res = await selSignUpEmailCheck(getValues('userEmail'))
	// 		console.log(res)
	// 		if (res.data == 1) {
	// 			dispatch(signUpActions.setEmailCheckYn('y'))
	// 			dispatch(alertActions.addAlert({ msg: '사용 가능한 이메일입니다.', type: 'info' }))
	// 		} else {
	// 			dispatch(alertActions.addAlert({ msg: '중복된 이메일입니다.', type: 'danger' }))
	// 		}
	// 	} else {
	// 		dispatch(alertActions.addAlert({ msg: '이메일을 입력해주세요', type: 'danger' }))
	// 	}
	// }

	// const onChange = () => {
	// 	if (emailCheckYn === 'y') {
	// 		dispatch(signUpActions.setEmailCheckYn('n'))
	// 	}
	// }

	return (
		<>
			<div className="col-span-4 sm:col-span-4">
				<BasicInput id={'userEmail'} type={'text'} labelName={'이메일'} placeholder={'email'} autoComplete={'email'} register={props.register} ></BasicInput>
			</div>
		</>
	)
}

export default SignUpEmailInput
