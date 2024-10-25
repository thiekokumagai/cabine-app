import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { CabinesModule } from './cabines/cabines.module';
import { LocationsModule } from './locations/locations.module';
import { ServicesModule } from './services/services.module';
import { DatesModule } from './dates/dates.module';
import { ConfigModule } from "@nestjs/config";
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: false, // Não use em produção, pois recria as tabelas automaticamente
      extra: {
        encrypt: true,
        trustServerCertificate: true, // Ignora a validação de certificados SSL autoassinados
      },
    } as TypeOrmModuleOptions),
    CabinesModule,
    LocationsModule,
    ServicesModule,
    DatesModule,
  ],
})
export class AppModule {}
