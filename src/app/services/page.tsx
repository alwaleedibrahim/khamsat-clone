import React from "react";
import Sidebar from "../_components/filter-sidebar/Sidebar";
import ServicesCollection from "../_components/home/ServicesCollection";
import ServiceCard from "../_components/reusable/service-card/ServiceCard";

export default function page() {
  return (
    <div className="pt-20 container">
      <div className="flex flex-wrap">
        <div className="hidden lg:flex lg:w-2/6">
          <Sidebar />
        </div>
        <div className="w-full lg:w-4/6">
          <ServicesCollection>
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
          </ServicesCollection>
        </div>
      </div>
    </div>
  );
}
