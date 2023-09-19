import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    create(createUserDto: CreateUserDto): string;
    findAll(): string;
    findOne(id: string): string;
    findOneByEmail(email: string): string;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
