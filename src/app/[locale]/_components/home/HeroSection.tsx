import TagButton from "../reusable/buttons/TagButton";
import SearchForm from "../reusable/search-form/SearchForm";
const words = ["تصميم داخلي", "ووردبريس", "هوية بصريه", "استشارات تسويقية"];
export default function HeroSection() {
  return (
    <div className="bg-[url('/images/hero-img.webp')] bg-cover bg-no-repeat bg-center p-section">
      <h1 className="text-4xl pb-6 font-kufi">أكبر سوق عربي للخدمات المصغرة</h1>
      <p className="text-base font-naskh">أنجز أعمالك بسهولة وأمان بأسعار تبدأ من 5$ فقط</p>
      <div className="py-10 max-w-3xl mx-auto p-container-space">
        <SearchForm />
        <div className="flex pt-3 font-kufi">
          <span className="py-[4px]">
            كلمات شائعة:
          </span>
          <div className="flex items-center gap-1 w-[70%] mx-2 flex-wrap">
          {words.map((word, index) => (
            <TagButton
              text={`${word} `}
              key={index}
              extraStyle="text-xs hover:bg-primary hover:text-white"
            />
          ))}
          </div>

        </div>
      </div>
    </div>
  );
}
