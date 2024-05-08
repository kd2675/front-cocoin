import Image from 'next/image'
import { getDehydratedQuery, Hydrate } from '@query/reactQuery'
import PhotoList from '@component/PhotoList'
import queryOptions from '@/service/photo/queries'

export default async function Home() {
	const { queryKey, queryFn } = queryOptions.all();
	const query = await getDehydratedQuery({ queryKey, queryFn });

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>

			{/* 서버 사이드 렌더링 & 서버 컴포넌트 */}
			<Hydrate state={{ queries: [query] }}>
				{/* Client Component */}
				<PhotoList/>
				{/* Server Component */}
			</Hydrate>
		</main>
	)
}
