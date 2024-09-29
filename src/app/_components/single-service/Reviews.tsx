import React from 'react';
import UserReview, { ReviewProps } from './reusable/UserReview';
import ButtonB from '../reusable/buttons/ButtonB';

interface IReviews {
    reviews: ReviewProps[];
}

const Reviews: React.FC<IReviews> = ({ reviews }) => {
    return (
        <div>
            <div className="bg-white">
                <h5 className='py-[14px] px-[20px] font-kufi border-b-[1px] border-[#F1F1F1]'>
                    آراء المشترين
                </h5>
                {reviews.map((reply, index) => (
                    <UserReview key={index} {...reply} />
                ))}
            </div>
            <div className='text-center mt-[20px] mb-[30px] pt-[20px]'>
                <ButtonB text="عرض المزيد" extraStyle='py-[6px] px-[12px]' />
            </div>
        </div>

    );
};

export default Reviews;
