// @flow

import * as React from 'react'
import { getDehydratedQuery, Hydrate } from '@query/reactQuery'
import queryOptions from '@service/health/queries'
import Health from '@component/Health'

type Props = {}

export default async function Page(props: Props) {
	// const dispatch = useDispatch<AppDispatch>()
	const { queryKey, queryFn } = queryOptions.all();
	const query = await getDehydratedQuery({ queryKey, queryFn });

	// const setTabMouseEnter = () => {
	// 	dispatch(menuActions.setIsMenu(true))
	// }

	return (
		<div>
			{/*<h1 onClick={setTabMouseEnter}>hello1</h1>*/}
			<div>test</div>
			<Hydrate state={{ queries: [query] }}>
				{/* Client Component */}
				<Health/>
				{/* Server Component */}
			</Hydrate>
		</div>
	)
}
