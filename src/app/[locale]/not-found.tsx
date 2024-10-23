import Link from "next/link";
import ButtonA from "./_components/reusable/buttons/ButtonA";

export default function NotFound() {
  return (
    <div className="flex justify-center w-full">
      <div className="mt-24 mb-20 px-20 bg-white flex flex-col items-center">
        <h2 className="font-kufi text-lg py-3 border-b-2 w-full text-center">الصفحة المطلوبة غير موجودة</h2>
        <div className="flex flex-col items-center">
          <div className="text-primary text-[200px] font-bold">404</div>
          <div className="font-naskh text-lg">للأسف لم نتمكن من العثور على الصفحة التي طلبتها. ما رأيك أن تجرب البحث بالموقع؟</div>
        </div>
        <Link href="/" className="my-10"><ButtonA text='الرجوع إلى الرئيسية'/></Link>
      </div>
    </div>
  );
}
