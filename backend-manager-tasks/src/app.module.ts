import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ManagerModel } from './models/manager.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      process.env.DEV !== 'true'
        ? process.env.MONGODB
        : 'mongodb://localhost/tasksdb',
    ),
    ManagerModel,
  ],
})
export class AppModule {}
