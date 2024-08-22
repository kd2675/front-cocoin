import Coin from '@component/module/coin/coin'
import { getDehydratedQuery, Hydrate } from '@query/reactQuery'
import queryOptions from '@api/service/cocoin/cocoinOptionQuery'

type PropsType = {}

const Page = async (props: PropsType) => {
	const { queryKey, queryFn } = queryOptions.getBid();
	const query = await getDehydratedQuery({ queryKey, queryFn });
	return (
		<>
			<Hydrate state={{ queries: [query] }}>
				<Coin></Coin>
			</Hydrate>
		</>
	)
}

export default Page
