import { Module } from '@nestjs/common';
import { JWTModule } from './jwt.module';
import { DatabaseModule } from './db.module';
import { AccountModule } from './account/account.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ContactModule } from './contact/contact.module';

@Module({
  controllers: [],
  providers: [ConfigService],
  imports: [
    JWTModule,
    AccountModule,
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ContactModule,
  ],
})
export class AppModule { }
