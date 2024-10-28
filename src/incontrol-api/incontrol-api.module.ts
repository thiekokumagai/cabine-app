import { Module } from '@nestjs/common';
import { IncontrolApiController } from './incontrol-api.controller';
import { IncontrolApiService } from './incontrol-api.service';
import { HttpModule } from '@nestjs/axios'; // Importar o HttpModule
@Module({
  imports: [HttpModule], 
  controllers: [IncontrolApiController],
  providers: [IncontrolApiService],
})
export class IncontrolApiModule {}