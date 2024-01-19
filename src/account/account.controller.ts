import { LoginDTO } from './dto/login.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { RegisterDTO } from './dto/register.dto';
import { AccountService } from './account.service';
import { Body, Controller, Post } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';


@Controller('api')
export class AccountController {
  constructor(private readonly accountService: AccountService) { }

  @Post('login')
  @ApiOkResponse({ type: UserDTO })
  async login(@Body() body: LoginDTO) {
    return this.accountService.login(body);
  }

  @Post('register')
  @ApiOkResponse({ type: UserDTO })
  async register(@Body() body: RegisterDTO) {
    return this.accountService.register(body);
  }
}
