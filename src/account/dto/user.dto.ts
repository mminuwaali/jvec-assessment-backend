import { RegisterDTO } from './register.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class UserDTO {
    @IsString()
    @ApiProperty()
    @MinLength(8)
    readonly token: string;

    @ApiProperty({ type: RegisterDTO })
    readonly user: RegisterDTO;
}
