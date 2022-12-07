import { useState, useEffect } from 'react';

const useWebSocket = ( url:string ) => {
	const [ws, setWs] = useState<WebSocket>();

	useEffect(() => {
			 const websocket = new WebSocket(url);
			 setWs(websocket);

			 return () => {
				 websocket.close();
			 }
	},[url]);

	return ws;
}

export default useWebSocket;
