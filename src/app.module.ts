import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AccountModule } from './account/account.module';

@Module({
  controllers: [],
  providers: [ConfigService],
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule.registerAsync({ global: true, inject: [ConfigService], useFactory: (service: ConfigService) => ({ secret: service.get('SECRET_KEY') }) }),
    AccountModule,
  ],
})
export class AppModule { }
