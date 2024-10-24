import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CabinesController } from './cabines.controller';
import { CabineService } from './cabine.service';
import { Cabine } from './cabine.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cabine])],
  controllers: [CabinesController],
  providers: [CabineService],
})
export class CabinesModule {}