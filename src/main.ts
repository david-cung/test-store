/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';
import { Logger, ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(bodyParser.json({limit: '1mb'}));
  app.use(bodyParser.urlencoded({limit: '1mb', extended: true}));
  app.enableCors();
  app.setGlobalPrefix('v1');

  const options = new DocumentBuilder()
    .setTitle('Ecovan API')
    .setDescription('The Ecovan API description')
    .setVersion('1.0')
    .addTag('Auth')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.APP_PORT);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
}
bootstrap();
