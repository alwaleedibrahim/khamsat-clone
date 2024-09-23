import Image from "next/image";
import MenuBarsIcon from "../icons/MenuBarsIcon";
import NavItem from "./navitem";
import PlusIcon from "../icons/PlusIcon";

export default function Navbar() {
  return (
    <header className="bg-[#444] font-kufi">
      <nav className="flex w-full justify-between h-16 text-white">
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
              className="w-[144] h-[36]"
            />
          </NavItem>

          <ul className="flex">
            <li>
              <NavItem>
                <PlusIcon/>
                <span className="mx-2">أضف خدمة</span>
              </NavItem>
            </li>
            <li>
              <NavItem>
                <span></span>
                <PlusIcon/>
                <span className="mx-2">التصنيفات</span>
              </NavItem>
            </li>
            <li>
              <NavItem>
              <PlusIcon/>
                <span className="mx-2">المشتريات</span>
              </NavItem>
            </li>
            <li>
              <NavItem>
              <PlusIcon/>
                <span className="mx-2">الطلبات الواردة</span>
              </NavItem>
            </li>
          </ul>
        </div>
        <div className="flex">
        <ul className="flex">
            <li>
              <NavItem>
                <span>*</span>
              </NavItem>
            </li>
            <li>
              <NavItem>
                <span>*</span>
              </NavItem>
            </li>
            <li>
              <NavItem>
                <span>*</span>
              </NavItem>
            </li>
            <li>
              <NavItem>
                <span>*</span>
              </NavItem>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
