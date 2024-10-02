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

export const goCoinHomeRouter = () => {
	const router = useRouter()
	const goPage = ({ type }: { type: LinkType }) => {
		router[type]('/coin/home', {})
	}
	return goPage
}

export const goCoinProfileRouter = () => {
	const router = useRouter()
	const goPage = ({ type }: { type: LinkType }) => {
		router[type]('/coin/profile', {})
	}
	return goPage
}

export const goCoinCoinRouter = () => {
	const router = useRouter()
	const goPage = ({ type }: { type: LinkType }) => {
		router[type]('/coin/coin', {})
	}
	return goPage
}

export const goCoinGameRouter = () => {
	const router = useRouter()
	const goPage = ({ type }: { type: LinkType }) => {
		router[type]('/coin/game', {})
	}
	return goPage
}

export const goBasicRouter = () => {
	const router = useRouter()
	const goPage = ({ type }: {type: LinkType }) => {
		router[type]('/coin/game/basic', {})
	}
	return goPage
}
