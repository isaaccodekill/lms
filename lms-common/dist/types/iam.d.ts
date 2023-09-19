import { Observable } from "rxjs";
export declare const protobufPackage = "iam";
export interface PaginationDto {
    page: number;
    skip: number;
}
/** define the objects needed for the services */
export interface Empty {
}
export interface Users {
    users: User[];
}
export interface FindOneUserDto {
    id: string;
}
export interface FindOneUserByUserNameDto {
    username: string;
}
export interface UpdateUserDto {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    passwordHash: string;
    dateOfBirth: string;
    profileImage: string;
}
export interface CreateUserDto {
    username: string;
    email: string;
    passwordHash: string;
    firstName: string;
    lastName: string;
    type: CreateUserDto_userType;
    dateOfBirth: string;
    profileImage?: string | undefined;
}
export declare enum CreateUserDto_userType {
    ADMIN = 0,
    STUDENT = 1,
    TEACHER = 2,
    UNRECOGNIZED = -1
}
export interface User {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    passwordHash: string;
    type: User_userType;
    dateOfBirth: string;
    profileImage?: string | undefined;
}
export declare enum User_userType {
    ADMIN = 0,
    STUDENT = 1,
    TEACHER = 2,
    UNRECOGNIZED = -1
}
export declare const IAM_PACKAGE_NAME = "iam";
/** define the user service */
export interface UserServiceClient {
    createUser(request: CreateUserDto): Observable<User>;
    findAllUsers(request: Empty): Observable<Users>;
    findOneUser(request: FindOneUserDto): Observable<User>;
    findOneUserByUsername(request: FindOneUserByUserNameDto): Observable<User>;
    updateUser(request: UpdateUserDto): Observable<User>;
    removeUser(request: FindOneUserDto): Observable<User>;
    queryUsers(request: Observable<PaginationDto>): Observable<Users>;
}
/** define the user service */
export interface UserServiceController {
    createUser(request: CreateUserDto): Promise<User> | Observable<User> | User;
    findAllUsers(request: Empty): Promise<Users> | Observable<Users> | Users;
    findOneUser(request: FindOneUserDto): Promise<User> | Observable<User> | User;
    findOneUserByUsername(request: FindOneUserByUserNameDto): Promise<User> | Observable<User> | User;
    updateUser(request: UpdateUserDto): Promise<User> | Observable<User> | User;
    removeUser(request: FindOneUserDto): Promise<User> | Observable<User> | User;
    queryUsers(request: Observable<PaginationDto>): Observable<Users>;
}
export declare function UserServiceControllerMethods(): (constructor: Function) => void;
export declare const USER_SERVICE_NAME = "UserService";
