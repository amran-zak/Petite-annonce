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
    @MaxLength(250, {
        message: 'The max length of city is 250 characters',
    })
    city: string;

    @IsNotEmpty()
    @IsBoolean()
    isVerified: Boolean;

    @IsNotEmpty()
    @IsNumber()
    nbImageMax: number;

    @IsNotEmpty()
    @MinLength(3, { message: 'The min length of type is 3 characters' })
    @MaxLength(50, { message: 'The max length of type is 50 characters' })
    type: string;

    @IsNotEmpty()
    @MinLength(3, { message: 'The min length of category is 3 characters' })
    @MaxLength(50, { message: 'The max length of category is 50 characters' })
    category: string;

}

export type updatePublicationDto = Partial<CreatePublicationDto>;
