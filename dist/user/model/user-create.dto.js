"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const Faker = require("faker-br");
const app_roles_1 = require("../../app-roles");
class UserCreateDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: Faker.name.findName() }),
    (0, class_validator_1.MaxLength)(255, {
        message: 'Tamanho máximo do nome. Deve ser menor que 255 caracteres.',
    }),
    (0, class_validator_1.MinLength)(2, {
        message: 'Tamanho mínimo do nome. Deve ser maior que 2 caracteres.',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserCreateDto.prototype, "first_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: Faker.name.findName() }),
    (0, class_validator_1.MaxLength)(255, {
        message: 'Tamanho máximo do nome. Deve ser menor que 255 caracteres.',
    }),
    (0, class_validator_1.MinLength)(2, {
        message: 'Tamanho mínimo do nome. Deve ser maior que 2 caracteres.',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserCreateDto.prototype, "last_name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        example: Faker.internet.email(),
    }),
    (0, class_validator_1.MaxLength)(255, {
        message: 'Tamanho máximo do email. Deve ser menor que 255 caracteres.',
    }),
    (0, class_validator_1.MinLength)(2, {
        message: 'Tamanho mínimo do email. Deve ser maior que 2 caracteres.',
    }),
    (0, class_validator_1.IsEmail)({}, { message: 'Email inválido.' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UserCreateDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: app_roles_1.AppRoles.USER }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], UserCreateDto.prototype, "role_id", void 0);
exports.UserCreateDto = UserCreateDto;
//# sourceMappingURL=user-create.dto.js.map