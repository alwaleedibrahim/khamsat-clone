import React from 'react'
import ButtonB from '../reusable/buttons/ButtonB'
import ServiceCard from '../reusable/service-card/ServiceCard'

const RecommendServices = () => {
    return (
        <div className="mx-auto p-section bg-white">
            <div className="flex justify-between items-center mb-4 px-4">
                <div className="text-2xl text-style1 font-kufi ">
                    <a href="/recommendations">خدمات نرشحها لك</a>
                </div>
                <ButtonB text='عرض المزيد' extraStyle='text-[14px] px-[8px] py-[4px]' />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
                <ServiceCard
                    title="دورة CFPS، النجاح في امتحان CFPS في متناول يدك"
                    category="تعليم عن بعد"
                    subCategory="شروحات هندسية"
                    images={[
                        'https://picsum.photos/200/300',
                        'https://picsum.photos/200/301',
                        'https://picsum.photos/200/302'
                    ]}
                    authorImg="/images/R.jfif"
                    rating={3.5}
                    price="10.00"
                />

                <ServiceCard
                    title="دورة CFPS، النجاح في امتحان CFPS في متناول يدك"
                    category="تعليم عن بعد"
                    subCategory="شروحات هندسية"
                    images={[
                        'https://picsum.photos/200/301',
                        'https://picsum.photos/200/300',
                        'https://picsum.photos/200/302'
                    ]}
                    authorImg="/images/R.jfif"
                    rating={0}
                    price="10.00"
                />

                <ServiceCard
                    title="دورة CFPS، النجاح في امتحان CFPS في متناول يدك"
                    category="تعليم عن بعد"
                    subCategory="شروحات هندسية"
                    images={[
                        'https://picsum.photos/200/302',
                        'https://picsum.photos/200/301',
                        'https://picsum.photos/200/300'
                    ]}
                    authorImg="/images/R.jfif"
                    rating={5}
                    price="10.00"
                />

                <ServiceCard
                    title="دورة CFPS، النجاح في امتحان CFPS في متناول يدك"
                    category="تعليم عن بعد"
                    subCategory="شروحات هندسية"
                    images={[
                        'https://picsum.photos/200/300',
                        'https://picsum.photos/200/301',
                        'https://picsum.photos/200/302'
                    ]}
                    authorImg="/images/R.jfif"
                    rating={4.5}
                    price="10.00"
                />
            </div>
        </div>
    )
}

export default RecommendServices