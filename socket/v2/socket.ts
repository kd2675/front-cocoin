import { io, Socket } from "socket.io-client";

interface ServerToClientEvents {
	response: (data: { message: string }) => void;
}

interface ClientToServerEvents {
	sendNotice: (data: { command: string, message: string }) => void;
	message: (data: { command: string,  message: string }) => void;
}

type ioOptsType = {
	autoConnect: boolean
	reconnection: boolean
	reconnectionAttempts: number
	reconnectionDelay: number,
	reconnectionDelayMax: number,
	timeout: number
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
		token?: string
	}
}

const ioOpts: ioOptsType = {
	autoConnect: true,
	reconnection: true,
	reconnectionAttempts: 5,
	reconnectionDelay: 1000 * 5, // 5초
	reconnectionDelayMax: 1000 * 60,
	timeout: 5000,
	multiplex: false,
	transports: ['websocket', 'polling'],
	query: {
		gubun: process.env.NEXT_PUBLIC_SOCKET_SERVER_GUBUN as string,
		pathUrl: '/',
		token: ''
	},
}
// Socket.IO 클라이언트 생성
const socket: Socket<ServerToClientEvents, ClientToServerEvents> =
	io(process.env.NEXT_PUBLIC_SOCKET_SERVER_URL || "http://localhost:4000", ioOpts);

export default socket;
