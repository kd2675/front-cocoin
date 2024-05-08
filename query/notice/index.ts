import { useInfiniteQuery, useQueries, useQuery } from '@tanstack/react-query'
import { selNotice, selNoticeList } from '@api/notice'

// export const infiniteQuerySelNoticeList = () => {
// 	return useInfiniteQuery(
// 		{
// 			getNextPageParam<TQueryFnData, TPageParam>(lastPage: TQueryFnData, allPages: Array<TQueryFnData>, lastPageParam: TPageParam, allPageParams: Array<TPageParam>): TPageParam | undefined | null {
// 				return undefined
// 			}, initialData: undefined, initialPageParam: undefined, queryKey: ['infSelNoticeList']
// 		},
// 		async ({ pageParam = 1 }) => {
// 			const res = await selNoticeList({ pageNo: pageParam, pagePerCnt: 10 })
// 			return {
// 				res: res,
// 				pageNo: pageParam,
// 				isLast: res.data.data.content.length < 10,
// 			}
// 		}
// 	)
// }

export const { isPending, error, data } = useQuery({
	queryKey: ['repoData'],
	queryFn: () =>
		fetch('https://api.github.com/repos/tannerlinsley/react-query').then(
			(res) => res.json(),
		),
})

export const querySelNoticeList = (pageNo?: number) => {
	return useQuery({
		queryKey: ['selNoticeList'],
		queryFn: async () => {
			const res = await selNoticeList({ pageNo: pageNo ? pageNo : 0, pagePerCnt: 10 })
			return res.data
		}
	})
}

export const querySelNotice = (noticeId: number) => {
	return useQuery({
		queryKey: ['selNotice', noticeId],
		queryFn: async () => {
			const res = await selNotice({ noticeId: noticeId })
			return res.data
		}
	})
}

