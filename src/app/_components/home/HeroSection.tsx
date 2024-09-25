import ButtonA from "../reusable/buttons/ButtonA";
import ButtonB from "../reusable/buttons/ButtonB";
import TagButton from "../reusable/buttons/TagButton";
import SearchForm from "../reusable/search-form/SearchForm";
const words = ["تصميم داخلي", "ووردبريس", "هوية بصريه", "استشارات تسويقية"];
export default function HeroSection() {
  return (
    <div className="bg-[url('/images/hero-img.webp')] bg-cover bg-no-repeat bg-center py-[150px]">
      <h1 className="text-3xl pb-[20px]">أكبر سوق عربي للخدمات المصغرة</h1>
      <p className="text-sm">أنجز أعمالك بسهولة وأمان بأسعار تبدأ من 5$ فقط</p>
      <div className="py-10 max-w-3xl mx-auto">
        <SearchForm />
        <div className=" text-start pt-3">
          كلمات شائعة {" "}
          {words.map((word) => (
            <TagButton
              text={`${word} `}
              extraStyle="text-xs hover:bg-primary"
            ></TagButton>
          ))}
        </div>
      </div>
    </div>
  );
}
