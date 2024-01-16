import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Contact } from './entities/contact.entity';
import { ContactController } from './contact.controller';

@Module({
  providers: [ContactService],
  controllers: [ContactController],
  imports: [SequelizeModule.forFeature([Contact])],
})
export class ContactModule { }
