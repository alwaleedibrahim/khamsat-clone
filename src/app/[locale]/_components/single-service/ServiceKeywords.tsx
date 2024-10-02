import React from 'react'
import TagButton from '../reusable/buttons/TagButton'

const ServiceKeywords = () => {
    return (
        <div className='bg-white'>
            <h5 className='py-[14px] px-[20px] font-kufi border-b-[1px] border-[#F1F1F1]'>
            كلمات مفتاحية
            </h5>

            <div className='flex gap-2 p-container-space'>
                <TagButton text='ios' extraStyle='hover:bg-[#777] hover:text-white'/>
                <TagButton text='React' extraStyle='hover:bg-[#777] hover:text-white'/>
                <TagButton text='برمجة' extraStyle='hover:bg-[#777] hover:text-white'/>
                <TagButton text='Develope' extraStyle='hover:bg-[#777] hover:text-white'/>
            </div>
        </div>
    )
}

export default ServiceKeywords