import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";

export class RegisterDTO {
    @IsEmail()
    @ApiProperty()
    readonly email?: string;

    @IsString()
    @IsOptional()
    @ApiProperty()
    readonly firstName?: string;

    @IsString()
    @IsOptional()
    @ApiProperty()
    readonly lastName?: string;

    @IsString()
    @IsOptional()
    @ApiProperty()
    readonly username?: string;

    @IsString()
    @MinLength(8)
    @ApiProperty()
    readonly password: string;
}
