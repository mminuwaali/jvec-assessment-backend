import { IsString, MinLength } from 'class-validator';

export class CreateContactDto {
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsString()
    @MinLength(11)
    phoneNumber: string;
}
