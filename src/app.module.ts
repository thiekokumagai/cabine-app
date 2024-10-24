import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { CabinesModule } from './cabines/cabines.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: 'Jj@123456789',
      database: 'laravel',
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: false, // Não use em produção, pois recria as tabelas automaticamente
      extra: {
        trustServerCertificate: true, // Ignora a validação de certificados SSL autoassinados
      },
    } as TypeOrmModuleOptions),
    CabinesModule
  ],
})
export class AppModule {}
