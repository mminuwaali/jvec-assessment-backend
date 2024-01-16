import { IsString, IsEmail, MinLength, ValidateIf } from 'class-validator';

export class LoginDTO {
    @IsEmail()
    @ValidateIf((obj: LoginDTO) => !obj.username)
    readonly email?: string;

    @IsString()
    @ValidateIf((obj: LoginDTO) => !obj.email)
    readonly username?: string;

    @IsString()
    @MinLength(8)
    readonly password: string;
}
