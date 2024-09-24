import Image from "next/image";
import NavItem from "./navitem";
import { FaFolderOpen, FaBell, FaCubes, FaEnvelope, FaPlus, FaSearch, FaShoppingCart, FaTruck, FaBars } from "react-icons/fa";


export default function Navbar() {
  return (
    <header className="bg-[#444] font-kufi sm:hidden lg:flex lg:justify-around">
      <nav className="flex w-full justify-between h-16 text-white px-8 max-w-[1440px]">
        <div className="flex">
          <NavItem>
            <FaBars className="text-2xl"/>
          </NavItem>
          <div className="flex items-center px-5">
            <Image
              width={144}
              height={36}
              alt="logo"
              src="/images/khamsat-logo.png"
              className="w-[144px] h-[36px] "
            />
          </div>

          <ul className="flex">
            <li>
              <NavItem>
                <FaPlus className="mx-2"/>
                <span>أضف خدمة</span>
              </NavItem>
            </li>
            <li>
              <NavItem>
                <span></span>
                <FaCubes className="mx-2"/>
                <span>التصنيفات</span>
              </NavItem>
            </li>
            <li>
              <NavItem>
                <FaFolderOpen className="mx-2"/>
                <span>المشتريات</span>
              </NavItem>
            </li>
            <li>
              <NavItem>
                <FaTruck className="mx-2" style={{transform: 'scaleX(-1)'}}/>
                <span>الطلبات الواردة</span>
              </NavItem>
            </li>
          </ul>
        </div>
        <div className="flex">
          <ul className="flex">
            <li>
              <NavItem>
                <FaSearch className="text-lg"/>
              </NavItem>
            </li>
            <li>
              <NavItem>
              <FaShoppingCart className="text-lg"/>
              </NavItem>
            </li>
            <li>
              <NavItem>
              <FaEnvelope className="text-lg"/>
              </NavItem>
            </li>
            <li>
              <NavItem>
              <FaBell className="text-lg"/>
              </NavItem>
            </li>
            <li>
              <NavItem>
              <Image
              width={40}
              height={40}
              alt="logo"
              src="/images/avatar.png"
              className="w-[40] h-[40] rounded-full"
            />
              </NavItem>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
