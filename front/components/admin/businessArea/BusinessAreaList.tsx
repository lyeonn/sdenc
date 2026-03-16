'use client';
import type { BusinessArea } from '@/api/businessArea';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

interface Props {
  businessAreas: BusinessArea[];
  selectedAreaId: number | null;
  onSelect: (area: BusinessArea) => void;
  onEdit: (area: BusinessArea) => void;
  onDelete: (id: number) => void;
}

export default function BusinessAreaList({
  businessAreas,
  selectedAreaId,
  onSelect,
  onEdit,
  onDelete
}: Props) {
  return (
    <div className='bg-white rounded-lg shadow'>
      <div className='px-4 py-3 border-b border-gray-200'>
        <h2 className='font-semibold text-gray-700'>사업분야 목록</h2>
      </div>
      <div className='divide-y divide-gray-100'>
        {businessAreas.length === 0 ? (
          <p className='px-4 py-8 text-center text-gray-400 text-sm'>
            등록된 사업분야가 없습니다.
          </p>
        ) : (
          businessAreas.map((area) => (
            <div
              key={area.id}
              onClick={() => onSelect(area)}
              className={`px-4 py-3 cursor-pointer transition-colors ${
                selectedAreaId === area.id
                  ? 'bg-blue-50 border-l-4 border-[#1a365d]'
                  : 'hover:bg-gray-50'
              }`}>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  {area.imageUrl && (
                    <img
                      src={`${API_URL}${area.imageUrl}`}
                      alt={area.name}
                      className='w-10 h-10 object-cover rounded'
                    />
                  )}
                  <div>
                    <p className='font-medium text-gray-800'>{area.name}</p>
                    <p className='text-xs text-gray-400 mt-1'>
                      하위 항목 {area.items.length}개
                    </p>
                  </div>
                </div>
                <div className='flex gap-1'>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onEdit(area);
                    }}
                    className='px-2 py-1 text-xs text-blue-600 hover:bg-blue-50 rounded'>
                    수정
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDelete(area.id);
                    }}
                    className='px-2 py-1 text-xs text-red-600 hover:bg-red-50 rounded'>
                    삭제
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
