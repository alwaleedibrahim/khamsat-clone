import TagButton from "../reusable/buttons/TagButton";
import SearchForm from "../reusable/search-form/SearchForm";
import { useLocale, useTranslations } from "next-intl";
export default function HeroSection() {
  const t = useTranslations('HomePage');
  const localActive = useLocale();

  const words = localActive === 'ar' 
  ? ["تصميم داخلي", "ووردبريس", "هوية بصريه", "استشارات تسويقية"]
  : ["Interior Design", "WordPress", "Brand Identity", "Marketing Consulting"];

  return (
    <div className="bg-[url('/images/hero-img.webp')] bg-cover bg-no-repeat bg-center p-section">
      <h1 className="text-4xl pb-6 font-kufi">{t('HeroSection.title')}</h1>
      <p className="text-base font-naskh">{t('HeroSection.pricees')}</p>
      <div className="py-10 max-w-3xl mx-auto p-container-space">
        <SearchForm />
        <div className="flex pt-3 font-kufi">
          <span className="py-[4px]">
            {t('HeroSection.common')} :
          </span>
          <div className="flex items-center gap-1 w-[70%] mx-2 flex-wrap">
            <TagButton
              text={`${words[0]} `}
              extraStyle="text-xs hover:bg-primary hover:text-white"
            />
            <TagButton
              text={`${words[1]} `}
              extraStyle="text-xs hover:bg-primary hover:text-white"
            />
            <TagButton
              text={`${words[2]} `}
              extraStyle="text-xs hover:bg-primary hover:text-white"
            />
            <TagButton
              text={`${words[3]} `}
              extraStyle="text-xs hover:bg-primary hover:text-white hidden sm:block"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
