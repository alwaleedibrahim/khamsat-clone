"use client"
import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { useSelector } from 'react-redux';

interface Notification {
  id: string;
  message: string;
  status: 'rejected' | 'accepted' | 'pending';
  serviceLink: string;
  serviceTitle: string;
  timestamp: string;
  read?: boolean;
}

interface NotificationContextType {
  notifications: Notification[];
  clearNotifications: () => void;
  setNotifications: React.Dispatch<React.SetStateAction<Notification[]>>;
  socket: Socket | null;
  unreadCount: number;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
}

const NotificationContext = createContext<NotificationContextType>({
  notifications: [],
  clearNotifications: () => { },
  setNotifications: () => { },
  socket: null,
  unreadCount: 0,
  markAsRead: () => { },
  markAllAsRead: () => { },
});

export const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);
  const username = useSelector((state: any) => state.profile.user?._id);
  console.log(username)
  const flibCardAudio = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!username) return;

    const initializeSocket = () => {
      try {
        const newSocket = io(process.env.NEXT_PUBLIC_API_BASE_URL as string, {
          reconnection: true,
          reconnectionAttempts: 5,
          reconnectionDelay: 1000,
        });

        newSocket.on('connect', () => {
          newSocket.emit('register', username);
        });

        newSocket.on('notification', (data) => {
          try {
            const newNotification = {
              id: data.notification.id,
              message: data.notification.message,
              timestamp: new Date().toISOString(),
              status: data.notification.status,
              serviceLink: data.notification.serviceLink,
              serviceTitle: data.notification.serviceTitle,
              read: false,
            };
            flibCardAudio.current?.play();
            setNotifications(prev => [newNotification, ...prev]);
          } catch (error) {
            console.error('Error processing notification:', error);
          }
        });
        setSocket(newSocket);
        return newSocket;
      } catch (error) {
        console.error('Error initializing socket:', error);
        return null;
      }
    };

    const socket = initializeSocket();

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [username]);

  useEffect(() => {
    const savedNotifications = localStorage.getItem('notifications');
    console.log(localStorage.getItem('notifications'))
    flibCardAudio.current = new Audio('/audio/notify.mp3');
    if (savedNotifications) {
      setNotifications(JSON.parse(savedNotifications));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notifications', JSON.stringify(notifications));
  }, [notifications]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const clearNotifications = () => {
    setNotifications(prev => prev.filter(n => n.read));
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        clearNotifications,
        setNotifications,
        socket,
        unreadCount,
        markAsRead,
        markAllAsRead,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};


export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};