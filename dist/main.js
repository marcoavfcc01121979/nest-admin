"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const cookieParser = require("cookie-parser");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.use(cookieParser());
    app.enableCors({
        origin: 'http://localhost:4200',
        credentials: true
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('WEB API - Boilerplate')
        .setDescription('API responsável: Boilerplate')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('swagger', app, document);
    await app.listen(3000);
    const url = await app.getUrl();
    const logger = new common_1.Logger();
    logger.debug(`Swagger application is running on: ${url}/swagger`);
}
bootstrap();
//# sourceMappingURL=main.js.map