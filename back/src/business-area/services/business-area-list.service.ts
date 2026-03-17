import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateBusinessAreaListDto } from '../dto/create-business-area-list.dto';
import { UpdateBusinessAreaListDto } from '../dto/update-business-area-list.dto';

@Injectable()
export class BusinessAreaListService {
  constructor(private readonly prisma: PrismaService) {}

  createBusinessAreaList(dto: CreateBusinessAreaListDto) {
    return this.prisma.businessAreaList.create({
      data: dto
    });
  }

  async findOne(id: number) {
    const item = await this.prisma.businessAreaList.findUnique({
      where: { id }
    });

    if (!item || item.deletedAt) {
      throw new NotFoundException('사업분야 항목을 찾을 수 없습니다.');
    }

    return item;
  }

  fetchBusinessAreaListAll() {
    return this.prisma.businessAreaList.findMany({
      where: { deletedAt: null },
      orderBy: { sortOrder: 'asc' }
    });
  }

  async updateBusinessAreaList(id: number, dto: UpdateBusinessAreaListDto) {
    await this.findOne(id);
    return this.prisma.businessAreaList.update({
      where: { id },
      data: dto
    });
  }

  async removeBusinessAreaList(id: number) {
    await this.findOne(id);
    return this.prisma.businessAreaList.update({
      where: { id },
      data: { deletedAt: new Date() }
    });
  }
}
