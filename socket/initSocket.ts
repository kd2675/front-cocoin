import { MutableRefObject } from 'react'
import { CompatClient } from '@/node_modules/@stomp/stompjs'
import { AnyAction, Dispatch } from '@reduxjs/toolkit'
import { QueryClient } from '@tanstack/query-core'
import { subscribe } from './index'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

const subscribers = (
	client: MutableRefObject<CompatClient | undefined>,
	dispatch: Dispatch<AnyAction>,
	router: AppRouterInstance,
	queryClient: QueryClient
) => {
	subscribe(client, '/sub/room', (quote) => {
		alert(quote.content)
	})
}
const publishers = (
	client: MutableRefObject<CompatClient | undefined>,
	dispatch: Dispatch<AnyAction>,
	router: AppRouterInstance,
	queryClient: QueryClient
) => {
	// publish(client, '/pub/hello', { name: 'te' })
}

export { subscribers, publishers }
