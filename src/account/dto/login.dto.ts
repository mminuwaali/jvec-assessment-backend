import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, MinLength, ValidateIf } from 'class-validator';

export class LoginDTO {
    @IsEmail()
    @ApiProperty({ required: false })
    @ValidateIf((obj: LoginDTO) => !obj.username)
    readonly email?: string;

    @IsString()
    @ApiProperty({ required: false })
    @ValidateIf((obj: LoginDTO) => !obj.email)
    readonly username?: string;

    @IsString()
    @MinLength(8)
    @ApiProperty()
    readonly password: string;
}
