import { call, getContext, put, takeLeading } from '@redux-saga/core/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { commonActions } from 'redux/reducers/common'
import { modalActions } from 'redux/reducers/modal'
import { NextRouter } from 'next/router'
import { QueryClient } from '@tanstack/query-core'
//
// function* insFeedSaga(action: PayloadAction<InsFeedType>) {
// 	const router: NextRouter = yield getContext('router')
//
// 	try {
// 		const { data }: { data: number } = yield call(insFeed, action.payload)
// 		if (data == 1) {
// 			yield put(modalActions.addAlert({ msg: '게시글이 저장되었습니다.', type: 'suc' }))
// 			setTimeout(() => {
// 				router.push('/')
// 			}, 2000)
// 		} else {
// 			yield put(modalActions.addAlert({ msg: '서버오류', type: 'danger' }))
// 		}
// 	} catch (err) {
// 		yield put(modalActions.addAlert({ msg: '로그인이 필요합니다.', type: 'danger' }))
// 		console.error(err)
// 	}
// }

// function* delFeedSaga(action: PayloadAction<DelFeedType>) {
// 	const router: NextRouter = yield getContext('router')
//
// 	try {
// 		const { data }: { data: number } = yield call(delFeed, action.payload)
// 		if (data == 1) {
// 			router.back()
// 			yield put(modalActions.addAlert({msg: '게시글이  삭제되었습니다.', type: 'suc'}))
// 		} else {
// 			yield put(modalActions.addAlert({ msg: '서버오류', type: 'danger' }))
// 		}
// 	} catch (err) {
// 		yield put(modalActions.addAlert({ msg: '서버 통신 실패', type: 'danger' }))
// 		console.error(err)
// 	}
// }

// function* insFeedLikeSaga(action: PayloadAction<number>) {
// 	try {
// 		const { data }: { data: number } = yield call(insFeedLike, { feedId: action.payload })
// 	} catch (err) {
// 		yield put(modalActions.addAlert({ msg: '로그인이 필요합니다.', type: 'danger' }))
// 		console.error(err)
// 	}
// }

export function* mainSaga() {
	// yield takeLeading(mainActions.insFeed, insFeedSaga)
	// yield takeLeading(mainActions.delFeed, delFeedSaga)
	// yield takeLeading(mainActions.insFeedLike, insFeedLikeSaga)
}

const main = [mainSaga()]

export default main
