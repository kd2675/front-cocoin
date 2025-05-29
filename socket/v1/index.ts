import { useRef } from 'react';
import { CompatClient, Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const useSocket = (url: string) => {
	const clientRef = useRef<CompatClient | null>(null);

	const connect = (onConnected: () => void, onError: () => void) => {
		clientRef.current = Stomp.over(() => new SockJS(url));
		clientRef.current.connect({}, onConnected, onError);
	};

	const disconnect = () => {
		clientRef.current?.disconnect(() => console.log('Disconnected'));
	};

	const subscribe = (destination: string, callback: (message: any) => void) => {
		return clientRef.current?.subscribe(destination, (msg) =>
			callback(JSON.parse(msg.body))
		);
	};

	const publish = (destination: string, body: any) => {
		clientRef.current?.send(destination, {}, JSON.stringify(body));
	};

	return { connect, disconnect, subscribe, publish };
};

export default useSocket;