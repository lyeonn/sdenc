"use client";
import { useState } from "react";
import Link from "next/link";

const navItems = [
  {
    label: "회사소개",
    href: "/about",
    subMenus: ["회사소개", "보유면허", "오시는 길"],
  },
  {
    label: "사업분야",
    href: "/business",
    subMenus: ["특화해석", "상세구조해석", "RND 지원"],
  },
  {
    label: "참여실적",
    href: "/projects",
    subMenus: ["BIM", "스마트건설", "특화해석", "S/W 개발"],
  },
  {
    label: "문의",
    href: "/contact",
    subMenus: ["공지사항"],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav
      className="relative w-full bg-[rgba(255,255,255,0.95)] border-b border-gray-200"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => {
        setIsOpen(false);
        setActiveMenu(null);
      }}
    >
      <div className="flex justify-center">
        <div className="px-4 py-3 flex items-center">
          <Link href="/" className="text-xl font-bold text-[#1a365d] w-40">
            SD E&C
          </Link>

          <ul className="flex">
            {navItems.map((item) => (
              <li
                key={item.href}
                className="w-24 text-center"
                onMouseEnter={() => setActiveMenu(item.label)}
              >
                <Link
                  href={item.href}
                  className={`text-xs transition-colors relative pb-4 ${
                    activeMenu === item.label
                      ? "text-[#1a365d] font-semibold"
                      : "text-gray-700 hover:text-[#1a365d]"
                  }`}
                >
                  {item.label}
                  {/* 밑줄 표시 */}
                  {activeMenu === item.label && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-0.5 bg-[#1a365d]" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 메가 메뉴 - 모든 서브메뉴가 한 번에 표시 */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[rgba(255,255,255,0.9)] shadow-lg py-4 backdrop-blur-sm border-t border-gray-200">
          <div className="flex justify-center">
            <div className="px-4 flex">
              <div className="w-40" /> {/* 로고 자리 */}
              <ul className="flex">
                {navItems.map((item) => (
                  <li key={item.href} className="w-24 text-center">
                    {item.subMenus.map((sub) => (
                      <Link
                        key={sub}
                        href="#"
                        className="block py-1 text-xs text-gray-600 hover:text-[#1a365d] hover:font-semibold"
                      >
                        {sub}
                      </Link>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
