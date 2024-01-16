import { Module } from '@nestjs/common';
import { JWTModule } from './jwt.module';
import { DatabaseModule } from './db.module';
import { AccountModule } from './account/account.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  controllers: [],
  providers: [ConfigService],
  imports: [
    JWTModule,
    AccountModule,
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
})
export class AppModule { }
