import { io, Socket } from "socket.io-client";

interface ServerToClientEvents {
	response: (data: { message: string }) => void;
}

interface ClientToServerEvents {
	message: (data: string) => void;
}

type ioOptsType = {
	reconnection: boolean
	reconnectionAttempts: number
	autoConnect: boolean
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

const ioOpts: ioOptsType = {
	reconnection: true,
	reconnectionAttempts: 5,
	autoConnect: true,
	timeout: 5000,
	multiplex: false,
	transports: ['websocket'],
	query: {
		gubun: process.env.NEXT_PUBLIC_SOCKET_SERVER_GUBUN as string,
		pathUrl: '/',
		cookie: '',
	},
}
// Socket.IO 클라이언트 생성
const socket: Socket<ServerToClientEvents, ClientToServerEvents> =
	io(process.env.NEXT_PUBLIC_SOCKET_SERVER_URL || "http://localhost:4000", ioOpts);

export default socket;
