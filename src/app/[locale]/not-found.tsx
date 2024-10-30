import Link from "next/link";
import ButtonA from "./_components/reusable/buttons/ButtonA";
import {useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("not_found");
  return (
    <div className="flex justify-center w-full">
      <div className="mt-24 mb-20 px-20 bg-white flex flex-col items-center">
        <h2 className="font-kufi text-lg py-3 border-b-2 w-full text-center">{t("title")}</h2>
        <div className="flex flex-col items-center">
          <div className="text-primary text-[200px] font-bold">404</div>
          <div className="font-naskh text-lg">{t("description")}</div>
        </div>
        <Link href="/" className="my-10"><ButtonA text={t("button")}/></Link>
      </div>
    </div>
  );
}
