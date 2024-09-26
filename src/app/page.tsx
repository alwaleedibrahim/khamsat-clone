import DoWork from "./_components/doWork/doWork";
import RecommendServices from "./_components/home/RecommendServices";
import SnippetSection from "./_components/home/SnippetSection";
import ButtonB from "./_components/reusable/buttons/ButtonB";
import TagButton from "./_components/reusable/buttons/TagButton";
import SearchForm from "./_components/reusable/search-form/SearchForm";

export default function Home() {
  return (
    <div className="text-center">
      <SnippetSection/>
      <RecommendServices/>
      <div className=" h-[100] p-section">
        <SearchForm />
      </div>
      <DoWork />
      <ButtonB text="خدمات مميزة" />
      <TagButton text="اول hover" extraStyle="hover:bg-primary" />
      <TagButton text="تانى hover" extraStyle="hover:bg-bColor" />
    </div>
  );
}
