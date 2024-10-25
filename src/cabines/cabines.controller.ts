import { Controller, Get, Post, Param, Body,UseGuards  } from '@nestjs/common';
import { CabineService } from './cabine.service';
import { Cabine } from './cabine.entity';
import { AuthGuard } from '../auth/auth.guard';

@Controller('cabine') // Define a rota base para todas as rotas desse controlador
@UseGuards(AuthGuard)
export class CabinesController {
  constructor(private readonly cabineService: CabineService) {}

  // GET /cabines - Lista todas as cabines
  @Get()
  findAll(): Promise<Cabine[]> {
    return this.cabineService.findAll();
  }
}
