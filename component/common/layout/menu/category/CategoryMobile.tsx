import React, {useCallback} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {DownVariants} from '@motion/BasicVariants'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '@redux/store'
import {goInquiryRoute, goIntroShlRoute, goNoticeRoute, goProductRoute} from '@link/index'
import {menuActions} from '@redux/reducers/menu'

const CategoryMobile = () => {
    const dispatch = useDispatch()
    const subMenuNum = useSelector((state: RootState) => state.menu.subMenuNum)
    const isMobileMenu = useSelector((state: RootState) => state.menu.isMobileMenu)
    const data = useSelector((state: RootState) => state.menu.data)

    const introSwrRoute = goIntroShlRoute()
    const productRoute = goProductRoute()
    const noticeRoute = goNoticeRoute()
    const inquiryRoute = goInquiryRoute()

    const onClick = useCallback((id1?: number, id2?: number) => {
        dispatch(menuActions.setIsMobileMenu(false))
        switch (id1) {
            case 100:
                introSwrRoute({type: 'push', id: id2})
                break
            case 200:
                productRoute({type: 'push', id: id2})
                break
            case 300:
                noticeRoute({type: 'push'})
                break
            case 400:
                inquiryRoute({type: 'push'})
                break
        }
    }, [])

    return (
        <>
            <AnimatePresence>
                {isMobileMenu && (
                    <motion.section
                        key='categoryMobile'
                        className='absolute left-0 top-14 z-10 grid w-full cursor-default grid-flow-row grid-cols-4 justify-center overflow-hidden rounded-xl bg-green-100 text-center text-gray-600 lg:hidden'
                        initial='hidden'
                        animate='visible'
                        exit='hidden'
                        variants={DownVariants}
                    >
                        {data.map((v, i, a) => {
                            return (
                                <React.Fragment key={v.id}>
                                    <div
                                        className={'cursor-pointer col-span-1 border-x border-b p-2 text-center'}
                                        onClick={() => {
                                            onClick(v.id)
                                        }}
                                    >
                                        {v.title}
                                    </div>
                                </React.Fragment>
                            )
                        })}
                        {data.map((v, i, a) => {
                            return (
                                <React.Fragment key={v.id}>
                                    <div className={'col-span-1 border-x text-center'}>
                                        {v.sub.map((r, i, a) => {
                                            return (
                                                <React.Fragment key={i}>
                                                    <div
                                                        className={
                                                            (subMenuNum == r.id ? 'border-indigo-500 border-opacity-100 ' : 'border-green-500 ') +
                                                            'cursor-pointer border-b-2 border-green-500 border-opacity-0 p-4 duration-200 hover:border-opacity-100 hover:text-green-500'
                                                        }
                                                        onClick={() => {
                                                            onClick(v.id, r.id)
                                                        }}
                                                    >
                                                        {r.subTitle}
                                                    </div>
                                                </React.Fragment>
                                            )
                                        })}
                                    </div>
                                </React.Fragment>
                            )
                        })}
                    </motion.section>
                )}
            </AnimatePresence>
        </>
    )
}

export default CategoryMobile
