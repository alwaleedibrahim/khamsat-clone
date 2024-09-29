import { BsCart3 } from "react-icons/bs";
import ButtonA from "../buttons/ButtonA";

const ServiceHeader = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-6 flex flex-col lg:flex-row justify-between items-center font-kufi">

        {/* Right Side: Breadcrumb and Title */}
        <div className="text-right lg:w-3/4">
          <div className="text-sm text-gray-500">
            <a href="#" className="hover:text-gray-700 transition-all">الرئيسية</a>
            <span className="mx-1">/</span>
            <a href="#" className="hover:text-gray-700 transition-all">كتابة وترجمة</a>
            <span className="mx-1">/</span>
            <a href="#" className="hover:text-gray-700 transition-all">محتوى متخصص</a>
            <span className="mx-1">/</span>
            <a href="#" className="hover:text-gray-700 transition-all">محتوى قانوني</a>
          </div>

          {/* Title */}
          <h1 className="text-2xl mt-2">
            بيع كتابي مراجعة دستورية لجريمة التواجد لغاية غير مشروعة
          </h1>
        </div>

        {/* Left Side: Button */}
        <div className="lg:ml-10 mb-4 lg:mb-0">
          <div className="relative"> 
            <ButtonA 
              text="ادفع عن طريق PayPal"
              extraStyle="flex items-center pr-8" 
            />
            <BsCart3 className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceHeader;
