import React from 'react'
import { useFormContext, UseFormRegisterReturn } from 'react-hook-form'
import BasicInput from '@component/common/input/BasicInput'
import { SignUpRegisterSchemaType } from '@schema/signUp'
import { selSignUpNickCheck } from '@api/auth'
import { useDispatch, useSelector } from 'react-redux'
import { alertActions } from '@redux/reducers/alert'

type PropsType = {
	register: UseFormRegisterReturn<keyof SignUpRegisterSchemaType>
}

const SignUpNickInput = (props: PropsType) => {
	const dispatch = useDispatch()

	const { getValues } = useFormContext<SignUpRegisterSchemaType>()

	const check = async () => {
		// let values = getValues('userNick')
		// if (values.length > 0) {
		// 	let { data } = await selSignUpNickCheck(getValues('userNick'))
		// 	if (data == 1) {
		// 		dispatch(signUpActions.setNickCheckYn('y'))
		// 		dispatch(alertActions.addAlert({ msg: '사용 가능한 닉네임입니다.', type: 'info' }))
		// 	} else {
		// 		dispatch(alertActions.addAlert({ msg: '중복된 닉네임입니다.', type: 'danger' }))
		// 	}
		// } else {
		// 	dispatch(alertActions.addAlert({ msg: '닉네임을 입력해주세요', type: 'danger' }))
		// }
	}
	const onChange = () => {
		// if (nickCheckYn === 'y') {
		// 	dispatch(signUpActions.setNickCheckYn('n'))
		// }
	}
	return (
		<>
			<div className="col-span-4 sm:col-span-4">
				<BasicInput id={'userNick'} type={'text'} labelName={'닉네임'} autoComplete={'off'} register={props.register} onChange={onChange}></BasicInput>
			</div>
			
		</>
	)
}

export default SignUpNickInput
