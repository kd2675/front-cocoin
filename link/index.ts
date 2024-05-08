import { useRouter } from 'next/router'

export type LinkType = 'push' | 'replace'

export const goHomeRoute = () => {
	const router = useRouter()
	const goPage = ({ type }: { type: LinkType }) => {
		router[type]({
			pathname: '/',
		})
	}
	return goPage
}
export const goIntroRoute = () => {
	const router = useRouter()
	const goPage = ({ type, id='' }: { type: LinkType; id?: string }) => {
		router[type]({
			pathname: `/intro/` + id,
		})
	}
	return goPage
}
export const goIntroShlRoute = () => {
	const router = useRouter()
	const goPage = ({ type, id }: { type: LinkType; id?: number }) => {
		router[type](
			{
				pathname: `/intro/` + (id ?? ''),

			},
			undefined,
			{ shallow: true }
		)
	}
	return goPage
}
export const goProductRoute = () => {
	const router = useRouter()
	const goPage = ({ type, id }: { type: LinkType; id?: number }) => {
		router[type](
			{
				pathname: `/product/` + (id ?? ''),

			}
		)
	}
	return goPage
}
export const goNoticeRoute = () => {
	const router = useRouter()
	const goPage = ({ type }: { type: LinkType }) => {
		router[type]({
			pathname: '/notice',
		})
	}
	return goPage
}
export const goInquiryRoute = () => {
	const router = useRouter()
	const goPage = ({ type }: { type: LinkType }) => {
		router[type]({
			pathname: '/inquiry',
		})
	}
	return goPage
}
