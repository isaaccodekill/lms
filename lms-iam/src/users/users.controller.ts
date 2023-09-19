import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UsersService } from './users.service';
import { UserServiceController, UserServiceControllerMethods, CreateUserDto } from 'lms-common';


@Controller()
@UserServiceControllerMethods()
export class UsersController implements UserServiceController{
  constructor(private readonly usersService: UsersService) {}


  createUser(@Payload() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  findAllUsers() {
    return this.usersService.findAll();
  }

  findOneUser(@Payload() id: string) {
    return this.usersService.findOne(id);
  }

  findOneByEmail(@Payload() id: string) {
    return this.usersService.findOneByEmail(id);
  }

  update(@Payload() updateUserDto: UpdateUserDto) {
    return this.usersService.update(updateUserDto.id, updateUserDto);
  }

  remove(@Payload() id: number) {
    return this.usersService.remove(id);
  }
}
