'use client'

import React, { useEffect, useRef, useState } from 'react'
import { store, persistor } from '@redux/store'
import { useRouter } from 'next/navigation'
import { CompatClient } from '@stomp/stompjs'
import { connect, disconnect } from '@/socket'
import { Provider } from 'react-redux'
import { QueryClientProvider, useQueryClient } from '@tanstack/react-query'
import { SocketContext } from '@/socket/useSocketClient'
import { getQueryClient } from '@query/reactQuery'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import process from 'process'
import { QueryCache, QueryClient } from '@tanstack/query-core'
import { PersistGate } from 'redux-persist/integration/react';
import BasicLoading from '@component/loading/BasicLoading'

type Props = {}

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
	// const storeRef = useRef<AppStore>(makeStore())
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						// With SSR, we usually want to set some default staleTime
						// above 0 to avoid refetching immediately on the client
						staleTime: 60 * 1000,
						refetchOnWindowFocus: true,
					},
				},
				queryCache: new QueryCache({
					onError: (error, query) => {
						console.log('error')
					},
				}),
			})
	)

	const router = useRouter()
	const client = useRef<CompatClient>()

	// if (!storeRef.current) {
	// 	// Create the store instance the first time this renders
	// 	storeRef.current = makeStore()
	//
	// 	//socket
	// 	useEffect(() => {
	// 		connect(client, storeRef.current.dispatch, router, queryClient)
	// 		return () => disconnect(client)
	// 	}, [])
	// }

	return (
		<QueryClientProvider client={queryClient}>
			<SocketContext.Provider value={client}>
				<Provider store={store}>
					<PersistGate loading={<BasicLoading></BasicLoading>} persistor={persistor}>
					{children}
					{process.env.NODE_ENV !== 'production' && <ReactQueryDevtools initialIsOpen={false} />}
					</PersistGate>
				</Provider>
			</SocketContext.Provider>
		</QueryClientProvider>
	)
}

export default StoreProvider
