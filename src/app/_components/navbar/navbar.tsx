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
} from "react-icons/fa";
import DropDownBox, { DropDownBoxContent } from "./dropdownbox";
import UserDropDownBox from "./userdropdown";

export default function Navbar() {
  return (
    <>
      <nav className="bg-[#444] font-kufi hidden lg:flex justify-around fixed w-full">
        <div className="flex w-full justify-between h-16 text-white max-w-[1440px]">
          <div className="flex min-w-fit overflow-hidden">
            <NavItem>
              <FaBars className="text-2xl" />
            </NavItem>
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
                  <span></span>
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
                <button className="group p-0 m-0 h-full">
                  <NavItem>
                    <div className=" relative">
                      <FaEnvelope className="text-lg" />
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
      <nav className="font-kufi font-light sm:flex lg:hidden fixed bottom-0 w-full py-3 bg-white">
        <ul className="flex justify-evenly w-full">
          <li className="flex flex-col items-center justify-around">
            <FaHome />
            <span>الرئيسية</span>
          </li>
          <li className="flex flex-col items-center justify-around">
            <FaUser />
            <span>حسابي</span>
          </li>
          <li className="flex flex-col items-center justify-around">
            <FaSearch />
            <span>بحث</span>
          </li>
          <li className="flex flex-col items-center justify-around">
            <FaShoppingCart />
            <span>السلة</span>
          </li>
          <li className="flex flex-col items-center justify-around">
            <FaBars />
            <span>القائمة</span>
          </li>
        </ul>
      </nav>
    </>
  );
}
