import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength, ValidateIf, IsNumber } from 'class-validator';

export class CreateContactDto {
    @ApiProperty()
    @ValidateIf(() => false)
    id: number;

    @IsString()
    @ApiProperty()
    firstName: string;

    @IsString()
    @ApiProperty()
    lastName: string;

    @IsString()
    @ApiProperty()
    @MinLength(11)
    phoneNumber: string;
}
