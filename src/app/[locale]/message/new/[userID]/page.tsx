"use client"
import React, { useState, useContext } from 'react';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const alertify = require("alertifyjs");
import "alertifyjs/build/css/alertify.rtl.css";
import "../../../alertify.css";
import { NotificationContext } from '@/app/[locale]/NotificationProvider';
import ButtonA from '@/app/[locale]/_components/reusable/buttons/ButtonA';

const MessageForm = ({ params }: { params: { userID: string } }) => {
    const [message, setMessage] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [noExternalLinks, setNoExternalLinks] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { socket, setNotifications } = useContext(NotificationContext);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!acceptTerms || !noExternalLinks) {
            alertify.alert('تنبيه', 'الرجاء الموافقة على جميع الشروط');
            return;
        }

        if (!message.trim()) {
            alertify.alert('تنبيه', 'الرجاء كتابة رسالة');
            return;
        }

        try {
            setIsLoading(true);

            // إرسال الرسالة إلى الخادم
            const response = await fetch(`/api/messages`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    recipientId: params.userID,
                    content: message,
                }),
            });

            if (!response.ok) {
                throw new Error('فشل في إرسال الرسالة');
            }

            const data = await response.json();

            // إرسال إشعار عبر Socket.IO
            if (socket) {
                socket.emit('sendNotification', {
                    recipientId: params.userID,
                    type: 'NEW_MESSAGE',
                    message: 'لديك رسالة جديدة',
                    data: {
                        messageId: data.messageId,
                        senderId: data.senderId,
                        content: message
                    }
                });
            }


            alertify.success('تم إرسال الرسالة بنجاح');
            
            // إعادة تعيين النموذج
            setMessage('');
            setAcceptTerms(false);
            setNoExternalLinks(false);

        } catch (error) {
            console.error('Error sending message:', error);
            alertify.error('حدث خطأ أثناء إرسال الرسالة');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} dir='rtl' className="max-w-2xl mx-auto p-4 space-y-4 text-right pt-[100px] font-kufi">
            <div className="space-y-2">
                <h2 className="text-xl font-semibold">محتوى الرسالة</h2>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full h-32 p-2 border resize-none"
                    dir="rtl"
                    disabled={isLoading}
                />
                <p className="text-sm text-gray-600 font-naskh" >
                    أسأل مقدم الخدمة ما تريد معرفته عن هذه الخدمة. يمنع وضع وسائل تواصل خارجية.
                </p>
            </div>

            <div className="space-y-2">
                <label className="flex items-center justify-start space-x-2 space-x-reverse">
                    <input
                        type="checkbox"
                        checked={noExternalLinks}
                        onChange={(e) => setNoExternalLinks(e.target.checked)}
                        className="w-4 h-4"
                        disabled={isLoading}
                    />
                    <span>هذه الرسالة لا تحتوي على وسائل تواصل خارجية وأرسلها لأني أرغب بشراء الخدمة المعروضة.</span>

                </label>

                <label className="flex items-center justify-start space-x-2 space-x-reverse">
                    
                    <input
                        type="checkbox"
                        checked={acceptTerms}
                        onChange={(e) => setAcceptTerms(e.target.checked)}
                        className="w-4 h-4"
                        disabled={isLoading}
                    />
                    <span>
                        لقد راجعت{' '}
                        <a href="#" className="text-primary hover:underline">
                            شروط موقع خمسات
                        </a>{' '}
                        وهذه الرسالة لا تخالفها بشيء.
                    </span>
                </label>
            </div>

            <div className="flex justify-start">
                <ButtonA
                    text={isLoading ? 'جاري الإرسال...' : 'أرسل الرسالة'}
                    extraStyle='bg-primary text-white px-6 py-2 hover:bg-green-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed'
                >
                    
                </ButtonA>
            </div>
        </form>
    );
};

export default MessageForm;