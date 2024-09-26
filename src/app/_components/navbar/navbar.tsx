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
} from "react-icons/fa";
import DropDownBox, { DropDownBoxContent } from "./dropdownbox";
import UserDropDownBox from "./userdropdown";
import { FaBookBookmark, FaFileLines, FaSliders } from "react-icons/fa6";

export default function Navbar() {
  return (
    <>
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
              className="overflow-scroll fixed top-16 right-0 px-4 py-6 h-full w-64 transition-all duration-500 transform translate-x-full bg-white shadow-lg peer-checked:translate-x-0"
              style={{ scrollbarWidth: "none" }}
            >
              <form acceptCharset="UTF-8" className="text-[#888] h-10">
                <input name="utf8" type="hidden" defaultValue="✓" />
                <input
                  className="w-full h-full"
                  type="search"
                  name="q"
                  placeholder="ابحث عن ..."
                  defaultValue=""
                />
              </form>
              <hr className="my-3" />
              <ul className="text-[#444]">
                <li className="flex items-center py-3">
                  <FaPlus className="me-2" />
                  <span>أضف خدمة</span>
                </li>
                <li className="flex items-center py-3">
                  <FaFolderOpen className="me-2" />
                  <span>المشتريات</span>
                </li>
                <li className="flex items-center py-3">
                  <FaTruck className="me-2 scale-x-[-1]" />
                  <span>الطلبات الواردة</span>
                </li>
                <li className="flex items-center py-3 ">
                  <details className="group w-full">
                    <summary className="flex items-center cursor-pointer justify-between w-full	 ">
                      <div className="flex items-center">
                        <FaCubes className="me-2" />
                        <span>التصنيفات</span>
                      </div>
                      <FaCaretLeft className="group-open:-rotate-90 " />
                    </summary>
                    <ul className="my-2">
                      <li className="flex items-center py-3">
                        <span className="ms-6">تصميم</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">كتابة وترجمة</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">تسويق رقمي</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">برمجة وتطوير</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">فيديو وأنيميشن</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">هندسة وعمارة</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">أعمال</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">صوتيات</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">تعليم عن بعد</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">بيانات</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">أسلوب حياة</span>
                      </li>
                    </ul>
                  </details>
                </li>
                <li className="flex items-center py-3">
                  <details className="group w-full">
                    <summary className="flex items-center cursor-pointer justify-between w-full	 ">
                      <div className="flex items-center">
                        <FaBriefcase className="me-2" />
                        <span>حلول الأعمال</span>
                      </div>
                      <FaCaretLeft className="group-open:-rotate-90 " />
                    </summary>

                    <ul className="my-2">
                      <li className="flex items-center py-3">
                        <span className="ms-6">حوّل أعمالك للعالم الرقمي</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">ابدأ مشروعك التجاري</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">أنشئ متجرك الإلكتروني</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">أطلق موقعك الإلكتروني</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">حلول التسويق الرقمي</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">أنشئ دورتك التدريبية</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">انشر كتابك عبر الإنترنت</span>
                      </li>
                    </ul>
                  </details>
                </li>
                <li className="flex items-center py-3 cursor-pointer	">
                  <details className="group w-full">
                    <summary className="flex items-center cursor-pointer justify-between w-full	 ">
                      <div className="flex items-center">
                        <FaComments className="me-2" />
                        <span>مجتمع خمسات</span>
                      </div>
                      <FaCaretLeft className="group-open:-rotate-90 " />
                    </summary>

                    <ul className="my-2">
                      <li className="flex items-center py-3">
                        <span className="ms-6">نماذج أعمال قمت بتنفيذها</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">طلبات الخدمات غير الموجودة</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">تجارب وقصص المستخدمين</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">أمور عامة حول خمسات</span>
                      </li>
                    </ul>
                  </details>
                </li>
                <li className="flex items-center py-3 cursor-pointer	">
                  <details className="group w-full">
                    <summary className="flex items-center cursor-pointer justify-between w-full	 ">
                      <div className="flex items-center">
                        <FaFileLines className="me-2" />
                        <span>خمسات</span>
                      </div>
                      <FaCaretLeft className="group-open:-rotate-90 " />
                    </summary>

                    <ul className="my-2">
                      <li className="flex items-center py-3">
                        <span className="ms-6">حول خمسات</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">كيف يعمل الموقع</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">الأسئلة الشائعة</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">ضمان الحقوق</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">شروط الاستخدام</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">بيان الخصوصية</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">المستويات</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">التسويق بالعمولة</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">البيع على خمسات</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">مركز المساعدة</span>
                      </li>
                    </ul>
                  </details>
                </li>
                <li className="flex items-center py-3">
                  <details className="group w-full">
                    <summary className="flex items-center cursor-pointer justify-between w-full	 ">
                      <div className="flex items-center">
                        <FaHashtag className="me-2" />
                        <span>تابعنا</span>
                      </div>
                      <FaCaretLeft className="group-open:-rotate-90 " />
                    </summary>

                    <ul className="my-2">
                      <li className="flex items-center py-3">
                        <span className="ms-6">مجتمع خمسات</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">مدونة خمسات</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">تويتر</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">تصميم</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">فيسبوك</span>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>

            <div className="flex items-center px-5">
              <Image
                width={144}
                height={36}
                alt="logo"
                src="/images/khamsat-logo.png"
                className="w-[144px] h-[36px] min-w-fit"
              />
            </div>

            <ul className="flex  min-w-fit text-sm">
              <li>
                <NavItem>
                  <FaPlus className="me-2" />
                  <span>أضف خدمة</span>
                </NavItem>
              </li>
              <li>
                <NavItem>
                  <FaCubes className="me-2" />
                  <span>التصنيفات</span>
                </NavItem>
              </li>
              <li>
                <NavItem>
                  <FaFolderOpen className="me-2" />
                  <span>المشتريات</span>
                </NavItem>
              </li>
              <li>
                <NavItem>
                  <FaTruck className="me-2 scale-x-[-1]" />
                  <span>الطلبات الواردة</span>
                </NavItem>
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
                <NavItem>
                  <FaShoppingCart className="text-lg" />
                </NavItem>
              </li>
              <li>
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
                      <span>لا جديد حتى هذه اللحظة!</span>
                    </DropDownBoxContent>
                  </DropDownBox>
                </div>
              </li>
              <li>
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
                            <span>لا جديد حتى هذه اللحظة!</span>
                          </DropDownBoxContent>
                        </DropDownBox>
                      </div>
                    </div>
                  </NavItem>
                </button>
              </li>
              <li>
                <button className="group p-0 m-0 h-full">
                  <NavItem>
                    <div className=" relative">
                      <Image
                        width={40}
                        height={40}
                        alt="logo"
                        src="/images/avatar.png"
                        className="w-[40] h-[40] rounded-full min-w-fit"
                      />
                      <div
                        className="absolute invisible opacity-0 top-14 left-0 group-focus-within:visible group-focus-within:opacity-100 transition-all duration-300"
                        id="test"
                      >
                        <UserDropDownBox />
                      </div>
                    </div>
                  </NavItem>
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
              <span>الرئيسية</span>
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
              <span>حسابي</span>
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
                <h2 className="font-semibold text-2xl">حسابي</h2>
              </li>
                <li className="flex items-center py-3">
                  <FaUser className="me-3" />
                  user_name
                </li>
                <li className="flex items-center  py-3">
                  <FaBookBookmark className="me-3" />
                  مجموعاتي
                </li>
                <li className="flex items-center  py-3">
                  <FaDollarSign className="me-3" />
                  الرصيد
                </li>
                <li className="flex items-center  py-3">
                  <FaSliders className="me-3" />
                  الإعدادات
                </li>
                <hr />
                <li className="flex items-center  py-3">
                  <FaEdit className="me-3" />
                  تعديل الحساب
                </li>
                <li className="flex items-center  py-3">
                  <FaGlobe className="me-3" />
                  المساعدة
                </li>
                <hr />
                <li className="flex items-center  py-3">
                  <FaSignOutAlt className="me-3" />
                  خروج
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
              <span>بحث</span>
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
                  <h2 className="font-semibold text-2xl">بحث</h2>
                </li>
                <li className="flex items-center py-3 ">
                  <form acceptCharset="UTF-8" className="text-[#888] h-10">
                    <input name="utf8" type="hidden" defaultValue="✓" />
                    <input
                      className="w-full h-full"
                      type="search"
                      name="q"
                      placeholder="ابحث عن ..."
                      defaultValue=""
                    />
                  </form>
                </li>
                <hr className="my-3" />
                <li className="flex items-center py-3">
                  <span className="ms-6">تصميم</span>
                </li>
                <li className="flex items-center py-3">
                  <span className="ms-6">كتابة وترجمة</span>
                </li>
                <li className="flex items-center py-3">
                  <span className="ms-6">تسويق رقمي</span>
                </li>
                <li className="flex items-center py-3">
                  <span className="ms-6">برمجة وتطوير</span>
                </li>
                <li className="flex items-center py-3">
                  <span className="ms-6">فيديو وأنيميشن</span>
                </li>
                <li className="flex items-center py-3">
                  <span className="ms-6">هندسة وعمارة</span>
                </li>
                <li className="flex items-center py-3">
                  <span className="ms-6">أعمال</span>
                </li>
                <li className="flex items-center py-3">
                  <span className="ms-6">صوتيات</span>
                </li>
                <li className="flex items-center py-3">
                  <span className="ms-6">تعليم عن بعد</span>
                </li>
                <li className="flex items-center py-3">
                  <span className="ms-6">بيانات</span>
                </li>
                <li className="flex items-center py-3">
                  <span className="ms-6">أسلوب حياة</span>
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
              <span>السلة</span>
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
              <span>القائمة</span>
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
                  <h2 className="font-semibold text-2xl">القائمة</h2>
                </li>

                <li className="flex items-center py-3">
                  <details className="group w-full">
                    <summary className="flex items-center cursor-pointer justify-between w-full	 ">
                      <div className="flex items-center">
                        <FaBriefcase className="me-2" />
                        <span>حلول الأعمال</span>
                      </div>
                      <FaCaretLeft className="group-open:-rotate-90 " />
                    </summary>

                    <ul className="my-2">
                      <li className="flex items-center py-3">
                        <span className="ms-6">حوّل أعمالك للعالم الرقمي</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">ابدأ مشروعك التجاري</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">أنشئ متجرك الإلكتروني</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">أطلق موقعك الإلكتروني</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">حلول التسويق الرقمي</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">أنشئ دورتك التدريبية</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">انشر كتابك عبر الإنترنت</span>
                      </li>
                    </ul>
                  </details>
                </li>
                <li className="flex items-center py-3 cursor-pointer	">
                  <details className="group w-full">
                    <summary className="flex items-center cursor-pointer justify-between w-full	 ">
                      <div className="flex items-center">
                        <FaComments className="me-2" />
                        <span>مجتمع خمسات</span>
                      </div>
                      <FaCaretLeft className="group-open:-rotate-90 " />
                    </summary>

                    <ul className="my-2">
                      <li className="flex items-center py-3">
                        <span className="ms-6">نماذج أعمال قمت بتنفيذها</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">طلبات الخدمات غير الموجودة</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">تجارب وقصص المستخدمين</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">أمور عامة حول خمسات</span>
                      </li>
                    </ul>
                  </details>
                </li>
                <li className="flex items-center py-3 cursor-pointer	">
                  <details className="group w-full">
                    <summary className="flex items-center cursor-pointer justify-between w-full	 ">
                      <div className="flex items-center">
                        <FaFileLines className="me-2" />
                        <span>خمسات</span>
                      </div>
                      <FaCaretLeft className="group-open:-rotate-90 " />
                    </summary>

                    <ul className="my-2">
                      <li className="flex items-center py-3">
                        <span className="ms-6">حول خمسات</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">كيف يعمل الموقع</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">الأسئلة الشائعة</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">ضمان الحقوق</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">شروط الاستخدام</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">بيان الخصوصية</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">المستويات</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">التسويق بالعمولة</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">البيع على خمسات</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">مركز المساعدة</span>
                      </li>
                    </ul>
                  </details>
                </li>
                <li className="flex items-center py-3">
                  <details className="group w-full">
                    <summary className="flex items-center cursor-pointer justify-between w-full	 ">
                      <div className="flex items-center">
                        <FaHashtag className="me-2" />
                        <span>تابعنا</span>
                      </div>
                      <FaCaretLeft className="group-open:-rotate-90 " />
                    </summary>

                    <ul className="my-2">
                      <li className="flex items-center py-3">
                        <span className="ms-6">مجتمع خمسات</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">مدونة خمسات</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">تويتر</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">تصميم</span>
                      </li>
                      <li className="flex items-center py-3">
                        <span className="ms-6">فيسبوك</span>
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
