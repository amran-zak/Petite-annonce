import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateTypeDto {
    @IsNotEmpty()
    @MinLength(4, { message: 'Le minimum de caractère pour le nom du type est de 4' })
    @MaxLength(12, {
        message: 'Le maximum de caractère pour le nom du type est de 32',
    })
    name: string;
}

export type UpdateTypeDto = Partial<CreateTypeDto>;
