
import React, { createContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export const SocketContext = createContext();

const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const backendUrl = import.meta.env.VITE_BASE_URL;
        
        if (!backendUrl) {
            console.error('VITE_BASE_URL is not defined in .env file');
            return;
        }

        const newSocket = io(backendUrl, {
            transports: ['websocket'],
            withCredentials: true,
        });

        newSocket.on('connect', () => {
            console.log('Connected to server:', newSocket.id);
        });

        newSocket.on('disconnect', () => {
            console.log('Disconnected from server');
        });

        newSocket.on('connect_error', (err) => {
            console.error('Socket connection error:', err.message);
        });

        setSocket(newSocket);

        return () => {
            newSocket.close();
        };
    }, []);

    return (
        <SocketContext.Provider value={{ socket }}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketProvider;