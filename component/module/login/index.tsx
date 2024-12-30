'use client'

import React from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { basicAnim } from '@motion/BasicAnim'
import { FormProvider, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { LoginRegisterSchema, LoginRegisterSchemaType } from '@schema/login'
import { modalActions } from 'redux/reducers/modal'
import LoginEmailInput from '@component/module/login/LoginEmailInput'
import LoginPwdInput from '@component/module/login/LoginPwdInput'
import { yupResolver } from '@hookform/resolvers/yup'
import { useLogin } from '@api/service/auth/biz/useAuthService'
import { goHomeRoute } from '@/link'

const Index = () => {
	const dispatch = useDispatch()
	const router = useRouter()
	const login = useLogin()

	const methods = useForm<LoginRegisterSchemaType>({
		resolver: yupResolver(LoginRegisterSchema),
		mode: 'onSubmit',
		reValidateMode: 'onSubmit',
		shouldFocusError: false,
	})

	const emailRegister = methods.register('userEmail')
	const pwdRegister = methods.register('userPassword')

	const homeRoute = goHomeRoute()

	const goHomeOnClick = () => {
		homeRoute({ type: 'push' })
	}

	const submitHandler: SubmitHandler<LoginRegisterSchemaType> = async (data) => {
		console.log('data : ', data)
		// let res = await loginV1(data)
		// console.log('res : ', res.data)
		login.mutate(data)
		// dispatch(authActions.login(data))
	}
	const submitErrorHandler: SubmitErrorHandler<LoginRegisterSchemaType> = (data) => {
		let value = Object.values(data)[0]
		console.log('submitData : ', data)

		dispatch(modalActions.addAlert({ msg: value.message, type: 'danger' }))
	}
	return (
		<>
			<motion.div className={'overflow-hidden'} initial={basicAnim.initial} animate={basicAnim.animate}>
				<div onClick={goHomeOnClick}>home</div>
				<div className='flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8'>
					<div className='w-full max-w-xs'>
						<div className={'flex'}>
							<div className='flex-1 justify-start p-2'>
								<button
									type='button'
									className='btn-close ml-2 box-content h-4 w-4 rounded-none border-none text-black opacity-50 hover:text-black hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none'
									data-mdb-dismiss='toast'
									aria-label='Close'
									onClick={() => {
										router.back()
									}}
								></button>
							</div>
							<h1 className='mb-4 justify-center text-center text-2xl font-bold text-gray-500'>로그인</h1>
							<div className={'flex-1 justify-end'}></div>
						</div>
						<FormProvider {...methods}>
							<div className='mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md'>
								<LoginEmailInput register={emailRegister}></LoginEmailInput>
								<LoginPwdInput register={pwdRegister}></LoginPwdInput>
								<div className='flex items-center justify-between'>
									<a
										className='inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800'
										href='#'
									>
										Forgot Password?
									</a>
									<button
										className='focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none'
										type='button'
										onClick={() => {
											methods.handleSubmit(submitHandler, submitErrorHandler)()
										}}
									>
										로그인
									</button>
								</div>
							</div>
						</FormProvider>
						<p className='text-center text-xs text-gray-500'>&copy;2020 Acme Corp. All rights reserved.</p>
					</div>
				</div>
			</motion.div>
		</>
	)
}

export default Index
