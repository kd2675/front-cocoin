import cocoinAxios from '@api/service/cocoin/cocoinAxios'

const queryKeys = {
	getCandles: ['getCandles'] as const,
	getBid: ['getBid'] as const,
}

const queryOptions = {
	getCandles: () => ({
		queryKey: queryKeys.getCandles,
		queryFn: () => cocoinAxios.getCandles(),
	}),
	getBid: () => ({
		queryKey: queryKeys.getBid,
		queryFn: () => cocoinAxios.getBid(),
	})
};

export default queryOptions
