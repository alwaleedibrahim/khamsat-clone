import Sidebar from '@/app/[locale]/_components/filter-sidebar/Sidebar'
import ServicesCollection from '@/app/[locale]/_components/home/ServicesCollection'
import ServiceCard from '@/app/[locale]/_components/reusable/service-card/ServiceCard'
import { fetchServices } from '@/app/[locale]/_lib/services'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function page({params: {locale, category, subcategory}, searchParams}) {
  
  const services = await fetchServices(`categoryName=${category}&subcategoryName=${subcategory}${searchParams.q? `&title=${searchParams.q}`:`` }`)
  
  return (
    <div className="pt-20 mx-auto w-full xl:container p-container-space">
      <div className="flex flex-wrap p-section">
        <div className="hidden lg:flex lg:w-[24%]">
          <Sidebar filters={{category, subcategory}} />
        </div>
        <div className="w-full lg:w-[76%]">
        {!services && <>
        <div className="bg-white w-full p-5">
          <p className='font-naskh text-lg text-center'>للأسف لم يتم العثور على نتائج تطابق بحثك.</p>
        </div>
        </>}
        <ServicesCollection>
        {services?.map((service, index) => (
                <ServiceCard key={index} serviceData={service} /> 
            ))}
          </ServicesCollection>
        </div>
      </div>
    </div>
  )
}
