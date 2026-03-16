'use client';
import { useState } from 'react';
import { fetchBusinessAreas, type BusinessArea } from '@/api/businessArea';
import BusinessCard from '@/components/businessArea/BusinessAreaLayout';
import BusinessAreaItemList from '@/components/businessArea/BusinessAreaItemList';

const initialDataPromise = fetchBusinessAreas();

export default function BusinessAreaPage() {
  const [businessAreas, setBusinessAreas] = useState<BusinessArea[]>([]);
  const [initialized, setInitialized] = useState(false);
  const [selectedArea, setSelectedArea] = useState<BusinessArea | null>(null);

  if (!initialized) {
    initialDataPromise.then((data) => {
      setBusinessAreas(data);
      setInitialized(true);
    });
  }

  const handleSelect = (area: BusinessArea) => {
    setSelectedArea(selectedArea?.id === area.id ? null : area);
  };

  return (
    <div className='min-h-screen bg-white py-16'>
      {/* 페이지 헤더 */}
      <div className='mb-16 text-center'>
        <h1 className='text-3xl font-bold text-[#1a365d] mb-4'>사업분야</h1>
        <p className='text-gray-500'>
          구조 안전의 핵심, SD E&C의 전문 영역을 소개합니다.
        </p>
      </div>

      {/* 사업 카드 목록 */}
      <div className='grid grid-cols-2 gap-8'>
        {businessAreas.map((area) => (
          <BusinessCard
            key={area.id}
            area={area}
            isSelected={selectedArea?.id === area.id}
            onSelect={handleSelect}
          />
        ))}
      </div>

      {/* 선택된 사업분야 하위 항목 */}
      {selectedArea && (
        <div className='mt-16'>
          <BusinessAreaItemList area={selectedArea} />
        </div>
      )}
    </div>
  );
}
