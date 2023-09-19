"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_SERVICE_NAME = exports.UserServiceControllerMethods = exports.IAM_PACKAGE_NAME = exports.User_userType = exports.CreateUserDto_userType = exports.protobufPackage = void 0;
/* eslint-disable */
var microservices_1 = require("@nestjs/microservices");
exports.protobufPackage = "iam";
var CreateUserDto_userType;
(function (CreateUserDto_userType) {
    CreateUserDto_userType[CreateUserDto_userType["ADMIN"] = 0] = "ADMIN";
    CreateUserDto_userType[CreateUserDto_userType["STUDENT"] = 1] = "STUDENT";
    CreateUserDto_userType[CreateUserDto_userType["TEACHER"] = 2] = "TEACHER";
    CreateUserDto_userType[CreateUserDto_userType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CreateUserDto_userType || (exports.CreateUserDto_userType = CreateUserDto_userType = {}));
var User_userType;
(function (User_userType) {
    User_userType[User_userType["ADMIN"] = 0] = "ADMIN";
    User_userType[User_userType["STUDENT"] = 1] = "STUDENT";
    User_userType[User_userType["TEACHER"] = 2] = "TEACHER";
    User_userType[User_userType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(User_userType || (exports.User_userType = User_userType = {}));
exports.IAM_PACKAGE_NAME = "iam";
function UserServiceControllerMethods() {
    return function (constructor) {
        var grpcMethods = [
            "createUser",
            "findAllUsers",
            "findOneUser",
            "findOneUserByUsername",
            "updateUser",
            "removeUser",
        ];
        for (var _i = 0, grpcMethods_1 = grpcMethods; _i < grpcMethods_1.length; _i++) {
            var method = grpcMethods_1[_i];
            var descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("UserService", method)(constructor.prototype[method], method, descriptor);
        }
        var grpcStreamMethods = ["queryUsers"];
        for (var _a = 0, grpcStreamMethods_1 = grpcStreamMethods; _a < grpcStreamMethods_1.length; _a++) {
            var method = grpcStreamMethods_1[_a];
            var descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("UserService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.UserServiceControllerMethods = UserServiceControllerMethods;
exports.USER_SERVICE_NAME = "UserService";
