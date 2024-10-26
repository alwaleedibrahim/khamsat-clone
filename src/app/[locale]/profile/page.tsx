"use client"
import React, { useState } from 'react'
import UserProfileHeader from '../_components/Profile/UserProfileHeader'
import Profile from '../_components/Profile/Profile';
import UserServices from '../_components/Profile/UserServices';
import { TypedUseSelectorHook, useSelector as useReduxSelector } from "react-redux";
import { RootState } from '../_lib/redux/store';
import { redirect } from 'next/navigation';
import { useLocale } from 'next-intl';

const Page = () => {
    const [activeTab, setActiveTab] = useState('profile');

    const handleActiveTab = (e: React.MouseEvent<HTMLElement>) => {
        const tab = e.currentTarget.getAttribute('data-tab');
        if (tab) {
            setActiveTab(tab);
        }
    }
    const localActive = useLocale();
    const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
    const isAuthenticated : boolean = useSelector((state)=> state.auth.isAuthenticated)
    if (!isAuthenticated) {
        redirect(`/${localActive}/login?redirect=profile`)
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