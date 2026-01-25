"use client";

import Link from "next/link";

const navItems = [
  { label: "회사소개", href: "/" },
  { label: "사업분야", href: "/about" },
  { label: "참여실적", href: "/business" },
  { label: "문의", href: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="w-full bg-[rgba(255,255,255,0.95)] border-b border-gray-200 flex justify-center">
      <div className="px4 py-3 flex items-center gap-52">
        <Link href="/" className="text-xl font-bold text-[#1a365d]">
          SD E&C
        </Link>

        <ul className="flex items-center gap-12">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-xs text-gray-700 hover:text-[#1a365d] transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
