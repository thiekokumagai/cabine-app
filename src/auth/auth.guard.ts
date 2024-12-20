import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request: Request = context.switchToHttp().getRequest();
    const token = request.headers['authorization'];

    if (token !== 'Bearer '+process.env.TOKEN) {
      throw new UnauthorizedException('Token inválido.');
    }
    return true;
  }
}