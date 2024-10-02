import cocoinAxios from '@api/service/cocoin/cocoinAxios'

const queryKeys = {
	getTicker: ['getTicker'] as const,
	getCandles: ['getCandles'] as const,
	getBid: ['getBid'] as const,
}

const queryOptions = {
	getTicker: () => ({
		queryKey: queryKeys.getTicker,
		queryFn: async () => {
			const res = await cocoinAxios.getTicker()
			return res.data
		},
	}),
	getCandles: () => ({
		queryKey: queryKeys.getCandles,
		queryFn: async () => {
			const res = await cocoinAxios.getCandles()
			return res.data
		},
	}),
	getBid: () => ({
		queryKey: queryKeys.getBid,
		queryFn: async () => {
			const res = await cocoinAxios.getBid()
			return res.data
		},
	}),
}

export default queryOptions
