'use client';
import type { BusinessArea, BusinessAreaListItem } from '@/api/businessArea';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

interface Props {
  selectedArea: BusinessArea | null;
  onCreateList: () => void;
  onEditList: (item: BusinessAreaListItem) => void;
  onDeleteList: (id: number) => void;
}

export default function BusinessAreaDetail({
  selectedArea,
  onCreateList,
  onEditList,
  onDeleteList
}: Props) {
  if (!selectedArea) {
    return (
      <div className='bg-white rounded-lg shadow p-12 text-center text-gray-400'>
        왼쪽에서 사업분야를 선택해주세요.
      </div>
    );
  }

  return (
    <div className='bg-white rounded-lg shadow'>
      <div className='px-4 py-3 border-b border-gray-200 flex items-center justify-between'>
        <h2 className='font-semibold text-gray-700'>
          {selectedArea.name} - 하위 항목
        </h2>
        <button
          onClick={onCreateList}
          className='px-3 py-1.5 bg-[#1a365d] text-white rounded text-sm hover:bg-[#2a4a7f] transition-colors'>
          + 항목 추가
        </button>
      </div>
      <div className='p-4'>
        {selectedArea.items.length === 0 ? (
          <p className='py-8 text-center text-gray-400 text-sm'>
            등록된 항목이 없습니다.
          </p>
        ) : (
          <table className='w-full'>
            <thead>
              <tr className='text-left text-sm text-gray-500 border-b'>
                <th className='pb-2 font-medium'>제목</th>
                <th className='pb-2 font-medium'>설명</th>
                <th className='pb-2 font-medium'>이미지</th>
                <th className='pb-2 font-medium w-24'>관리</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-100'>
              {selectedArea.items.map((item) => (
                <tr key={item.id} className='text-sm'>
                  <td className='py-3 font-medium text-gray-800'>
                    {item.title}
                  </td>
                  <td className='py-3 text-gray-500'>
                    {item.description || '-'}
                  </td>
                  <td className='py-3'>
                    {item.imageUrl ? (
                      <img
                        src={`${API_URL}${item.imageUrl}`}
                        alt={item.title}
                        className='w-12 h-12 object-cover rounded'
                      />
                    ) : (
                      <span className='text-gray-400'>-</span>
                    )}
                  </td>
                  <td className='py-3'>
                    <div className='flex gap-1'>
                      <button
                        onClick={() => onEditList(item)}
                        className='px-2 py-1 text-xs text-blue-600 hover:bg-blue-50 rounded'>
                        수정
                      </button>
                      <button
                        onClick={() => onDeleteList(item.id)}
                        className='px-2 py-1 text-xs text-red-600 hover:bg-red-50 rounded'>
                        삭제
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
