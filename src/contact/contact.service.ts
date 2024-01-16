import { WhereOptions } from 'sequelize';
import { Contact } from './entities/contact.entity';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ContactService {
  async create(createContactDto: CreateContactDto, userId: number) {
    let contact = await Contact.create({ ...createContactDto, userId });
    return contact.toJSON();
  }

  async findAll(userId: number) {
    return await Contact.findAll({ where: { userId } });
  }

  async findOne(id: number, userId: number) {
    let contact = await this.findContact({ id, userId });
    return contact.toJSON();
  }

  async remove(id: number, userId: number) {
    let contact = await this.findContact({ id, userId });
    contact.destroy();
  }

  async update(id: number, updateContactDto: UpdateContactDto, userId: number) {
    let contact = await this.findContact({ id, userId });
    contact = await contact.update(updateContactDto);

    return contact.toJSON();
  }

  private async findContact(where: WhereOptions<Contact>) {
    let contact = await Contact.findOne({ where });
    if (!contact) throw new NotFoundException('contact with the given id not found');

    return contact;
  }
}
