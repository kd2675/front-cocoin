import { useRouter } from 'next/navigation'

export type LinkType = 'push' | 'replace'

export const goHomeRoute = () => {
	const router = useRouter()
	const goPage = ({ type }: { type: LinkType }) => {
		router[type]('/', {})
	}
	return goPage
}

export const goHealthRoute = () => {
	const router = useRouter()
	const goPage = ({ type }: { type: LinkType }) => {
		router[type]('/health', {})
	}
	return goPage
}

export const goLoginRoute = () => {
	const router = useRouter()
	const goPage = ({ type }: { type: LinkType }) => {
		router[type]('/login', {})
	}
	return goPage
}

export const goJoinRoute = () => {
	const router = useRouter()
	const goPage = ({ type }: { type: LinkType }) => {
		router[type]('/join', {})
	}
	return goPage
}

export const goCoinRouter = () => {
	const router = useRouter()
	const goPage = ({ type }: { type: LinkType }) => {
		router[type]('/coin', {})
	}
	return goPage
}
