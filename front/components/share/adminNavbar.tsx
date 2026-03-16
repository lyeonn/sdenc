'use client';
import Link from 'next/link';

export default function AdminNavbar() {
  const handleLogout = () => {
    // TODO: 로그인 구현 후 로그아웃 로직 추가
    alert('로그아웃');
  };

  return (
    <nav className='w-full bg-[rgba(255,255,255,0.95)] border-b border-gray-200'>
      <div className='max-w-[1200px] w-full mx-auto px-4 py-4 flex items-center justify-between'>
        <Link href='/admin' className='flex items-baseline gap-2'>
          <span className='text-3xl font-bold text-[#1a365d]'>SD E&C</span>
          <span className='text-sm text-gray-400 font-medium'>admin</span>
        </Link>

        <div className='flex items-center gap-6'>
          <Link
            href='/'
            className='text-sm text-gray-500 underline underline-offset-4 hover:text-[#1a365d] transition-colors'>
            홈으로 가기
          </Link>
          <button
            onClick={handleLogout}
            className='px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors'>
            로그아웃
          </button>
        </div>
      </div>
    </nav>
  );
}
