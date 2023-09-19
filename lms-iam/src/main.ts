import { NestFactory } from '@nestjs/core';
import { IamModule } from './iam.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { IAM } from 'lms-common';


const IamProtoPath = join(require.resolve('lms-common'), '../../proto/iam.proto');
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(IamModule, {
        transport: Transport.GRPC,
        options: {
          protoPath: IamProtoPath,
          package: IAM,
        }
      }
  );

  await app.listen();
}


bootstrap();
