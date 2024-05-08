'use client'

import { createContext, MutableRefObject, useContext } from 'react'
import { CompatClient } from '@/node_modules/@stomp/stompjs'


export const SocketContext = createContext<MutableRefObject<CompatClient | undefined>|null>(null)
export const useSocketClient = () => useContext(SocketContext)