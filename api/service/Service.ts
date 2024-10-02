import { axios } from '@/api'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import type { DefaultError } from '@tanstack/query-core'

export type MutationParam = {
	onSuccess: (data?:any) => void
	onError: (error:DefaultError) => void
}

interface HTTPInstance {
	get<T>(url: string, config?: AxiosRequestConfig): Promise<T>

	// delete<T>(
	// 	url: string,
	// 	config?: RequestInit,
	// ): Promise<T>;
	// head<T>(
	// 	url: string,
	// 	config?: RequestInit,
	// ): Promise<T>;
	// options<T>(
	// 	url: string,
	// 	config?: RequestInit,
	// ): Promise<T>;
	post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T>

	// put<T>(
	// 	url: string,
	// 	data?: unknown,
	// 	config?: RequestInit,
	// ): Promise<T>;
	// patch<T>(
	// 	url: string,
	// 	data?: unknown,
	// 	config?: RequestInit,
	// ): Promise<T>;
}

class Service {
	public http: HTTPInstance

	private baseURL: string

	private headers: Record<string, string>

	constructor() {
		this.baseURL = `${process.env.NEXT_PUBLIC_API_SERVER_URL}`
		this.headers = {
			csrf: 'token',
			Referer: this.baseURL,
		}

		this.http = {
			get: this.get.bind(this),
			// delete: this.delete.bind(this),
			// head: this.head.bind(this),
			// options: this.options.bind(this),
			post: this.post.bind(this),
			// put: this.put.bind(this),
			// patch: this.patch.bind(this),
		}
	}

	private async request<T = unknown>(
		method: string,
		url: string,
		data?: unknown,
		config?: AxiosRequestConfig
	): Promise<T> {
		try {
			if (method === 'get') {
				const response: AxiosResponse<T> = await axios.get(this.baseURL + url, config)
				// console.log(response)
				if (response.status !== 200) {
					throw new Error('Network response was not ok')
				}

				return response.data
			} else if (method === 'post') {
				const response: AxiosResponse<T> = await axios.post(this.baseURL + url, data, config)
				// console.log(response)
				if (response.status !== 200) {
					throw new Error('Network response was not ok')
				}

				return response.data
			}

			const response: AxiosResponse<T> = await axios.get(this.baseURL + url, {})
			// console.log(response)

			if (response.status !== 200) {
				throw new Error('Network response was not ok')
			}

			return response.data

			// const response = await fetch(this.baseURL + url, {
			// 	method,
			// 	headers: {
			// 		...this.headers,
			// 		'Content-Type': 'application/json',
			// 		...config?.headers,
			// 	},
			// 	credentials: 'include',
			// 	body: data ? JSON.stringify(data) : undefined,
			// 	...config,
			// });
			// const responseData: T = await response.json();
			// console.log(responseData)
			// return responseData;
		} catch (error) {
			console.error('Error:', error)
			throw error
		}
	}

	private get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
		return this.request<T>('get', url, undefined, config)
	}

	// private delete<T>(
	// 	url: string,
	// 	config?: RequestInit,
	// ): Promise<T> {
	// 	return this.request<T>('DELETE', url, undefined, config);
	// }
	//
	// private head<T>(
	// 	url: string,
	// 	config?: RequestInit,
	// ): Promise<T> {
	// 	return this.request<T>('HEAD', url, undefined, config);
	// }
	//
	// private options<T>(
	// 	url: string,
	// 	config?: RequestInit,
	// ): Promise<T> {
	// 	return this.request<T>('OPTIONS', url, undefined, config);
	// }

	private post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
		return this.request<T>('post', url, data, config)
	}

	// private put<T>(
	// 	url: string,
	// 	data?: unknown,
	// 	config?: RequestInit,
	// ): Promise<T> {
	// 	return this.request<T>('PUT', url, data, config);
	// }
	//
	// private patch<T>(
	// 	url: string,
	// 	data?: unknown,
	// 	config?: RequestInit,
	// ): Promise<T> {
	// 	return this.request<T>('PATCH', url, data, config);
	// }
}

export default Service
