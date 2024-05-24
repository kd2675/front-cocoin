import React from 'react'
import { UserInfoType } from '@api/auth'

type PropsType = UserInfoType
const BasicRightSidebarA = (props: PropsType) => {
	// let goMyPage = goMyPageRoute()
	// const showMoreOnClick = () => {
	// 	goMyPage({ type: 'push' })
	// }

	return (
		<>
			<div className='my-4 flex flex-col space-y-4'>
				<div className='flex w-full flex-col'>
					<div className='flex-1 rounded-lg bg-white p-8 shadow-xl'>
						<h4 className='text-xl font-bold text-gray-900'>Personal Info</h4>
						<ul className='mt-2 text-gray-700'>
							<li className='flex border-y py-2'>
								<span className='w-24 font-bold'>NickName:</span>
								<span className='text-gray-700'>{props.userNick}</span>
							</li>
							<li className='flex border-b py-2'>
								<span className='w-24 font-bold'>Email:</span>
								<span className='text-gray-700'>{props.userEmail}</span>
							</li>
							<li className='flex border-b py-2'>
								<span className='w-24 font-bold'>Point:</span>
								<span className='text-gray-700'>{props.userWalletEntityPoint}</span>
							</li>
						</ul>
						{/*<BasicShowMoreBtn showMoreOnClick={showMoreOnClick}></BasicShowMoreBtn>*/}
					</div>
				</div>
			</div>
		</>
	)
}

export default BasicRightSidebarA
