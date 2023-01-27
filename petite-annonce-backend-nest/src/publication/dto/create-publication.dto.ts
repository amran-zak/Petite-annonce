import {IsBoolean, IsDate, IsNotEmpty, IsNumber, MaxLength, MinLength} from 'class-validator';

export class CreatePublicationDto {
    @IsNotEmpty()
    @MinLength(8, { message: 'The min length of title is 8 characters' })
    @MaxLength(20, { message: 'The max length of title is 8 characters' })
    title: string;

    @IsNotEmpty()
    @MinLength(25, { message: 'The min length of description is 25 characters' })
    @MaxLength(250, {
        message: 'The max length of description is 250 characters',
    })
    description: string;

    @IsNotEmpty()
    @IsDate()
    dateCreate: Date;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @MinLength(25, { message: 'The min length of address is 25 characters' })
    @MaxLength(250, {
        message: 'The max length of address is 250 characters',
    })
    address: string;

    @IsNotEmpty()
    @IsNumber()
    code_postal: number;

    @IsNotEmpty()
    @MinLength(5, { message: 'The min length of city is 5 characters' })
    @MaxLength(250, {message: 'The max length of city is 250 characters',})
    city: string;

    @IsNotEmpty()
    @IsBoolean()
    isVerified: Boolean;

    @IsNotEmpty()
    @IsNumber()
    nbImageMax: number;

}

export type updatePublicationDto = Partial<CreatePublicationDto>;
