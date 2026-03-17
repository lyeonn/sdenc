export class CreateBusinessAreaListDto {
  title: string;
  description?: string;
  imageUrl?: string;
  businessAreaId: number;
  sortOrder?: number;
}
