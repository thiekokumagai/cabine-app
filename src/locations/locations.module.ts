import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Location } from './location.entity';
import { LocationCabine } from './location-cabine.entity';
import { LocationsService } from './locations.service';
import { LocationsController } from './locations.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Location, LocationCabine])],
  providers: [LocationsService],
  controllers: [LocationsController],
})
export class LocationsModule {}