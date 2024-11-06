"use client";
import Image from "next/image";
import NavItem from "./navitem";
import {
  FaFolderOpen,
  FaBell,
  FaCubes,
  FaEnvelope,
  FaPlus,
  FaSearch,
  FaShoppingCart,
  FaTruck,
  FaBars,
  FaHome,
  FaUser,
  FaBriefcase,
  FaComments,
  FaHashtag,
  FaCaretLeft,
  FaDollarSign,
  FaEdit,
  FaGlobe,
  FaSignOutAlt,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";
import DropDownBox, { DropDownBoxContent } from "./dropdownbox";
import UserDropDownBox from "./userdropdown";
import { FaBookBookmark, FaFileLines, FaSliders } from "react-icons/fa6";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import { AppDispatch, RootState } from "../../_lib/redux/store";
import { logout } from "../../_lib/redux/slice/authSlice";
import { useEffect, useState } from "react";
import { getProfile } from "../../_lib/redux/slice/profileSlice";
import IUserProfile from "../../_models/userProfile";
import KSAIcon from "../reusable/icons/KSAIcon";
import UKIcons from "../reusable/icons/UKIcons";
import Categorydropdown from "./categorydropdown";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "react-use-cart";

export default function Navbar() {
  const router = useRouter();
  const localActive = useLocale();
  const t = useTranslations("Header");
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { totalUniqueItems } = useCart();

  const handleLang = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    const lang = e.currentTarget.getAttribute("data-lang");
    const newLang = lang === "ar" ? "en" : "ar";
    const newPathname = `/${newLang}${pathname.substring(3)}`;
    const newUrl = `${newPathname}${
      searchParams ? `?${searchParams.toString()}` : ""
    }`;
    router.replace(newUrl);
  };
  const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
  const isAuthenticated: boolean = useSelector(
    (state) => state.auth.isAuthenticated
  );
  const token: string | null = useSelector((state) => state.auth.token);
  const user: IUserProfile = useSelector((state) => state.profile.user);
  console.log(user)
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getProfile(token));
  }, [token, isAuthenticated, dispatch]);
  const handleLogout = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/logout`,
        {
          method: "POST",
          credentials: "include",
        }
      );

      if (response.ok) {
        dispatch(logout());
        router.refresh()
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  useEffect(() => {
    if (searchParams.get("payment-success")) {
      const paymentAmount = searchParams.get("amount");
      toast.success(`تم دفع مبلغ ${paymentAmount}$ بنجاح`);
    }
  }, [searchParams]);

  const [categoryOpen, setCategoryOpen] = useState(false);
  return (
    <>
      <ToastContainer rtl={localActive == "ar"} position={`top-center`} />
      <nav className="bg-[#444] font-kufi hidden lg:flex justify-around fixed w-full z-[200]">
        <div className="flex w-full justify-between h-16 text-white max-w-[1440px]">
          <div className="flex min-w-fit overflow-hidden">
            <input
              type="checkbox"
              id="toggle-sidemenu"
              className="peer hidden"
            />
            <label htmlFor="toggle-sidemenu">
              <NavItem>
                <FaBars className="text-2xl" />
              </NavItem>
            </label>
            <div
              className={`overflow-scroll fixed top-16 ${
                localActive === "ar"
                  ? "right-0 translate-x-full"
                  : "left-0 -translate-x-full"
              } peer-checked:translate-x-0 px-4 py-6 h-full w-64 transition-all duration-500 transform bg-white shadow-lg `}
              style={{ scrollbarWidth: "none" }}
            >
              <form acceptCharset="UTF-8" className="text-[#888] h-10">
                <input name="utf8" type="hidden" defaultValue="✓" />
                <input
                  className="w-full h-full"
                  type="search"
                  name="q"
                  placeholder={t('sidebar.menu.searchFor')}
                  defaultValue=""
                />
              </form>
              <hr className="my-3" />

              {/* ********************************** Start Sidebar ****************************************** */}
              <ul className="text-[#444]">
                <li
                  className={`${
                    isAuthenticated ? `hidden` : `flex`
                  } items-center py-3`}
                >
                  <Link
                    href={`/${localActive}/login`}
                    className="flex items-center"
                  >
                    <FaSignInAlt className="me-2" />
                    <span>{t("sidebar.menu.login")}</span>
                  </Link>
                </li>
                <li
                  className={`${
                    isAuthenticated ? `hidden` : `flex`
                  } items-center py-3`}
                >
                  <Link
                    href={`/${localActive}/register`}
                    className="flex items-center"
                  >
                    <FaUserPlus className="me-2" />
                    <span>{t("sidebar.menu.register")}</span>
                  </Link>
                </li>
                <li
                  className={`${
                    isAuthenticated ? `flex` : `hidden`
                  } items-center py-3`}
                >
                  <FaPlus className="me-2" />
                  <span>{t("sidebar.menu.addService")}</span>
                </li>
                <li
                  className={`${
                    isAuthenticated ? `flex` : `hidden`
                  } items-center py-3`}
                >
                  <FaFolderOpen className="me-2" />
                  <span>{t("sidebar.menu.viewServices")}</span>
                </li>
                <li
                  className={`${
                    isAuthenticated ? `flex` : `hidden`
                  } items-center py-3`}
                >
                  <FaTruck className="me-2 scale-x-[-1]" />
                  <span>{t("sidebar.menu.incomingService")} </span>
                </li>
                <li className="flex items-center py-3 ">
                  <details className="group w-full">
                    <summary className="flex items-center cursor-pointer justify-between w-full	 ">
                      <div className="flex items-center">
                        <FaCubes className="me-2" />
                        <span>{t("sidebar.menu.categories.title")}</span>
                      </div>
                      <FaCaretLeft className="group-open:-rotate-90 " />
                    </summary>
                    <ul className="my-2">
                      <li className="flex items-center py-3">
                        <span className="ms-6">
                          {t("sidebar.menu.categories.design")}
                        </span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">
                          {t("sidebar.menu.categories.writingTranslation")}
                        </span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">
                          {t("sidebar.menu.categories.digitalMarketing")}
                        </span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">
                          {t("sidebar.menu.categories.programmingDevelopment")}
                        </span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">
                          {t("sidebar.menu.categories.videoAnimation")}
                        </span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">
                          {t("sidebar.menu.categories.engineeringArchitecture")}
                        </span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">
                          {t("sidebar.menu.categories.business")}
                        </span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">
                          {t("sidebar.menu.categories.audio")}
                        </span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">
                          {t("sidebar.menu.categories.eLearning")}
                        </span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">
                          {t("sidebar.menu.categories.data")}
                        </span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">
                          {t("sidebar.menu.categories.lifestyle")}
                        </span>
                      </li>
                    </ul>
                  </details>
                </li>
                <li className="flex items-center py-3">
                  <details className="group w-full">
                    <summary className="flex items-center cursor-pointer justify-between w-full	 ">
                      <div className="flex items-center">
                        <FaBriefcase className="me-2" />
                        <span>{t("sidebar.menu.business.title")}</span>
                      </div>
                      <FaCaretLeft className="group-open:-rotate-90 " />
                    </summary>

                    <ul className="my-2">
                      <li className="flex items-center py-3">
                        <span className="ms-6">
                          {t("sidebar.menu.business.turnYourBusinessDigital")}
                        </span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">
                          {t("sidebar.menu.business.startYourBusinessProject")}
                        </span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">
                          {t("sidebar.menu.business.createYourOnlineStore")}
                        </span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">
                          {t("sidebar.menu.business.launchYourWebsite")}
                        </span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">
                          {t("sidebar.menu.business.digitalMarketingSolutions")}
                        </span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">
                          {t("sidebar.menu.business.createYourTrainingCourse")}
                        </span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">
                          {t("sidebar.menu.business.publishYourBookOnline")}
                        </span>
                      </li>
                    </ul>
                  </details>
                </li>
                <li className="flex items-center py-3 cursor-pointer	">
                  <details className="group w-full">
                    <summary className="flex items-center cursor-pointer justify-between w-full	 ">
                      <div className="flex items-center">
                        <FaComments className="me-2" />
                        <span>{t("sidebar.menu.community.title")}</span>
                      </div>
                      <FaCaretLeft className="group-open:-rotate-90 " />
                    </summary>

                    <ul className="my-2">
                      <li className="flex items-center py-3">
                        <span className="ms-6">
                          {t("sidebar.menu.community.samplesOfProjects")}
                        </span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">
                          {t(
                            "sidebar.menu.community.requestsForNonExistingServices"
                          )}
                        </span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">
                          {t("sidebar.menu.community.userExperiencesStories")}
                        </span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">
                          {t("sidebar.menu.community.generalMatters")}
                        </span>
                      </li>
                    </ul>
                  </details>
                </li>
                <li className="flex items-center py-3 cursor-pointer	">
                  <details className="group w-full">
                    <summary className="flex items-center cursor-pointer justify-between w-full	 ">
                      <div className="flex items-center">
                        <FaFileLines className="me-2" />
                        <span>{t("sidebar.menu.khamsat.title")}</span>
                      </div>
                      <FaCaretLeft className="group-open:-rotate-90 " />
                    </summary>

                    <ul className="my-2">
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t("sidebar.menu.khamsat.aboutKhamas")}</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t("sidebar.menu.khamsat.howTheSiteWorks")}</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t("sidebar.menu.khamsat.frequentlyAskedQuestions")}</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t("sidebar.menu.khamsat.rightsGuarantee")}</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t("sidebar.menu.khamsat.termsOfUse")}</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t("sidebar.menu.khamsat.privacyStatement")} </span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t("sidebar.menu.khamsat.levels")}</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t("sidebar.menu.khamsat.affiliateMarketing")}</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t("sidebar.menu.khamsat.sellingOnKhamas")}</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t("sidebar.menu.khamsat.helpCenter")}</span>
                      </li>
                    </ul>
                  </details>
                </li>
                <li className="flex items-center py-3">
                  <details className="group w-full">
                    <summary className="flex items-center cursor-pointer justify-between w-full	 ">
                      <div className="flex items-center">
                        <FaHashtag className="me-2" />
                        <span>{t("sidebar.menu.support.title")}</span>
                      </div>
                      <FaCaretLeft className="group-open:-rotate-90 " />
                    </summary>

                    <ul className="my-2">
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t("sidebar.menu.support.khamasCommunity")}</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t("sidebar.menu.support.khamasBlog")}</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t("sidebar.menu.support.twitter")}</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t("sidebar.menu.support.design")}</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t("sidebar.menu.support.facebook")}</span>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
              {/* ********************************** End Sidebar ****************************************** */}
            </div>

            <div className="flex items-center px-5">
              <Link href="/">
                <Image
                  width={144}
                  height={36}
                  alt="logo"
                  src={
                    localActive == "ar"
                      ? `/images/khamsat-logo.png`
                      : `/images/khamsat-logo-en.png`
                  }
                  className="w-[144px] h-[36px] min-w-fit"
                />
              </Link>
            </div>

            <ul className="flex  min-w-fit text-sm">
              <li className={`${isAuthenticated ? `flex` : `hidden`}`}>
                <Link href={`/${localActive}/service/new`}>
                  <NavItem>
                    <FaPlus className="me-2" />
                    <span>{t("sidebar.menu.addService")}</span>
                  </NavItem>
                </Link>
              </li>
              <li
                onClick={() => {
                  setCategoryOpen(!categoryOpen);
                }}
                className="hover:cursor-pointer"
              >
                <NavItem>
                  <FaCubes className="me-2" />
                  <span>{t("sidebar.menu.categories.title")}</span>
                </NavItem>
                {categoryOpen && (
                  <div
                    className={`absolute left-0 transition-all duration-300 overflow-y-auto h-screen pb-20 ${
                      categoryOpen
                        ? `visible opacity-100`
                        : `invisible opacity-0`
                    } `}
                  >
                    <Categorydropdown />
                  </div>
                )}
              </li>
              <li className={`${isAuthenticated ? `flex` : `hidden`}`}>
                <Link href={`/${localActive}/purchases`}>
                  <NavItem>
                    <FaFolderOpen className="me-2" />
                    <span>{t("sidebar.menu.viewServices")}</span>
                  </NavItem>
                </Link>
              </li>
              <li className={`${isAuthenticated ? `flex` : `hidden`}`}>
                <Link href={`/${localActive}/orders`}>
                  <NavItem>
                    <FaTruck className="me-2 scale-x-[-1]" />
                    <span>{t("sidebar.menu.incomingService")} </span>
                  </NavItem>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex min-w-fit">
            <ul className="flex">
              <li>
                <NavItem>
                  <FaSearch className="text-lg" />
                </NavItem>
              </li>
              <li>
                  <Link href={`/${localActive}/cart`}>
                <NavItem>
                  <FaShoppingCart className="text-lg" />
                  {totalUniqueItems > 0 && (
                    <span className="relative end-[9px] top-[-7px] bg-[#e75737] text-white rounded-full h-[20px] w-[20px] text-xs flex items-center justify-center">
                      {totalUniqueItems}
                    </span>
                  )}
                </NavItem>
                  </Link>
              </li>
              <li className={`${isAuthenticated ? `flex` : `hidden`}`}>
                <label htmlFor="toggle-messages" className="p-0 m-0 h-full">
                  <NavItem>
                    <div className=" relative">
                      <FaEnvelope className="text-lg" />
                    </div>
                  </NavItem>
                </label>
                <input
                  type="checkbox"
                  id="toggle-messages"
                  className="peer hidden"
                />
                <div
                  className="absolute invisible opacity-0 top-16 left-0 peer-checked:visible peer-checked:opacity-100 transition-all duration-300"
                  id="test"
                >
                  <DropDownBox>
                    <DropDownBoxContent>
                      <span>{t("sidebar.menu.noNew")}</span>
                    </DropDownBoxContent>
                  </DropDownBox>
                </div>
              </li>
              <li className={`${isAuthenticated ? `flex` : `hidden`}`}>
                <button className="group p-0 m-0 h-full">
                  <NavItem>
                    <div className=" relative">
                      <FaBell className="text-lg" />
                      <div
                        className="absolute invisible opacity-0 top-10 left-0 group-focus-within:visible group-focus-within:opacity-100 transition-all duration-300"
                        id="test"
                      >
                        <DropDownBox>
                          <DropDownBoxContent>
                            <span>{t("sidebar.menu.noNew")}</span>
                          </DropDownBoxContent>
                        </DropDownBox>
                      </div>
                    </div>
                  </NavItem>
                </button>
              </li>
              {/* change language */}
              <li
                onClick={handleLang}
                data-lang={localActive}
                className="flex items-center"
              >
                <NavItem>
                  {localActive == 'ar'? <KSAIcon /> : <UKIcons />}
                </NavItem>
              </li>
              <li className={`${isAuthenticated ? `flex` : `hidden`}`}>
                <button className="group p-0 m-0 h-full">
                  <NavItem>
                    <div className=" relative">
                      <Image
                        width={40}
                        height={40}
                        alt="logo"
                        src={user.profilePicture?.startsWith('http')? user.profilePicture : `${process.env.NEXT_PUBLIC_API_BASE_URL}/${user.profilePicture}`}
                        className="w-[40] h-[40] rounded-full min-w-fit"
                      />
                      <div
                        className="absolute invisible opacity-0 top-14 left-0 group-focus-within:visible group-focus-within:opacity-100 transition-all duration-300"
                        id="test"
                      >
                        <UserDropDownBox userName={user.username} />
                      </div>
                    </div>
                  </NavItem>
                </button>
              </li>
              <li className={`${isAuthenticated ? `hidden` : `flex`}`}>
                <button className="font-kufi border border-[#888] my-3 mx-2">
                  <Link href={`/${localActive}/login`}>
                    <NavItem>
                      <FaSignInAlt className="me-2" />
                      <span className="text-sm">{t("sidebar.menu.login")}</span>
                    </NavItem>
                  </Link>
                </button>
              </li>
              <li className={`${isAuthenticated ? `hidden` : `flex`}`}>
                <button className="font-kufi border border-[#888] my-3 mx-2">
                  <Link href={`/${localActive}/register`}>
                    <NavItem>
                      <FaUserPlus className="me-2" />
                      <span className="text-sm">
                        {t("sidebar.menu.register")}
                      </span>
                    </NavItem>
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="font-kufi font-light sm:flex lg:hidden fixed bottom-0 w-full text-[#444] z-[200]">
        <ul className="flex justify-evenly w-full bg-white py-3">
          <li className="flex flex-col items-center justify-around">
            <label
              htmlFor="toggle-home-sm"
              className="p-0 m-0 h-full flex flex-col items-center justify-around"
            >
              <FaHome />
              <span>{t('sidebar.menu.home')}</span>
            </label>
            <input
              type="radio"
              id="toggle-home-sm"
              className="peer hidden"
              name="menu-radio"
            />
          </li>
          <li className="flex flex-col items-center justify-around">
            <label
              htmlFor="toggle-account-menu-sm"
              className="p-0 m-0 h-full flex flex-col items-center justify-around"
            >
              <FaUser />
              <span>{t('sidebar.menu.myAcount')}</span>
            </label>
            <input
              type="radio"
              id="toggle-account-menu-sm"
              className="peer hidden"
              name="menu-radio"
            />
            <div
              className="fixed invisible top-0 right-0 w-full h-full peer-checked:visible overflow-scroll px-4 py-6 bg-white -z-10"
              style={{ scrollbarWidth: "none" }}
            >
              <ul>
              <li className="flex items-center py-3 ">
                <h2 className="font-semibold text-2xl">{t('sidebar.menu.myAcount')}</h2>
              </li>
                <li className={`${isAuthenticated? `hidden` : `flex`} items-center py-3 border-b-[1px]`}>
                <Link href={`/${localActive}/login`} className="flex items-center" >
                  <FaSignInAlt className="me-3" />
                  {t('sidebar.menu.login')}
                </Link>
                </li>
                <li
                  className={`${
                    isAuthenticated ? `hidden` : `flex`
                  } items-center py-3 border-b-[1px]`}
                >
                  <Link
                    href={`/${localActive}/login`}
                    className="flex items-center"
                  >
                    <FaSignInAlt className="me-3" />
                    {t("sidebar.menu.login")}
                  </Link>
                </li>
                <li
                  className={`${
                    isAuthenticated ? `hidden` : `flex`
                  } items-center py-3 border-b-[1px]`}
                >
                  <Link
                    href={`/${localActive}/login`}
                    className="flex items-center"
                  >
                    <FaUserPlus className="me-3" />
                    {t("sidebar.menu.register")}
                  </Link>
                </li>
                <li
                  className={`${
                    isAuthenticated ? `flex` : `hidden`
                  } items-center py-3 border-b-[1px]`}
                >
                  <FaUser className="me-3" />
                  user_name
                </li>
                <li
                  className={`${
                    isAuthenticated ? `flex` : `hidden`
                  } items-center py-3 border-b-[1px]`}
                >
                  <FaPlus className="me-3" />
                  {t('sidebar.menu.addService')}
                </li>
                <li
                  className={`${
                    isAuthenticated ? `flex` : `hidden`
                  } items-center py-3 border-b-[1px]`}
                >
                  <FaBell className="me-3" />
                  {t('sidebar.menu.notfiction')}
                </li>
                <li
                  className={`${
                    isAuthenticated ? `flex` : `hidden`
                  } items-center py-3 border-b-[1px]`}
                >
                  <FaEnvelope className="me-3" />
                  {t('sidebar.menu.messages')}
                </li>
                <li
                  className={`${
                    isAuthenticated ? `flex` : `hidden`
                  } items-center py-3 border-b-[1px]`}
                >
                  <FaFolderOpen className="me-3" />
                  {t('sidebar.menu.viewServices')}
                </li>
                <li
                  className={`${
                    isAuthenticated ? `flex` : `hidden`
                  } items-center py-3 border-b-[1px]`}
                >
                  <FaTruck className="me-3 scale-x-[-1]" />
                  {t('sidebar.menu.incomingService')}
                </li>
                <li
                  className={`${
                    isAuthenticated ? `flex` : `hidden`
                  } items-center py-3 border-b-[1px]`}
                >
                  <FaBookBookmark className="me-3" />
                  {t('sidebar.menu.myGroubs')}
                </li>
                <li
                  className={`${
                    isAuthenticated ? `flex` : `hidden`
                  } items-center py-3 border-b-[1px]`}
                >
                  <FaDollarSign className="me-3" />
                  {t('sidebar.menu.balance')}
                </li>
                <li
                  className={`${
                    isAuthenticated ? `flex` : `hidden`
                  } items-center py-3 border-b-[1px]`}
                >
                  <FaSliders className="me-3" />
                  {t('sidebar.menu.settings')}
                </li>
                <li
                  className={`${
                    isAuthenticated ? `flex` : `hidden`
                  } items-center py-3 border-b-[1px]`}
                >
                  <FaEdit className="me-3" />
                  {t('sidebar.menu.acountSettings')}
                </li>
                <li
                  className={`${
                    isAuthenticated ? `flex` : `hidden`
                  } items-center py-3 border-b-[1px]`}
                >
                  <FaGlobe className="me-3" />
                  {t('sidebar.menu.helps')}
                </li>
                <li
                  onClick={() => handleLogout()}
                  className={`${
                    isAuthenticated ? `flex` : `hidden`
                  } items-center py-3 border-b-[1px]`}
                >
                  <FaSignOutAlt className="me-3" />
                  {t("sidebar.menu.logout")}
                </li>
              </ul>
            </div>
          </li>
          <li className="flex flex-col items-center justify-around">
            <label
              htmlFor="toggle-search-menu-sm"
              className="p-0 m-0 h-full flex flex-col items-center justify-around"
            >
              <FaSearch />
              <span>{t('sidebar.menu.search')}</span>
            </label>
            <input
              type="radio"
              id="toggle-search-menu-sm"
              className="peer hidden"
              name="menu-radio"
            />
            <div
              className="fixed invisible top-0 right-0 w-full h-full peer-checked:visible overflow-scroll px-4 py-6 bg-white -z-10"
              style={{ scrollbarWidth: "none" }}
            >
              <ul>
                <li className="flex items-center py-3 ">
                  <h2 className="font-semibold text-2xl">{t('sidebar.menu.search')}</h2>
                </li>
                <li className="flex items-center py-3 ">
                  <form acceptCharset="UTF-8" className="text-[#888] h-10">
                    <input name="utf8" type="hidden" defaultValue="✓" />
                    <input
                      className="w-full h-full"
                      type="search"
                      name="q"
                      placeholder={t('sidebar.menu.searchFor')}
                      defaultValue=""
                    />
                  </form>
                </li>
                <hr className="my-3" />
                <li className="flex items-center py-3">
                  <span className="ms-6">{t('sidebar.menu.categories.design')}</span>
                </li>
                <li className="flex items-center py-3">
                  <span className="ms-6">{t('sidebar.menu.categories.writingTranslation')}</span>
                </li>
                <li className="flex items-center py-3">
                  <span className="ms-6">{t('sidebar.menu.categories.digitalMarketing')}</span>
                </li>
                <li className="flex items-center py-3">
                  <span className="ms-6">{t('sidebar.menu.categories.programmingDevelopment')}</span>
                </li>
                <li className="flex items-center py-3">
                  <span className="ms-6">{t('sidebar.menu.categories.videoAnimation')}</span>
                </li>
                <li className="flex items-center py-3">
                  <span className="ms-6">{t('sidebar.menu.categories.engineeringArchitecture')}</span>
                </li>
                <li className="flex items-center py-3">
                  <span className="ms-6">{t('sidebar.menu.categories.business')}</span>
                </li>
                <li className="flex items-center py-3">
                  <span className="ms-6">{t('sidebar.menu.categories.audio')}</span>
                </li>
                <li className="flex items-center py-3">
                  <span className="ms-6">{t('sidebar.menu.categories.eLearning')}</span>
                </li>
                <li className="flex items-center py-3">
                  <span className="ms-6">{t('sidebar.menu.categories.data')}</span>
                </li>
                <li className="flex items-center py-3">
                  <span className="ms-6">{t('sidebar.menu.categories.lifestyle')}</span>
                </li>
              </ul>
            </div>
          </li>
          <li className="flex flex-col items-center justify-around">
            <label
              htmlFor="toggle-cart-sm"
              className="p-0 m-0 h-full flex flex-col items-center justify-around"
            >
              <FaShoppingCart />
              {totalUniqueItems > 0 && (
                    <span className="relative end-[9px] mb-[-18px] top-[-22px] bg-[#e75737] text-white rounded-full h-[12px] w-[12px] text-xs flex items-center justify-center"></span>
              )}
              <span>{t('sidebar.menu.cart')}</span>
            </label>
            <input
              type="radio"
              id="toggle-cart-sm"
              className="peer hidden"
              name="menu-radio"
            />
          </li>
          <li className="flex flex-col items-center justify-around">
            <label
              htmlFor="toggle-menu-sm"
              className="p-0 m-0 h-full flex flex-col items-center justify-around"
            >
              <FaBars />
              <span>{t('sidebar.menu.title')}</span>
            </label>
            <input
              type="radio"
              id="toggle-menu-sm"
              className="peer hidden"
              name="menu-radio"
            />
            <div
              className="fixed invisible top-0 right-0 w-full h-full peer-checked:visible overflow-scroll px-4 py-6 bg-white -z-10"
              style={{ scrollbarWidth: "none" }}
            >
              <ul>
                <li className="flex items-center py-3 ">
                  <h2 className="font-semibold text-2xl">{t('sidebar.menu.title')}</h2>
                </li>

                <li className="flex items-center py-3">
                  <details className="group w-full">
                    <summary className="flex items-center cursor-pointer justify-between w-full	 ">
                      <div className="flex items-center">
                        <FaBriefcase className="me-2" />
                        <span>{t('sidebar.menu.business.title')}</span>
                      </div>
                      <FaCaretLeft className="group-open:-rotate-90 " />
                    </summary>

                    <ul className="my-2">
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t('sidebar.menu.business.turnYourBusinessDigital')}</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t('sidebar.menu.business.startYourBusinessProject')}</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t('sidebar.menu.business.createYourOnlineStore')}</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t('sidebar.menu.business.launchYourWebsite')}</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t('sidebar.menu.business.digitalMarketingSolutions')}</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t('sidebar.menu.business.createYourTrainingCourse')}</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t('sidebar.menu.business.publishYourBookOnline')}</span>
                      </li>
                    </ul>
                  </details>
                </li>
                <li className="flex items-center py-3 cursor-pointer	">
                  <details className="group w-full">
                    <summary className="flex items-center cursor-pointer justify-between w-full	 ">
                      <div className="flex items-center">
                        <FaComments className="me-2" />
                        <span>{t('sidebar.menu.community.title')}</span>
                      </div>
                      <FaCaretLeft className="group-open:-rotate-90 " />
                    </summary>

                    <ul className="my-2">
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t('sidebar.menu.community.samplesOfProjects')}</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t('sidebar.menu.community.requestsForNonExistingServices')}</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t('sidebar.menu.community.userExperiencesStories')}</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t('sidebar.menu.community.generalMatters')}</span>
                      </li>
                    </ul>
                  </details>
                </li>
                <li className="flex items-center py-3 cursor-pointer	">
                  <details className="group w-full">
                    <summary className="flex items-center cursor-pointer justify-between w-full	 ">
                      <div className="flex items-center">
                        <FaFileLines className="me-2" />
                        <span>{t('sidebar.menu.khamsat.title')}</span>
                      </div>
                      <FaCaretLeft className="group-open:-rotate-90 " />
                    </summary>

                    <ul className="my-2">
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t('sidebar.menu.khamsat.aboutKhamas')}</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t('sidebar.menu.khamsat.howTheSiteWorks')}</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t('sidebar.menu.khamsat.frequentlyAskedQuestions')}</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t('sidebar.menu.khamsat.rightsGuarantee')}</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t('sidebar.menu.khamsat.termsOfUse')}</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t('sidebar.menu.khamsat.privacyStatement')}</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t('sidebar.menu.khamsat.levels')}</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t('sidebar.menu.khamsat.affiliateMarketing')}</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t('sidebar.menu.khamsat.sellingOnKhamas')}</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t('sidebar.menu.khamsat.helpCenter')}</span>
                      </li>
                    </ul>
                  </details>
                </li>
                <li className="flex items-center py-3">
                  <details className="group w-full">
                    <summary className="flex items-center cursor-pointer justify-between w-full	 ">
                      <div className="flex items-center">
                        <FaHashtag className="me-2" />
                        <span>{t('sidebar.menu.support.title')}</span>
                      </div>
                      <FaCaretLeft className="group-open:-rotate-90 " />
                    </summary>

                    <ul className="my-2">
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t('sidebar.menu.support.khamasCommunity')}</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t('sidebar.menu.support.khamasBlog')}</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t('sidebar.menu.support.twitter')}</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t('sidebar.menu.support.design')}</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">{t('sidebar.menu.support.facebook')}</span>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}
