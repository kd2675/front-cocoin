'use client'

import React, { useEffect, useRef, useState } from 'react'
import { store, persistor, RootState } from '@redux/store'
import { useRouter } from 'next/navigation'
import { CompatClient } from '@stomp/stompjs'
import { connect, disconnect } from '@/socket/v1'
import { Provider, useSelector } from 'react-redux'
import { QueryClientProvider, useQuery, useQueryClient } from '@tanstack/react-query'
import { SocketContext } from '@/socket/v1/useSocketClient'
import { getQueryClient } from '@query/reactQuery'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import process from 'process'
import { QueryCache, QueryClient } from '@tanstack/query-core'
import { PersistGate } from 'redux-persist/integration/react';
import BasicLoading from '@component/loading/BasicLoading'
import { axios } from '@/api'

type Props = {}

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
	const queryClient1 = getQueryClient
	// const [queryClient, setQueryClient] = useState(
	// 	() =>
	// 		new QueryClient({
	// 			defaultOptions: {
	// 				queries: {
	// 					// With SSR, we usually want to set some default staleTime
	// 					// above 0 to avoid refetching immediately on the client
	// 					staleTime: 30 * 1000,
	// 					refetchOnWindowFocus: true,
	// 				},
	// 			},
	// 			queryCache: new QueryCache({
	// 				onError: (error, query) => {
	// 					console.log('queryClient error')
	// 				},
	// 			}),
	// 		})
	// )

	// const queryClient1 = getQueryClient()

	const router = useRouter()
	const client = useRef<CompatClient>()

	// useEffect(() => {
	// 	if (!client.current) {
	// 		// Create the store instance the first time this renders
	// 		//socket
	// 		connect(client, store.dispatch, router, queryClient1)
	// 		return () => disconnect(client)
	// 	}
	// }, [])

	return (
		<QueryClientProvider client={queryClient1}>
			{/*<SocketContext.Provider value={client}>*/}
				<Provider store={store}>
					<PersistGate loading={<BasicLoading></BasicLoading>} persistor={persistor}>
					{children}
					{process.env.NODE_ENV !== 'production' && <ReactQueryDevtools initialIsOpen={false} />}
					</PersistGate>
				</Provider>
			{/*</SocketContext.Provider>*/}
		</QueryClientProvider>
	)
}

export default StoreProvider
