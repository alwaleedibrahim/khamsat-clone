import React from "react";
// import ServicesCollection from "../_components/home/ServicesCollection";
// import ServiceCard from "../_components/reusable/service-card/ServiceCard";
import OrdersSidebar from "../_components/filter-sidebar/OrdersSidebar";

export default function page() {
  // !!! Fill this data dynamically
  const orders = [{
    title: {
      ar: "دورة CFPS، النجاح في امتحان CFPS في متناول يدك",
      en: "دورة CFPS، النجاح في امتحان CFPS في متناول يدك"
  },
  category: {
      name: {
          ar: "تعليم عن بعد",
          en: "تعليم عن بعد"
      }
  },
  subcategory: {
      title: {
          ar:"تعليم عن بعد",
          en: "تعليم عن بعد"
      }
  },
  images: [
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/301",
    "https://picsum.photos/200/302",
  ],
  authorImg: "/images/R.jfif",
  serviceCard: {
      totalRated: 5,
      totalReviewers: 10,
  },
  price: 231
}]
  return (
    <div className="pt-20 container">
      <div className="flex flex-wrap p-section">
        <div className="hidden lg:flex lg:w-2/6">
          <OrdersSidebar />
        </div>
        <div className="w-full lg:w-4/6">
        {!orders && <>
        <div className="bg-white w-full p-5">
          <p className='font-naskh text-lg text-center'>لا يوجد طلبات</p>
        </div>
        </>}
          {/* <ServicesCollection> */}
            {/* <ServiceCard serviceData={{
                title: {
                  ar: "دورة CFPS، النجاح في امتحان CFPS في متناول يدك",
                  en: "دورة CFPS، النجاح في امتحان CFPS في متناول يدك"
              },
              category: {
                  name: {
                      ar: "تعليم عن بعد",
                      en: "تعليم عن بعد"
                  }
              },
              subcategory: {
                  title: {
                      ar:"تعليم عن بعد",
                      en: "تعليم عن بعد"
                  }
              },
              images: [
                "https://picsum.photos/200/300",
                "https://picsum.photos/200/301",
                "https://picsum.photos/200/302",
              ],
              authorImg: "/images/R.jfif",
              serviceCard: {
                  totalRated: 5,
                  totalReviewers: 10,
              },
              price: 231
            }}
              /> */}
          {/* </ServicesCollection> */}
        </div>
      </div>
    </div>
  );
}
