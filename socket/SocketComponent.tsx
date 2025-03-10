'use client'

import { useEffect } from 'react'
import { io } from 'socket.io-client'
import type { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'

type ioOptsType = {
	reconnection: boolean
	timeout: number // timeout 5 seconds
	multiplex: boolean
	transports: string[]
	query: {
		gubun: string
		pathUrl: string
		sessKey?: string
		id?: string
		memNo?: string
		media?: string
		cookie?: string
	}
}

type PacketDataType = {
	command: 'test' | 'logout'
	gubun: 'test'
	data?: unknown
}

type Props = {
	cookies: ReadonlyRequestCookies
}

const SessionComponent = ({ cookies }: Props) => {
	const ioOpts: ioOptsType = {
		reconnection: true,
		timeout: 5000,
		multiplex: false,
		transports: ['websocket'],
		query: {
			gubun: "test",
			pathUrl: '/',
		},
	}

	useEffect(() => {
		const socket = io(process.env.NEXT_PUBLIC_SOCKET_SERVER_URL as string, ioOpts)

		socket.on('connect', () => {
			console.log('connected')
		})

		socket.on('connect_error', (e) => {
			console.log('error', e)
		})

		socket.on('disconnect', () => {
			console.log('disconnected')
		})

		socket.on('p2pMessage', (data: PacketDataType) => {
			switch (data.command) {
				case 'test':
					console.log(data)
					break
				case 'logout':
					console.log(data)
					socket.disconnect()
					break
			}
		})

		return () => {
			socket.disconnect()
		}
	}, [])

	return null
}

export default SessionComponent
