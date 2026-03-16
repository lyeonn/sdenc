'use client';
import type { BusinessArea } from '@/api/businessArea';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

interface Props {
  area: BusinessArea;
}

export default function BusinessAreaItemList({ area }: Props) {
  return (
    <div>
      <div className='border-l-4 border-[#1a365d] pl-4 mb-8'>
        <h2 className='text-2xl font-bold text-[#1a365d]'>{area.name}</h2>
        {area.description && (
          <p className='text-gray-500 mt-2'>{area.description}</p>
        )}
      </div>

      {area.items.length === 0 ? (
        <p className='text-center text-gray-400 py-12'>
          등록된 항목이 없습니다.
        </p>
      ) : (
        <div className='grid grid-cols-1 gap-6'>
          {area.items.map((item) => (
            <div
              key={item.id}
              className='flex gap-6 bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow'>
              {item.imageUrl && (
                <div className='w-48 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100'>
                  <img
                    src={`${API_URL}${item.imageUrl}`}
                    alt={item.title}
                    className='w-full h-full object-cover'
                  />
                </div>
              )}
              <div className='flex-1'>
                <h3 className='text-lg font-semibold text-gray-800 mb-2'>
                  {item.title}
                </h3>
                {item.description && (
                  <p className='text-gray-500 text-sm leading-relaxed'>
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
