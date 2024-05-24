import React from 'react'
import moment from 'moment/moment'
import { FeedCommentType } from '@api/detail'

type PropsType = FeedCommentType

const BasicComment = (props: PropsType) => {
	console.log(props.createDate)
	const m = moment().diff(moment(props.createDate, 'YYYY MM DD HH:mm:ss'), 'minutes')

	return (
		<>
			<div className="flex py-1">
				<a className="mr-4" href="#">
					<div className="relative mb-4 h-10  w-10 rounded-full bg-gray-100 dark:bg-gray-600">
						<div className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
							<svg className="absolute -left-1 h-12 w-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
							</svg>
						</div>
					</div>
				</a>
				<div className="media-body">
					<div>
						<a className="mr-2 inline-block text-base font-bold" href="#">
							{props.userDTO.userNick}
						</a>
						{/*{moment(props.createDate, 'YYYY-MM-DD HH:mm:ss').format("ddd YYYY MM DD HH:MM:ss")}*/}
						{m < 60 ? m + ' minute' : 'long'} ago
						{/*<span className="text-slate-500">25 minutes ago</span>*/}
					</div>
					<p>{props.feedCommentContent}</p>
				</div>
			</div>
		</>
	)
}

export default BasicComment
