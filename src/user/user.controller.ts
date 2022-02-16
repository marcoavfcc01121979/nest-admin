import { UserCreateDto } from './model/user-create.dto';
import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Post, Put, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { User } from './model/user.entity';
import { UserService } from './user.service';

import * as bcrypt from 'bcryptjs'
import { AuthGuard } from 'src/auth/auth.guard';
import { UserUpdateDto } from './model/user-update.dto';
import { UpdateDateColumn } from 'typeorm';

@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(AuthGuard)
@Controller('users')
export class UserController {

    constructor(
        private userService: UserService
    ) {}

    @Get()
    async all(@Query('page') page: 1) {
        return this.userService.paginate(page, ['role']);
    }

    @Post()
    async create(@Body() body: UserCreateDto): Promise<User> {
        const password = await bcrypt.hash('1234', 12);

        const { role_id, ...data } = body;

        return this.userService.create({
            ...data,
            password,
            role_id: {id: role_id}
        });
    }

    @Get(':id')
    async get(@Param('id') id: number) {
        // console.log("id ", id);
        return this.userService.findOne({id}, ['role']);
    }

    @Put()
    async update(
        @Param('id') id: number,
        @Body() body: UserUpdateDto
    ) {
        const { role_id, ...data } = body;

        await this.userService.update(id, {
            ...data,
            role_id: { id: role_id }
        });

        return this.userService.findOne({id});
    }

    @Delete('id')
    async delete(@Param('id') id: number) {
        return this.userService.delete(id);
    }

}   
 