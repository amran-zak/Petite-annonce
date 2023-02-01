import {IsNotEmpty, MaxLength, MinLength} from "class-validator";
export class CreateCategoryDto {
    @IsNotEmpty()
    @MinLength(4, { message: 'Le minimum de caractère pour le nom de la catégorie est de 4' })
    @MaxLength(32, {
        message: 'Le maximum de caractère pour le nom de la catégorie est de 32'
    })
    name: string;
}

export type UpdateCategoryDto = Partial<CreateCategoryDto>;
