import { Module } from '@nestjs/common';
import { BusinessAreaController } from './controller/business-area.controller';
import { BusinessAreaListController } from './controller/business-area-list.controller';
import { BusinessAreaService } from './services/business-area.service';
import { BusinessAreaListService } from './services/business-area-list.service';

@Module({
  controllers: [BusinessAreaController, BusinessAreaListController],
  providers: [BusinessAreaService, BusinessAreaListService]
})
export class BusinessAreaModule {}
