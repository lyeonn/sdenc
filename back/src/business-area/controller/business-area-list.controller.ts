import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  UseInterceptors,
  UploadedFile
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { BusinessAreaListService } from '../services/business-area-list.service';
import { CreateBusinessAreaListDto } from '../dto/create-business-area-list.dto';
import { UpdateBusinessAreaListDto } from '../dto/update-business-area-list.dto';

const multer = require('multer');

const imageStorage = multer.diskStorage({
  destination: './uploads',
  filename: (
    _req: Express.Request,
    file: Express.Multer.File,
    cb: (error: Error | null, filename: string) => void
  ) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + extname(file.originalname));
  }
});

@Controller('business-area-list')
export class BusinessAreaListController {
  constructor(
    private readonly businessAreaListService: BusinessAreaListService
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('image', { storage: imageStorage }))
  createBusinessAreaList(
    @Body() dto: CreateBusinessAreaListDto,
    @UploadedFile() file?: Express.Multer.File
  ) {
    if (file) {
      dto.imageUrl = `/uploads/${file.filename}`;
    }
    // FormData에서 오면 string이라 number로 변환
    dto.businessAreaId = Number(dto.businessAreaId);
    return this.businessAreaListService.createBusinessAreaList(dto);
  }

  @Get()
  fetchBusinessAreaListAll() {
    return this.businessAreaListService.fetchBusinessAreaListAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.businessAreaListService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('image', { storage: imageStorage }))
  updateBusinessAreaList(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateBusinessAreaListDto,
    @UploadedFile() file?: Express.Multer.File
  ) {
    if (file) {
      dto.imageUrl = `/uploads/${file.filename}`;
    }
    return this.businessAreaListService.updateBusinessAreaList(id, dto);
  }

  @Delete(':id')
  deleteBusinessAreaList(@Param('id', ParseIntPipe) id: number) {
    return this.businessAreaListService.removeBusinessAreaList(id);
  }
}
