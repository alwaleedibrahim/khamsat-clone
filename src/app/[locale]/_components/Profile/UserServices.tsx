import React from 'react'
import ServiceCard from '../reusable/service-card/ServiceCard'

const UserServices = () => {
  return (
    <div className="flex flex-col lg:bg-transparent bg-white py-[20px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-container-space">
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
      </div>
    </div>
  )
}

export default UserServices