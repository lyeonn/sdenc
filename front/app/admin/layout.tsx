'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AdminNavbar from '@/components/share/adminNavbar';

const menuItems = [
  { label: '사업분야 관리', href: '/admin/business-area' }
];

export default function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className='min-h-screen'>
      <AdminNavbar />
      <div className='flex min-h-[calc(100vh-57px)]'>
        {/* 사이드바 */}
        <aside className='w-60 bg-[#1a365d] text-white flex flex-col'>
          <nav className='flex-1 py-4'>
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-6 py-3 text-sm transition-colors ${
                  pathname.startsWith(item.href)
                    ? 'bg-white/20 font-semibold'
                    : 'hover:bg-white/10'
                }`}>
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* 메인 콘텐츠 */}
        <main className='flex-1 bg-gray-50 p-8'>{children}</main>
      </div>
    </div>
  );
}
