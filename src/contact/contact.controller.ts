import { ApiOkResponse } from '@nestjs/swagger';
import { ContactService } from './contact.service';
import { IsAuthenticatedGuard } from 'src/app.guards';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Controller, Get, Post, Req, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';

@Controller('api')
@UseGuards(IsAuthenticatedGuard)
export class ContactController {
  constructor(private readonly contactService: ContactService) { }

  @Get('contact')
  @ApiOkResponse({ type: [CreateContactDto] })
  findAll(@Req() req: RequestType) {
    return this.contactService.findAll(+req.user.id);
  }

  @Get('contact/:id')
  @ApiOkResponse({ type: CreateContactDto })
  findOne(@Param('id') id: string, @Req() req: RequestType) {
    return this.contactService.findOne(+id, +req.user.id);
  }

  @Delete('contact/:id')
  remove(@Param('id') id: string, @Req() req: RequestType) {
    return this.contactService.remove(+id, +req.user.id);
  }

  @Post('contact')
  @ApiOkResponse({ type: CreateContactDto })
  create(@Body() createContactDto: CreateContactDto, @Req() req: RequestType) {
    return this.contactService.create(createContactDto, +req.user.id);
  }

  @Patch('contact/:id')
  @ApiOkResponse({ type: CreateContactDto })
  update(@Param('id') id: string, @Body() updateContactDto: UpdateContactDto, @Req() req: RequestType) {
    return this.contactService.update(+id, updateContactDto, +req.user.id);
  }
}
