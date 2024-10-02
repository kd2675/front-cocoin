import axiosLib from 'axios'
import { tokenRefreshV1 } from 'api/deprecated/auth'
import { TokenType } from '@api/service/auth/authAxios'

export type BaseResponseType = {
	code: number
	message: string
	success: boolean
}

export type BaseDataResponseType<t> = {
	code: number
	data: t
	message: string
	success: boolean
}

export type BasePageableType<t> = {
	content: t[]
	pageable: {
		sort: { empty: boolean; sorted: boolean; unsorted: boolean }
		offset: number
		pageSize: number
		pageNumber: number
		unpaged: boolean
		paged: boolean
	}
	last: boolean
	totalPages: number
	totalElements: number
	size: number
	number: number
	sort: { empty: boolean; sorted: boolean; unsorted: boolean }
	numberOfElements: number
	first: boolean
	empty: boolean
}

export const axios = axiosLib.create({
	baseURL: `${process.env.NEXT_PUBLIC_API_SERVER_URL}`, // typeof location !== "undefined"
	headers: {
		'Auth-header': 'second'
		// 'Authorization': useSelector((state: RootState) => state.auth.accessToken)
	},
	// ? ( location?.origin.indexOf("yeoboya.com") > -1 ? location?.origin : process.env.API_SERVER_URL )
	// : process.env.API_SERVER_URL,
	// adapter: cacheAdapterEnhancer(axiosLib.defaults.adapter, { enabledByDefault: false }),
	withCredentials: true,
})

export const axiosMember = axiosLib.create({
	baseURL: `${process.env.NEXT_PUBLIC_AUTH_SERVER_URL}`, // typeof location !== "undefined"
	// headers: {
	// 	'Authorization': useSelector((state: RootState) => state.auth.accessToken)
	// },
	// ? ( location?.origin.indexOf("yeoboya.com") > -1 ? location?.origin : process.env.API_SERVER_URL )
	// : process.env.API_SERVER_URL,z
	// adapter: cacheAdapterEnhancer(axiosLib.defaults.adapter, { enabledByDefault: false }),
	withCredentials: true,
})

export const axiosFile = axiosLib.create({
	baseURL: `${process.env.NEXT_PUBLIC_FILE_SERVER_URL}`, // typeof location !== "undefined"
	// headers: {
	// 	'Authorization': useSelector((state: RootState) => state.auth.accessToken)
	// },
	// ? ( location?.origin.indexOf("yeoboya.com") > -1 ? location?.origin : process.env.API_SERVER_URL )
	// : process.env.API_SERVER_URL,z
	// adapter: cacheAdapterEnhancer(axiosLib.defaults.adapter, { enabledByDefault: false }),
	// withCredentials: true,
})

// axios.interceptors.request.use(
// 	(config) => {
// 		return config
// 	},
// 	(error) => {
// 		return Promise.reject(error)
// 	}
// )

// axios.interceptors.response.use(
// 	(response) => {
// 		return response
// 	},
// 	async (error) => {
// 		if (error.response && error.response.status === 800) {
// 			location.replace('/')
// 		}
//
// 		if (error.response && error.response.status === 404) {
// 			location.href = '/404'
// 		}
//
// 		if (error.response && error.response.status === 401) {
// 			console.log('401error')
//
// 			try {
// 				const originalRequest = error.config
// 				const { data }: { data: TokenType } = await tokenRefreshV1()
// 				if (data.accessToken == null) {
// 					// location.href = '/login'
// 					return Promise.reject(error)
// 				}
// 				await setAuthorizationToken(data.accessToken)
// 				originalRequest.headers.Authorization = `Bearer ${data.accessToken}`
// 				return await axios.request(originalRequest)
// 			} catch (error) {
// 				console.log('401error error : ', error)
// 				return Promise.reject(error)
// 			}
// 		}
// 		// 로그처리나 필요한게 있다면? 추가??
// 		return Promise.reject(error)
// 	},
// )

export const setAuthorizationToken = async (token: string) => {
	console.log('setAuthorizationToken')
	if (token && token !== '') {
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
	} else {
		delete axios.defaults.headers.common['Authorization']
	}
}
