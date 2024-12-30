import Coin from '@component/module/coin/coin'
import { getDehydratedQueries, getDehydratedQuery, Hydrate } from '@query/reactQuery'
import queryOptions from '@api/service/cocoin/act/cocoinOptionQuery'

type PropsType = {}

const Page = async (props: PropsType) => {
	const { queryKey, queryFn } = queryOptions.getBid()
	const query = await getDehydratedQuery({ queryKey, queryFn })
	const query2 = await getDehydratedQuery({
		queryKey: queryOptions.getTicker().queryKey,
		queryFn: queryOptions.getTicker().queryFn,
	})

	// const query = await getDehydratedQueries([
	// 	{
	// 		queryKey: queryOptions.getBid().queryKey,
	// 		queryFn: queryOptions.getBid().queryFn,
	// 	},
	// 	{
	// 		queryKey: queryOptions.getTicker().queryKey,
	// 		queryFn: queryOptions.getTicker().queryFn,
	// 	},
	// ])

	return (
		<>
			<Hydrate state={{ queries: [query, query2] }}>
				<Coin></Coin>
			</Hydrate>
		</>
	)
}

export default Page
