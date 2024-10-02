import React from 'react'
import UserProfileHeader from '../_components/Profile/UserProfileHeader'
import UserStatistic from '../_components/Profile/reusable/UserStatistic'
import UserObjective from '../_components/Profile/reusable/UserObjective';
import UserVerifications from '../_components/Profile/reusable/UserVerifications';
import UserServices from '../_components/Profile/reusable/UserServices';

const page = () => {
    const testData = {
        ratings: {
            average: 4.5,
            count: 125,
        },
        orderCompleted: "لم يحسب بعد",
        activeServices: 12,
        clients: 50,
        responseTime: 'لم يحسب',
        JoinedDate: '25 مارس 2022',
        lastSeen: 'الآن',
    };
    return (
        <div>
            <div>
                <UserProfileHeader />
            </div>

            <div className="flex flex-col lg:bg-transparent bg-white py-[20px]">
                <div className="flex lg:flex-row flex-col w-full justify-center">
                    <div className="lg:w-[68%] w-[100%] lg:p-sm-screen">
                        <div className='w-full lg:p-sm-screen'>
                            <UserObjective/>
                        </div>
                        <div className='w-full lg:p-sm-screen mt-[30px]'>
                            <UserServices/>
                        </div>
                    </div>
                    <div className="lg:w-[32%] w-[100%] lg:p-sm-screen">
                        <div className='w-full lg:p-sm-screen'>
                            <UserStatistic data={testData} />
                        </div>
                        <div className='w-full lg:p-sm-screen  mt-[30px]'>
                            <UserVerifications/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page