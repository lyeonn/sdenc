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
import { BusinessAreaService } from '../services/business-area.service';
import { CreateBusinessAreaDto } from '../dto/create-business-area.dto';
import { UpdateBusinessAreaDto } from '../dto/update-business-area.dto';

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

@Controller('business-area')
export class BusinessAreaController {
  constructor(private readonly businessAreaService: BusinessAreaService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image', { storage: imageStorage }))
  createBusinessArea(
    @Body() dto: CreateBusinessAreaDto,
    @UploadedFile() file?: Express.Multer.File
  ) {
    if (file) {
      dto.imageUrl = `/uploads/${file.filename}`;
    }
    return this.businessAreaService.createBusinessArea(dto);
  }

  @Get()
  fetchBusinessAreaList() {
    return this.businessAreaService.fetchBusinessAreaList();
  }

  @Get('navbar')
  fetchNavBarBusinessAreas() {
    return this.businessAreaService.fetchNavbarNames();
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('image', { storage: imageStorage }))
  updateBusinessArea(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateBusinessAreaDto,
    @UploadedFile() file?: Express.Multer.File
  ) {
    if (file) {
      dto.imageUrl = `/uploads/${file.filename}`;
    }
    return this.businessAreaService.update(id, dto);
  }

  @Delete(':id')
  deleteBusinessArea(@Param('id', ParseIntPipe) id: number) {
    return this.businessAreaService.remove(id);
  }
}
