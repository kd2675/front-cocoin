import { MutableRefObject } from 'react'
import { CompatClient, Stomp } from '@stomp/stompjs'
import SockJS from 'sockjs-client'
import { AnyAction, Dispatch } from '@reduxjs/toolkit'
import { QueryClient } from '@tanstack/query-core'
import { publishers, subscribers } from './initSocket'
import { SuperJSONObject } from '@/node_modules/superjson/dist/types'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'


export const connect = (client: MutableRefObject<CompatClient | undefined>, dispatch: Dispatch<AnyAction>, router: AppRouterInstance, queryClient: QueryClient) => {
	// const sockJS = new SockJS(`${process.env.NEXT_PUBLIC_SOCKET_SERVER_URL}`)
	// new WebSocket(`ws://${process.env.NEXT_PUBLIC_SOCKET_SERVER_URL}`)
	client.current = Stomp.over(function(){
		return new SockJS(`${process.env.NEXT_PUBLIC_SOCKET_SERVER_URL}`)
	})
	client.current?.connect(
		{},
		() => {
			onConnected(client, dispatch, router, queryClient)
		},
		() => {
			onError(client)
		}
	)
}
export const onConnected = (client: MutableRefObject<CompatClient | undefined>, dispatch: Dispatch<AnyAction>, router: AppRouterInstance, queryClient: QueryClient) => {
	console.log("socket init")
	subscribers(client, dispatch, router, queryClient)
	publishers(client, dispatch, router, queryClient)
}

export const subscribe = (client: MutableRefObject<CompatClient | undefined>|null, destination: string, callback: (quote: SuperJSONObject) => void) => {
	if (!client?.current?.connected) return
	return client.current?.subscribe(destination, (message) => {
		const quote = JSON.parse(message.body)
		callback(quote)
	})
}

export const publish = (client: MutableRefObject<CompatClient | undefined>|null, destination: string, body: {}) => {
	if (!client?.current?.connected) return // 연결되지 않았으면 메시지를 보내지 않는다.
	client.current?.publish({
		destination: destination,
		body: JSON.stringify(body), // 형식에 맞게 수정해서 보내야 함.
	})
}

export const send = (client: MutableRefObject<CompatClient | undefined>, destination: string, body: {}) => {
	if (!client.current?.connected) return // 연결되지 않았으면 메시지를 보내지 않는다.
	client.current?.send(destination, {}, JSON.stringify(body))
}

export const onError = (client: MutableRefObject<CompatClient | undefined>) => {
	console.log('socket error')
}
export const disconnect = (client: MutableRefObject<CompatClient | undefined>) => {
	// 연결이 끊겼을 때
	console.log('socket disconnect')
	client.current?.deactivate()
}
