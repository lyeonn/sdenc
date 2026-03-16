import Link from 'next/link';

export default function AdminPage() {
  return (
    <div>
      <h1 className='text-2xl font-bold text-gray-800 mb-6'>관리자 대시보드</h1>
      <div className='grid grid-cols-2 gap-4'>
        <Link
          href='/admin/business-area'
          className='p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow'>
          <h2 className='text-lg font-semibold text-[#1a365d]'>사업분야 관리</h2>
          <p className='text-sm text-gray-500 mt-1'>
            사업분야 및 하위 항목을 관리합니다.
          </p>
        </Link>
      </div>
    </div>
  );
}
