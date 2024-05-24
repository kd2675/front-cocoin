// @flow

import * as React from 'react'
import { getDehydratedQuery, Hydrate } from '@query/reactQuery'
import queryOptions from '@service/health/queries'
import Health from '@component/Health'

type Props = {}

export default async function Page(props: Props) {
	const { queryKey, queryFn } = queryOptions.health();
	const query = await getDehydratedQuery({ queryKey, queryFn });

	return (
		<div>
			{/*<h1 onClick={setTabMouseEnter}>hello1</h1>*/}
			<Hydrate state={{ queries: [query] }}>
				{/* Client Component */}
				<Health/>
				{/* Server Component */}
			</Hydrate>
		</div>
	)
}
