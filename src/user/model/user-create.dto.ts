import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";
import * as Faker from 'faker-br';
import { AppRoles } from "src/app-roles";

export class UserCreateDto {
    @ApiProperty({ example: Faker.name.findName() })
    @MaxLength(255, {
        message: 'Tamanho máximo do nome. Deve ser menor que 255 caracteres.',
    })
    @MinLength(2, {
        message: 'Tamanho mínimo do nome. Deve ser maior que 2 caracteres.',
    })
    @IsNotEmpty()
    first_name: string;

    @ApiProperty({ example: Faker.name.findName() })
    @MaxLength(255, {
        message: 'Tamanho máximo do nome. Deve ser menor que 255 caracteres.',
    })
    @MinLength(2, {
        message: 'Tamanho mínimo do nome. Deve ser maior que 2 caracteres.',
    })
    @IsNotEmpty()
    last_name: string;

    @IsNotEmpty()
    @ApiProperty({
        example: Faker.internet.email(),
      })
      @MaxLength(255, {
        message: 'Tamanho máximo do email. Deve ser menor que 255 caracteres.',
      })
      @MinLength(2, {
        message: 'Tamanho mínimo do email. Deve ser maior que 2 caracteres.',
      })
      @IsEmail({}, { message: 'Email inválido.' })
    @IsEmail()
    email: string;

    @ApiProperty({ example: AppRoles.USER })
    @IsNotEmpty()
    role_id: number;
}