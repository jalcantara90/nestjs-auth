// Commons
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// env
import { PORT } from './config/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}
bootstrap();
