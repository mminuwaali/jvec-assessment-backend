import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";

export class RegisterDTO {
    @IsEmail()
    readonly email?: string;

    @IsString() @IsOptional()
    readonly firstName?: string;

    @IsString() @IsOptional()
    readonly lastName?: string;

    @IsString() @IsOptional()
    readonly username?: string;

    @IsString()
    @MinLength(8)
    readonly password: string;
}
