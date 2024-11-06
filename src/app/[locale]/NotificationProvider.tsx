"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { useSelector } from 'react-redux';

interface Notification {
  id?: string;
  type?:string;
  message: string;
  status?: 'rejected' | 'accepted' | 'pending';
  serviceLink?: string;
  serviceTitle?: string;
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

export const NotificationContext = createContext<NotificationContextType>({
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
          console.log('Socket connected');
          newSocket.emit('register', username);
        });

        newSocket.on('notification', (data) => {
          console.log(data)
          if (data.notification.type) {
            console.log("moooooooooooooo", data.notification.type)
            console.log("mooo", data)
            try {
              const newNotification = {
                id: data.notification.id || '',
                message: data.notification.message,
                timestamp: new Date().toISOString(),
                status: data.notification.status,
                serviceLink: data.notification.serviceLink,
                serviceTitle: data.notification.serviceTitle,
                read: false,
              };

              setNotifications(prev => [newNotification, ...prev]);
            } catch (error) {
              console.error('Error processing notification:', error);
            }
          } else {
            try {
              const newNotification = {
                id: data.notification.id || '',
                message: data.notification.message,
                timestamp: new Date().toISOString(),
                status: data.notification.status,
                serviceLink: data.notification.serviceLink,
                serviceTitle: data.notification.serviceTitle,
                read: false,
              };

              setNotifications(prev => [newNotification, ...prev]);
            } catch (error) {
              console.error('Error processing notification:', error);
            }
          }

        });

        newSocket.on('disconnect', () => {
          console.log('Socket disconnected');
        });

        newSocket.on('error', (error) => {
          console.error('Socket error:', error);
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

  // Load saved notifications from localStorage
  useEffect(() => {
    try {
      const savedNotifications = localStorage.getItem('notifications');
      if (savedNotifications) {
        setNotifications(JSON.parse(savedNotifications));
      }
    } catch (error) {
      console.error('Error loading saved notifications:', error);
    }
  }, []);

  // Save notifications to localStorage when they change
  useEffect(() => {
    try {
      localStorage.setItem('notifications', JSON.stringify(notifications));
    } catch (error) {
      console.error('Error saving notifications:', error);
    }
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