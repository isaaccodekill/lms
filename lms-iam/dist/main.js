"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const iam_module_1 = require("./iam.module");
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
const lms_common_1 = require("lms-common");
const IamProtoPath = (0, path_1.join)(require.resolve('lms-common'), '../../proto/iam.proto');
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(iam_module_1.IamModule, {
        transport: microservices_1.Transport.GRPC,
        options: {
            protoPath: IamProtoPath,
            package: lms_common_1.IAM,
        }
    });
    await app.listen();
}
bootstrap();
//# sourceMappingURL=main.js.map