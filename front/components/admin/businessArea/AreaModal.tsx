'use client';
import { useRef, useState } from 'react';
import type { BusinessArea } from '@/api/businessArea';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

interface Props {
  editingArea: Partial<BusinessArea>;
  onSave: (data: Partial<BusinessArea>, imageFile?: File) => void;
  onClose: () => void;
}

export default function AreaModal({ editingArea, onSave, onClose }: Props) {
  const [form, setForm] = useState(editingArea);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(
    editingArea.imageUrl ? `${API_URL}${editingArea.imageUrl}` : null
  );
  const fileRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
      <div className='bg-white rounded-lg w-[480px] p-6'>
        <h3 className='text-lg font-bold text-gray-800 mb-4'>
          {editingArea.id ? '사업분야 수정' : '사업분야 추가'}
        </h3>
        <div className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              이름 *
            </label>
            <input
              type='text'
              value={form.name || ''}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a365d]'
              placeholder='사업분야 이름'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              설명
            </label>
            <textarea
              value={form.description || ''}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a365d] h-24 resize-none'
              placeholder='설명을 입력하세요'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              이미지
            </label>
            <input
              ref={fileRef}
              type='file'
              accept='image/*'
              onChange={handleImageChange}
              className='hidden'
            />
            <button
              type='button'
              onClick={() => fileRef.current?.click()}
              className='px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50'>
              파일 선택
            </button>
            {imagePreview && (
              <div className='mt-2 relative inline-block'>
                <img
                  src={imagePreview}
                  alt='미리보기'
                  className='w-32 h-32 object-cover rounded-lg'
                />
                <button
                  type='button'
                  onClick={() => {
                    setImageFile(null);
                    setImagePreview(null);
                    if (fileRef.current) fileRef.current.value = '';
                  }}
                  className='absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full text-xs flex items-center justify-center'>
                  X
                </button>
              </div>
            )}
          </div>
        </div>
        <div className='flex justify-end gap-2 mt-6'>
          <button
            onClick={onClose}
            className='px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200'>
            취소
          </button>
          <button
            onClick={() => onSave(form, imageFile || undefined)}
            className='px-4 py-2 text-sm text-white bg-[#1a365d] rounded-lg hover:bg-[#2a4a7f]'>
            저장
          </button>
        </div>
      </div>
    </div>
  );
}
