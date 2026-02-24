import logo from "../assets/logo-bookmark.svg";
import logoLight from "../assets/logo-bookmark-light.svg";
import menu from "../assets/icon-hamburger.svg";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import closeMenu from "../assets/icon-close.svg";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-8 max-w-7xl mx-auto">
      <div>
        <img src={logo} alt="Bookmark" />
      </div>

      <nav className={`${isOpen && "open"} lg:block `}>
        <div>
          <div className="flex items-center justify-between lg:hidden">
            <img src={logoLight} alt="" />
            <button onClick={() => setIsOpen(false)}>
              <img src={closeMenu} alt="" />
            </button>
          </div>
          <ul className="flex flex-col mt-10 text-center lg:mt-0 lg:text=left lg:flex-row lg:items-center lg:gap-6">
            <li className="border-t border-slate-400 py-4 lg:border-transparent lg:py-0">
              <button className="text-white lg:text-slate-800 uppercase lg:text-xs tracking-widest hover:text-red-400 cursor-pointer">
                Features
              </button>
            </li>
            <li className="border-t border-slate-400 py-4 lg:border-transparent lg:py-0">
              <button className="text-white lg:text-slate-800 uppercase lg:text-xs tracking-widest hover:text-red-400 cursor-pointer">
                Pricing
              </button>
            </li>
            <li className="border-t border-slate-400 py-4 lg:border-transparent lg:py-0">
              <button className="text-white lg:text-slate-800 uppercase lg:text-xs tracking-widest hover:text-red-400 cursor-pointer">
                Contact
              </button>
            </li>
            <li className="border-t border-slate-400 py-4 lg:border-transparent lg:py-0">
              <button className="lg:bg-red-400 text-white py-2 px-4 rounded shadow-lg hover:opacity-75 lg:text-xs uppercase tracking-widest border-2 lg:border-red-400 lg:hover:bg-white lg:hover:text-slate-800 transition-all duration-200 cursor-pointer w-full">
                Login
              </button>
            </li>
          </ul>
        </div>
        <ul className="flex items-center justify-center gap-6 lg:hidden">
          <li>
            <img src={facebook} alt="" />
          </li>
          <li>
            <img src={twitter} alt="" />
          </li>
        </ul>
      </nav>

      <div className="lg:hidden">
        <button onClick={() => setIsOpen(true)}>
          <img src={menu} alt="" />
        </button>
      </div>
    </header>
  );
}
