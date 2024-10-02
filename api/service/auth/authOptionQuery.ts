import authAxios from '@api/service/auth/authAxios'
import AuthService from '@api/service/auth/authAxios'

const queryKeys = {
	userInfo: ['userInfo'] as const,
}

const queryOptions = {
	getUserInfo: () => ({
		queryKey: queryKeys.userInfo,
		queryFn: async () => {
			const res = await authAxios.userInfo()
			return res.data
		},
	}),
}

export default queryOptions
