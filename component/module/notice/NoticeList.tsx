import React, { useState } from 'react'
import { NoticeType, selNotice } from '@api/notice'
import moment from 'moment'
import { querySelNoticeList } from '@query/notice'
const NoticeList = () => {
	const [pageNo, setPageNo] = useState<number>(0)
	const selNoticeList = querySelNoticeList(pageNo)

	const onClick = () => {
		setPageNo((v) => {
			return v + 1
		})
	}

	return (
		<>
			<div className="m-5 overflow-hidden rounded-lg border border-gray-200 shadow-md">
				<table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
					<thead className="bg-gray-50">
						<tr>
							<th scope="col" className="px-6 py-4 font-medium text-gray-900" onClick={onClick}>
								번호
							</th>
							<th scope="col" className="px-6 py-4 font-medium text-gray-900">
								제목
							</th>
							<th scope="col" className="px-6 py-4 font-medium text-gray-900">
								조회수
							</th>
							<th scope="col" className="px-6 py-4 font-medium text-gray-900">
								날짜
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-100 border-t border-gray-100">
						{selNoticeList.data &&
							selNoticeList.data.data.content.map((v:any, i:any, a:any) => {
								return (
									<React.Fragment key={v.noticeId}>
										<tr className="hover:bg-gray-50">
											<td className="px-6 py-4">
												<span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
													{/*<span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>*/}
													{v.noticeId}
												</span>
											</td>
											<td className="px-6 py-4">{v.noticeTitle}</td>
											<td className="px-6 py-4">1</td>
											<td className="px-6 py-4">{moment(v.createDate, 'YYYY-MM-DD HH:mm:ss').format('YYYY MM DD HH:mm:ss')}</td>
										</tr>
									</React.Fragment>
								)
							})}
					</tbody>
				</table>
			</div>
		</>
	)
}

export default NoticeList
