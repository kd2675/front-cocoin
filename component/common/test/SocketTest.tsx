'use client'

import { useState } from 'react'
import socket from '@/socket/v2/socket'

type PropsType = {

};

const SocketTest = (props: PropsType) => {
	const [input, setInput] = useState<string>("")

	const sendMessage = (): void => {
		if (input.trim()) {
			socket.emit('message', { command: 'test', message: input }) // 서버로 메시지 전송
			setInput(""); // 입력 초기화
		}
	};

	return (
		<>
			<div>
				<h1>Next.js + TypeScript + Socket.IO</h1>
				<input
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Type a message"
				/>
				<button onClick={sendMessage}>Send</button>
			</div>
		</>
	)
}

export default SocketTest