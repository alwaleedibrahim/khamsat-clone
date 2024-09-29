import React from 'react'

interface IUserObjectProps{
    userDescription?:string
}

const UserObjective:React.FC<IUserObjectProps> = ({userDescription}) => {
    return (
        <div className="bg-white">
            <h5 className='py-[14px] px-[20px] font-kufi border-b-[1px] border-[#F1F1F1]'>
                نبذة عني  
            </h5>
            <div className="grid grid-cols-2 gap-4 font-kufi text-[14px] p-container-space">
                <p className='whitespace-pre-wrap text-[16px] font-naskh font-[300] leading-[2]'>
                    {
                        userDescription ?  userDescription : 'لم يكتب نبذة شخصية'
                    }
                </p>
            </div>
        </div>
    )
}

export default UserObjective