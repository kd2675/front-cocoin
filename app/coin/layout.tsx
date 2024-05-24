import React from 'react'
import LeftSidebar from '@component/common/leftSidebar'
import BasicLayout from '@component/common/layout/BasicLayout'

export default function CoinLayout({
																		 children // will be a page or nested layout
																	 }: {
	children: React.ReactNode
}) {
	return (
		<>
			<BasicLayout>
				{children}
			</BasicLayout>
		</>
	)
}