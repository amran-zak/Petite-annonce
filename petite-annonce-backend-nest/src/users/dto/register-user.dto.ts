import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class RegisterUserDTO {
    @IsNotEmpty({ message: 'Code postal' })
    @MinLength(5, { message: 'La longueur minimale du mot de passe est de 5 caractères' })
    @MaxLength(5, { message: 'La longueur minimale du mot de passe est de 5 caractères' })
    code_postal: string;

    @IsNotEmpty({ message: 'Password est obligatoire' })
    @MinLength(8, { message: 'La longueur minimale du mot de passe est de 8 caractères' })
    @MaxLength(30, { message: 'La longueur minimale du mot de passe est de 8 caractères' })
    password: string;

    @IsNotEmpty({ message: 'Email est obligatoire' })
    @IsEmail()
    email: string;

    isEmailConfirmed: boolean;
}

export type UpdateUserDTO = Partial<RegisterUserDTO>;
