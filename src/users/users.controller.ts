import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from '../dto/CreateUser.dto';
import { User } from '../schemas/User.Schema';
import mongoose from 'mongoose';
import { UpdateUserDto } from '../dto/UpdateUser.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // /users
  @Post()
  @UsePipes(new ValidationPipe())
  public async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    console.log(createUserDto);
    return this.usersService.createUser(createUserDto);
  }

  // /users
  @Get()
  public getUsers() {
    return this.usersService.getUsers();
  }

  // /users/:id
  @Get(':id')
  public async getUserById(@Param('id') id: string) {
    const isValid: boolean = mongoose.Types.ObjectId.isValid(id);
    const findUser = await this.usersService.getUserById(id);
    if (!isValid) {
      throw new HttpException('User not found', 404);
    }
    if (!findUser) {
      throw new HttpException('User not found', 404);
    }
    return findUser;
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  public async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const isValid: boolean = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid ID', 400);
    const updatedUser = await this.usersService.updateUser(id, updateUserDto);
    if (!updatedUser) throw new HttpException('user not found', 404);
    return updatedUser;
  }

  @Delete(':id')
  public async deleteUser(@Param('id') id: string) {
    const isValid: boolean = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid ID', 400);

    const deletedUser = await this.usersService.deleteUser(id);

    if (!deletedUser) throw new HttpException('User Not Found', 404);
    return;
  }
}
