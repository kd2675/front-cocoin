'use client';

import React from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { basicAnim } from '@motion/BasicAnim'
import { FormProvider, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { LoginRegisterSchema, LoginRegisterSchemaType } from '@schema/login'
import { authActions } from '@redux/reducers/auth'
import { alertActions } from 'redux/reducers/modal'
import LoginEmailInput from '@component/module/login/LoginEmailInput'
import LoginPwdInput from '@component/module/login/LoginPwdInput'
import { yupResolver } from '@hookform/resolvers/yup'

const Index = () => {
	const dispatch = useDispatch()
	const router = useRouter()

	const methods = useForm<LoginRegisterSchemaType>({
		resolver: yupResolver(LoginRegisterSchema),
		mode: 'onSubmit',
		reValidateMode: 'onSubmit',
		shouldFocusError: false
	})

	const emailRegister = methods.register('userEmail')
	const pwdRegister = methods.register('userPwd')

	const submitHandler: SubmitHandler<LoginRegisterSchemaType> = async (data) => {
		console.log('data : ', data)
		// let res = await loginV1(data)
		// console.log('res : ', res.data)

		// dispatch(authActions.login(data))
	}
	const submitErrorHandler: SubmitErrorHandler<LoginRegisterSchemaType> = (data) => {
		let value = Object.values(data)[0]
		console.log('submitData : ', data)

		dispatch(alertActions.addAlert({ msg: value.message, type: 'danger' }))
	}
	return (
		<>
			<motion.div className={'overflow-hidden'} initial={basicAnim.initial} animate={basicAnim.animate}>
				<div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
					<div className="w-full max-w-xs">
						<div className={'flex'}>
							<div className="flex-1 justify-start p-2">
								<button
									type="button"
									className="btn-close box-content w-4 h-4 ml-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
									data-mdb-dismiss="toast"
									aria-label="Close"
									onClick={() => {
										router.back()
									}}
								></button>
							</div>
							<h1 className="justify-center text-center text-2xl font-bold text-gray-500 mb-4">Login</h1>
							<div className={'flex-1 justify-end'}></div>
						</div>
						<FormProvider {...methods}>
							<div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
								<LoginEmailInput register={emailRegister}></LoginEmailInput>
								<LoginPwdInput register={pwdRegister}></LoginPwdInput>
								<div className="flex items-center justify-between">
									<button
										className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
										type="button"
										onClick={() => {
											methods.handleSubmit(submitHandler, submitErrorHandler)()
										}}
									>
										Sign In
									</button>
									<a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
										Forgot Password?
									</a>
								</div>
							</div>
						</FormProvider>
						<p className="text-center text-gray-500 text-xs">&copy;2020 Acme Corp. All rights reserved.</p>
					</div>
				</div>
			</motion.div>
		</>
	)
}

export default Index
