'use client';
import { useState } from 'react';
import {
  fetchBusinessAreas,
  createBusinessArea,
  updateBusinessArea,
  deleteBusinessArea,
  createBusinessAreaList,
  updateBusinessAreaList,
  deleteBusinessAreaList,
  type BusinessArea,
  type BusinessAreaListItem
} from '@/api/businessArea';
import BusinessAreaList from '@/components/admin/businessArea/BusinessAreaList';
import BusinessAreaDetail from '@/components/admin/businessArea/BusinessAreaDetail';
import AreaModal from '@/components/admin/businessArea/AreaModal';
import ListItemModal from '@/components/admin/businessArea/ListItemModal';

// 초기 데이터를 컴포넌트 외부에서 fetch
const initialDataPromise = fetchBusinessAreas();

export default function BusinessAreaAdminPage() {
  const [businessAreas, setBusinessAreas] = useState<BusinessArea[]>([]);
  const [initialized, setInitialized] = useState(false);
  const [selectedArea, setSelectedArea] = useState<BusinessArea | null>(null);
  const [editingArea, setEditingArea] = useState<Partial<BusinessArea> | null>(
    null
  );
  const [editingList, setEditingList] =
    useState<Partial<BusinessAreaListItem> | null>(null);

  // 초기 로드
  if (!initialized) {
    initialDataPromise.then((data) => {
      setBusinessAreas(data);
      setInitialized(true);
    });
  }

  const loadData = async (currentSelectedId?: number) => {
    const data = await fetchBusinessAreas();
    setBusinessAreas(data);
    if (currentSelectedId) {
      const updated = data.find((a) => a.id === currentSelectedId);
      setSelectedArea(updated || null);
    }
  };

  // ========== 사업분야 ==========
  const handleSaveArea = async (
    data: Partial<BusinessArea>,
    imageFile?: File
  ) => {
    if (!data.name) return;
    if (data.id) {
      await updateBusinessArea(
        data.id,
        { name: data.name, description: data.description || '' },
        imageFile
      );
    } else {
      await createBusinessArea(
        { name: data.name, description: data.description || '' },
        imageFile
      );
    }
    setEditingArea(null);
    loadData(selectedArea?.id);
  };

  const handleDeleteArea = async (id: number) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;
    await deleteBusinessArea(id);
    setSelectedArea(null);
    loadData();
  };

  // ========== 하위 항목 ==========
  const handleSaveList = async (
    data: Partial<BusinessAreaListItem>,
    imageFile?: File
  ) => {
    if (!data.title || !selectedArea) return;
    if (data.id) {
      await updateBusinessAreaList(
        data.id,
        { title: data.title, description: data.description || '' },
        imageFile
      );
    } else {
      await createBusinessAreaList(
        {
          title: data.title,
          description: data.description || '',
          businessAreaId: selectedArea.id
        },
        imageFile
      );
    }
    setEditingList(null);
    loadData(selectedArea.id);
  };

  const handleDeleteList = async (id: number) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;
    await deleteBusinessAreaList(id);
    loadData(selectedArea?.id);
  };

  return (
    <div>
      <div className='flex items-center justify-between mb-6'>
        <h1 className='text-2xl font-bold text-gray-800'>사업분야 관리</h1>
        <button
          onClick={() => setEditingArea({ name: '', description: '' })}
          className='px-4 py-2 bg-[#1a365d] text-white rounded-lg hover:bg-[#2a4a7f] transition-colors text-sm'>
          + 사업분야 추가
        </button>
      </div>

      <div className='grid grid-cols-3 gap-6'>
        <div className='col-span-1'>
          <BusinessAreaList
            businessAreas={businessAreas}
            selectedAreaId={selectedArea?.id || null}
            onSelect={setSelectedArea}
            onEdit={(area) => setEditingArea({ ...area })}
            onDelete={handleDeleteArea}
          />
        </div>
        <div className='col-span-2'>
          <BusinessAreaDetail
            selectedArea={selectedArea}
            onCreateList={() =>
              setEditingList({ title: '', description: '' })
            }
            onEditList={(item) => setEditingList({ ...item })}
            onDeleteList={handleDeleteList}
          />
        </div>
      </div>

      {editingArea && (
        <AreaModal
          editingArea={editingArea}
          onSave={handleSaveArea}
          onClose={() => setEditingArea(null)}
        />
      )}

      {editingList && (
        <ListItemModal
          editingList={editingList}
          onSave={handleSaveList}
          onClose={() => setEditingList(null)}
        />
      )}
    </div>
  );
}
