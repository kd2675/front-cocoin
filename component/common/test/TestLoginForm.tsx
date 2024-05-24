import React, { useEffect } from 'react'
import Image from 'next/image'
import BasicModal from '@component/modul/common/BasicModal'
import usePortal from '@hooks/usePortal'

const TestLoginForm = () => {
	const testLoginPortal = usePortal()

	return (
		<>
			{/*<div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"*/}
			{/*     style="background-image:url('https://images.unsplash.com/photo-1499123785106-343e69e68db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80')">*/}
			<testLoginPortal.portal>
				<BasicModal></BasicModal>
			</testLoginPortal.portal>
			<div className="flex w-full items-center justify-center bg-white bg-cover bg-no-repeat rounded-lg">
				<div className="rounded-xl bg-white bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
					<div className="text-black">
						<div className="mb-8 flex flex-col items-center">
							<Image src={'/limepiece1.png'} alt={'메인이미지'} width={150} height={150}></Image>
							<h1 className="mb-2 text-2xl">LIMEPiece</h1>
							<span className="text-gray-800">Enter Login Details</span>
						</div>
						<form action="#">
							<div className="mb-4 text-lg">
								<input
									className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-400 shadow-lg outline-none backdrop-blur-md"
									type="text"
									name="name"
									placeholder="id@email.com"
								/>
							</div>

							<div className="mb-4 text-lg">
								<input
									className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-400 shadow-lg outline-none backdrop-blur-md"
									type="Password"
									name="name"
									placeholder="*********"
								/>
							</div>
							<div className="mt-8 flex justify-center text-lg text-black">
								<button type="button" className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-black shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600" onClick={()=>{
									testLoginPortal.openPortal()
								}}>
									Login
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default TestLoginForm
