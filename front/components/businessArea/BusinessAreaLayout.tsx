'use client';
import type { BusinessArea } from '@/api/businessArea';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

interface Props {
  area: BusinessArea;
  isSelected: boolean;
  onSelect: (area: BusinessArea) => void;
}

export default function BusinessCard({ area, isSelected, onSelect }: Props) {
  return (
    <div
      onClick={() => onSelect(area)}
      className={`group cursor-pointer transition-all duration-300 ${
        isSelected ? 'ring-2 ring-[#1a365d] rounded-xl' : ''
      }`}>
      <h2 className='text-xl font-bold text-[#1a365d] mb-4'>{area.name}</h2>

      <div className='relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100'>
        {area.imageUrl ? (
          <img
            src={`${API_URL}${area.imageUrl}`}
            alt={area.name}
            className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
          />
        ) : (
          <div className='w-full h-full flex items-center justify-center text-gray-300 text-lg'>
            이미지 없음
          </div>
        )}
        <div className='absolute inset-0 bg-[rgba(26,54,93,0.85)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6'>
          <p className='text-white text-sm leading-relaxed text-center'>
            {area.description || '설명이 없습니다.'}
          </p>
        </div>
      </div>
    </div>
  );
}
