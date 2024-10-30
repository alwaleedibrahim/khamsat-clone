"use client"
import React, { useState } from 'react'
import UserProfileHeader from '../_components/Profile/UserProfileHeader'
import Profile from '../_components/Profile/Profile';
import UserServices from '../_components/Profile/UserServices';

const Page = () => {
    const [activeTab, setActiveTab] = useState('profile');

    const handleActiveTab = (e: React.MouseEvent<HTMLElement>) => {
        const tab = e.currentTarget.getAttribute('data-tab');
        if (tab) {
            setActiveTab(tab);
        }
    }
    return (
        <div>
            <div>
                <UserProfileHeader   activeTab={activeTab} handleActiveTab={handleActiveTab} />
            </div>

            {activeTab === 'profile' && <Profile />}
            {activeTab === 'services' && <UserServices />}
        </div>
    )
}

export default Page