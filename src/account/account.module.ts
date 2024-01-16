import { Module } from '@nestjs/common';
import { User } from './entities/user.entity';
import { AccountService } from './account.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { AccountController } from './account.controller';

@Module({
  providers: [AccountService],
  controllers: [AccountController],
  imports: [SequelizeModule.forFeature([User])],
})
export class AccountModule { }
