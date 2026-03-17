import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { BusinessAreaModule } from './business-area/business-area.module';

@Module({
  imports: [PrismaModule, BusinessAreaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
