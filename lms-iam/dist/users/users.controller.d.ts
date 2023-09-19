import { UsersService } from './users.service';
import { CreateUserDto } from 'lms-common';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): string;
    findAll(): string;
    findOne(id: string): string;
    findOneByEmail(id: string): string;
    update(updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
