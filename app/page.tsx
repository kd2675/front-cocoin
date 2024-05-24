import Main from '@component/module/main'
import { cookies } from 'next/headers'

type PropsType = {}

const Page = async (props: PropsType) => {
	const cookieStore = cookies()
	// console.log(cookieStore.has('test'))

	return (
		<main className='flex flex-col items-center justify-between p-24'>
			<Main></Main>
		</main>
	)
}

export default Page
