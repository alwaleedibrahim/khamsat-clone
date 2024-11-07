import Sidebar from "@/app/[locale]/_components/filter-sidebar/Sidebar";
import ServicesCollection from "@/app/[locale]/_components/home/ServicesCollection";
import ServiceCard, { ServicesCard } from "@/app/[locale]/_components/reusable/service-card/ServiceCard";
import { fetchServices } from "@/app/[locale]/_lib/services";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function page({
  searchParams: { category, subcategory, q },
}: {
  searchParams: {
    category: string | undefined;
    subcategory: string | undefined;
    q: string | undefined;
  };
}) {
  const services = await fetchServices(
    `${category? `categoryName=${category}`: ``}${subcategory? `&subcategoryName=${subcategory}` : ``}${
      q ? `&title=${q}` : ``
    }`
  );

  return (
    <div className="pt-20 mx-auto w-full xl:container p-container-space">
      <div className="flex flex-wrap p-section">
        <div className="hidden lg:flex lg:w-[24%]">
          <Sidebar filters={{ category: category? category : ``, subcategory: subcategory? subcategory : `` }} />
        </div>
        <div className="w-full lg:w-[76%]">
          {!services[0] && (
            <>
              <div className="bg-white w-full p-5">
                <p className="font-naskh text-lg text-center">
                  للأسف لم يتم العثور على نتائج تطابق بحثك.
                </p>
              </div>
            </>
          )}
          <ServicesCollection>
            {services?.map((service: ServicesCard, index: number) => (
              <ServiceCard key={index} serviceData={service} />
            ))}
          </ServicesCollection>
        </div>
      </div>
    </div>
  );
}
