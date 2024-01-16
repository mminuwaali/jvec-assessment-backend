import { LoginDTO } from './dto/login.dto';
import { RegisterDTO } from './dto/register.dto';
import { AccountService } from './account.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('api')
export class AccountController {
  constructor(private readonly accountService: AccountService) { }

  @Post('login')
  async login(@Body() body: LoginDTO) {
    return this.accountService.login(body);
  }

  @Post('register')
  async register(@Body() body: RegisterDTO) {
    return this.accountService.register(body);
  }
}
