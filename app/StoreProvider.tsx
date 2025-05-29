'use client'

import React, { useEffect, useRef, useState } from 'react'
import { store, persistor, RootState } from '@redux/store'
import { useRouter } from 'next/navigation'
import { CompatClient } from '@stomp/stompjs'
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
import useSocket from '@/socket/v1'

type Props = {}

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
	const queryClient1 = getQueryClient

	// const { connect, disconnect, subscribe, publish } = useSocket('http://example.com/socket');
	//
	// useEffect(() => {
	// 	connect(
	// 		() => console.log('Connected'),
	// 		() => console.error('Error')
	// 	);
	// 	return () => disconnect();
	// }, []);

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
