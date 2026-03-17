import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateBusinessAreaDto } from '../dto/create-business-area.dto';
import { UpdateBusinessAreaDto } from '../dto/update-business-area.dto';

@Injectable()
export class BusinessAreaService {
  constructor(private readonly prisma: PrismaService) {}

  createBusinessArea(dto: CreateBusinessAreaDto) {
    return this.prisma.businessArea.create({
      data: dto
    });
  }

  async findOne(id: number) {
    const businessArea = await this.prisma.businessArea.findUnique({
      where: { id },
      include: { items: { where: { deletedAt: null } } }
    });

    if (!businessArea || businessArea.deletedAt) {
      throw new NotFoundException('사업분야를 찾을 수 없습니다.');
    }

    return businessArea;
  }

  async fetchNavbarNames(): Promise<{ id: number; name: string }[]> {
    return this.prisma.businessArea.findMany({
      where: { deletedAt: null },
      select: { id: true, name: true },
      orderBy: { sortOrder: 'asc' }
    });
  }

  fetchBusinessAreaList() {
    return this.prisma.businessArea.findMany({
      where: { deletedAt: null },
      include: { items: { where: { deletedAt: null } } },
      orderBy: { sortOrder: 'asc' }
    });
  }

  async update(id: number, dto: UpdateBusinessAreaDto) {
    await this.findOne(id);
    return this.prisma.businessArea.update({
      where: { id },
      data: dto
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.businessArea.update({
      where: { id },
      data: { deletedAt: new Date() }
    });
  }
}
