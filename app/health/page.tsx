import queryOptions from '@api/service/health/queries'
import { getDehydratedQuery, Hydrate } from '@query/reactQuery'
import Health from '@component/module/health/Health'
import * as React from 'react'

type PropsType = {

};

const Page = async (props: PropsType) => {
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

export default Page