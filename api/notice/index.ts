import { axios, BaseResponseType, BasePageableType } from '@api/index'

export const selNoticeList = async ({pageNo, pagePerCnt}: {pageNo:number, pagePerCnt: number}) => {
	return await axios.get<BaseResponseType<BasePageableType<NoticeType>>>(`/api/subuk/ctf/notice/list?pageNo=${pageNo}&pagePerCnt=${pagePerCnt}`)
}
export const selNotice = async ({noticeId}: {noticeId: number}) => {
	return await axios.get<BaseResponseType<NoticeType>>(`/api/subuk/ctf/notice/${noticeId}`)
}

export type NoticeType = {
	noticeId: number
	noticeTitle: string
	noticeContent: string
	createDate: Date
	updateDate: Date
}
