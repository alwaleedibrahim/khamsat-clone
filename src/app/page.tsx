import DoWork from "./_components/doWork/doWork";
import HeroSection from "./_components/home/HeroSection";
import QuestionSection from "./_components/home/QuestionSection";
import RecommendServices from "./_components/home/RecommendServices";
import SnippetSection from "./_components/home/SnippetSection";
import AllCategoriesSection from "./_components/home/category-card/AllCategoriesSection";
import CallToActionSection from "./_components/home/CallToActionSection";
import WhyUs from "./_components/whyUs/whyUs";
import Services from "./_components/popularServices/services";


export default function Home() {
  return (
    <div className="text-center pt-[4rem]">
      <HeroSection/>
      <AllCategoriesSection />
      <Services />
      <DoWork />
      <WhyUs />
      <RecommendServices/>
      <SnippetSection/>
      <QuestionSection/>
      <CallToActionSection />
    </div>
  );
}
