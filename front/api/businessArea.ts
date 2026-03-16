const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export interface BusinessAreaListItem {
  id: number;
  title: string;
  description: string | null;
  imageUrl: string | null;
  sortOrder: number;
}

export interface BusinessArea {
  id: number;
  name: string;
  description: string | null;
  imageUrl: string | null;
  sortOrder: number;
  items: BusinessAreaListItem[];
}

export async function fetchBusinessAreaNames(): Promise<string[]> {
  const res = await fetch(`${API_URL}/business-area/navbar`);
  const data: { id: number; name: string }[] = await res.json();
  return data.map((area) => area.name);
}

// ========== 사업분야 ==========
export async function fetchBusinessAreas(): Promise<BusinessArea[]> {
  const res = await fetch(`${API_URL}/business-area`);
  return res.json();
}

export async function createBusinessArea(
  data: { name: string; description?: string },
  image?: File
) {
  const formData = new FormData();
  formData.append('name', data.name);
  if (data.description) formData.append('description', data.description);
  if (image) formData.append('image', image);

  const res = await fetch(`${API_URL}/business-area`, {
    method: 'POST',
    body: formData
  });
  return res.json();
}

export async function updateBusinessArea(
  id: number,
  data: { name?: string; description?: string },
  image?: File
) {
  const formData = new FormData();
  if (data.name) formData.append('name', data.name);
  if (data.description !== undefined)
    formData.append('description', data.description);
  if (image) formData.append('image', image);

  const res = await fetch(`${API_URL}/business-area/${id}`, {
    method: 'PATCH',
    body: formData
  });
  return res.json();
}

export async function deleteBusinessArea(id: number) {
  await fetch(`${API_URL}/business-area/${id}`, { method: 'DELETE' });
}

// ========== 사업분야 리스트 ==========
export async function createBusinessAreaList(
  data: { title: string; description?: string; businessAreaId: number },
  image?: File
) {
  const formData = new FormData();
  formData.append('title', data.title);
  formData.append('businessAreaId', String(data.businessAreaId));
  if (data.description) formData.append('description', data.description);
  if (image) formData.append('image', image);

  const res = await fetch(`${API_URL}/business-area-list`, {
    method: 'POST',
    body: formData
  });
  return res.json();
}

export async function updateBusinessAreaList(
  id: number,
  data: { title?: string; description?: string },
  image?: File
) {
  const formData = new FormData();
  if (data.title) formData.append('title', data.title);
  if (data.description !== undefined)
    formData.append('description', data.description);
  if (image) formData.append('image', image);

  const res = await fetch(`${API_URL}/business-area-list/${id}`, {
    method: 'PATCH',
    body: formData
  });
  return res.json();
}

export async function deleteBusinessAreaList(id: number) {
  await fetch(`${API_URL}/business-area-list/${id}`, { method: 'DELETE' });
}
