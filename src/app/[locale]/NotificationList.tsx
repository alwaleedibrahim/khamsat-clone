import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ar, enUS } from 'date-fns/locale';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

interface NotificationItem {
  type: string;
  id: string;
  message: string;
  status: 'rejected' | 'accepted' | 'pending' | 'beyService';
  serviceLink: string;
  serviceTitle: string;
  timestamp: string;
}

export default function NotificationList({
  notifications
}: {
  notifications: NotificationItem[]
}) {
  const t = useTranslations('Notifications');
  const locale = useLocale();
  const dateLocale = locale === 'ar' ? ar : enUS;

  const getStatusMessage = (status: string) => {
    switch (status) {
      case 'rejected':
        return t('serviceRejected');
      case 'accepted':
        return t('serviceAccepted');
      case 'pending':
        return t('servicePending');
      default:
        return '';
    }
  };

  const formatTimeAgo = (timestamp: string) => {
    const date = new Date(timestamp);
    return formatDistanceToNow(date, {
      addSuffix: true,
      locale: dateLocale
    });
  };

  return (
    <div className="space-y-4">
      {notifications.map((notification, index) => {
        console.log(notification)
        if (notification.status == 'beyService')
          return (
            <div
              key={index}
              className="p-4 bg-white rounded-lg shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="flex flex-col gap-2">
                <div className="text-gray-800">
                  {notification.message}
                </div>

                <div className="flex items-center text-gray-500 text-sm">
                  <i className="far fa-clock mr-2" />
                  <time dateTime={notification.timestamp}>
                    {formatTimeAgo(notification.timestamp)}
                  </time>
                </div>
              </div>
            </div>
          )
          return ((
            <div
              key={index}
              className="p-4 bg-white rounded-lg shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="flex flex-col gap-2">
                <div className="text-gray-800">
                  {getStatusMessage(notification.status)}
                  <Link href={notification.serviceLink}>
                    <span className="text-blue-600 hover:text-blue-800 mx-1">
                      {notification.serviceTitle}
                    </span>
                  </Link>
                </div>

                <div className="flex items-center text-gray-500 text-sm">
                  <i className="far fa-clock mr-2" />
                  <time dateTime={notification.timestamp}>
                    {formatTimeAgo(notification.timestamp)}
                  </time>
                </div>
              </div>
            </div>
          ))
      })}
    </div>
  );
}
