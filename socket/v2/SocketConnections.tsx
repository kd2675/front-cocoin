'use client'

import { useEffect } from 'react'
import socket from './socket'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { modalActions } from '@redux/reducers/modal'

type PacketDataType = {
	command?: string
	message?: string
}

const SocketConnection = (): null => {
	const dispatch = useDispatch()
	const router = useRouter()

	useEffect(() => {
		socket.on('connect', () => {
			console.log(`Connected to server: ${socket.id}`)
		})

		socket.on('connect_error', (e) => {
			console.log('error', e)
		})

		socket.on('disconnect', () => {
			console.log('disconnected')
		})

		socket.on('response', (data: PacketDataType) => {
			console.log(data)
			switch (data.command) {
				case 'test':
					dispatch(modalActions.addNoti({title: 'test', msg: data.message}))
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

	return null // UI 요소 없음
}

export default SocketConnection
