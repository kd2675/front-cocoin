import { useSocketClient } from './useSocketClient'
import { useEffect } from 'react'
import { subscribe } from './index'
import { SuperJSONObject } from '@/node_modules/superjson/dist/types'

const useSubscribe = (destination: string, callback: (quote: SuperJSONObject) => void) => {
	const socketClient = useSocketClient()

	useEffect(() => {
		const sub = subscribe(socketClient, destination, callback)
		return () => {
			if (sub) {
				socketClient?.current?.unsubscribe(sub?.id)
			}
		}
	}, [socketClient])
}

export { useSubscribe }
