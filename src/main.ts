import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser())
  app.enableCors({
    origin: 'http://localhost:4200',
    credentials: true
  })

  const config = new DocumentBuilder()
    .setTitle('WEB API - Boilerplate')
    .setDescription('API responsável: Boilerplate')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);

  const url = await app.getUrl();

  const logger = new Logger();

  logger.debug(`Swagger application is running on: ${url}/swagger`);
}
bootstrap();
 