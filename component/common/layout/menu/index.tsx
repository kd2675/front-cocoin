import React, { useEffect } from 'react'
import Category from '@component/common/layout/menu/category'
import MenuTab from '@component/common/layout/menu/MenuTab'
import CategoryMobile from '@component/common/layout/menu/category/CategoryMobile'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { menuActions } from '@redux/reducers/menu'

const Index = () => {
	const dispatch = useDispatch()

	const isMenu = useSelector((state: RootState) => state.menu.isMenu)
	const isMobileMenu = useSelector((state: RootState) => state.menu.isMobileMenu)

	const data = useSelector((state: RootState) => state.menu.data)

	const setTabMouseLeave = () => {
		dispatch(menuActions.setIsMenu(false))
	}
	const setTabMobileToggle = () => {
		dispatch(menuActions.toggleIsMobileMenu())
	}

	useEffect(() => {
		return () => {
			dispatch(menuActions.setIsMenu(false))
			dispatch(menuActions.setIsMobileMenu(false))
		}
	}, [])

	return (
		<>
			<nav
				className='sticky top-24 z-40 mt-12 rounded-l bg-gradient-to-r from-green-600 via-green-700 to-green-700 bg-size-200 bg-pos-0 py-2.5 shadow-[0_4px_16px_2px_rgba(0,0,0,0.1)] transition-all duration-500 hover:bg-pos-100 dark:bg-gray-800'
				onMouseLeave={setTabMouseLeave}
			>
				<div className='hidden h-full w-full cursor-default grid-cols-4 overflow-hidden rounded-xl lg:grid'>
					{data.map((v, i, a) => {
						return (
							<React.Fragment key={v.id}>
								<MenuTab {...v}></MenuTab>
							</React.Fragment>
						)
					})}
				</div>
				<div className='flex flex-row-reverse'>
					<button
						data-collapse-toggle='mobile-menu-2'
						type='button'
						className='mr-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden'
						aria-controls='mobile-menu-2'
						aria-expanded='false'
						onClick={setTabMobileToggle}
					>
						{!isMobileMenu ? (
							<svg className='h-6 w-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
								<path
									fillRule='evenodd'
									d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
									clipRule='evenodd'
								></path>
							</svg>
						) : (
							<svg className='h-6 w-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
								<path
									fillRule='evenodd'
									d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
									clipRule='evenodd'
								></path>
							</svg>
						)}
					</button>
				</div>
				<Category></Category>
				<CategoryMobile></CategoryMobile>
			</nav>
		</>
	)
}

export default Index
