import Image from "next/image";
import MenuBarsIcon from "../icons/MenuBarsIcon";
import NavItem from "./navitem";
import PlusIcon from "../icons/PlusIcon";
import CubesIcon from "../icons/CubesIcon";
import SearchIcon from "../icons/SearchIcon";
import ShoppingCartIcon from "../icons/ShoppingCartIcon";
import EnvelopeIcon from "../icons/EnvelopeIcon";
import BellIcon from "../icons/BellIcon";
import FolderIcon from "../icons/FolderIcon";
import TruckIcon from "../icons/TruckIcon";

export default function Navbar() {
  return (
    <header className="bg-[#444] font-kufi">
      <nav className="flex w-full justify-between h-16 text-white px-8">
        <div className="flex">
          <NavItem>
            <MenuBarsIcon className="self-start" />
          </NavItem>
          <NavItem>
            <Image
              width={144}
              height={36}
              alt="logo"
              src="/images/khamsat-logo.png"
              className="w-[  ] h-[36]"
            />
          </NavItem>

          <ul className="flex">
            <li>
              <NavItem>
                <PlusIcon />
                <span>أضف خدمة</span>
              </NavItem>
            </li>
            <li>
              <NavItem>
                <span></span>
                <CubesIcon />
                <span>التصنيفات</span>
              </NavItem>
            </li>
            <li>
              <NavItem>
                <FolderIcon />
                <span>المشتريات</span>
              </NavItem>
            </li>
            <li>
              <NavItem>
                <TruckIcon className="mx-2"/>
                <span>الطلبات الواردة</span>
              </NavItem>
            </li>
          </ul>
        </div>
        <div className="flex">
          <ul className="flex">
            <li>
              <NavItem>
                <SearchIcon />
              </NavItem>
            </li>
            <li>
              <NavItem>
              <ShoppingCartIcon />
              </NavItem>
            </li>
            <li>
              <NavItem>
              <EnvelopeIcon />
              </NavItem>
            </li>
            <li>
              <NavItem>
              <BellIcon />
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
