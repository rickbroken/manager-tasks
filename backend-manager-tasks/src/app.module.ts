import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ManagerModel } from './models/manager.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/tasksdb'),
    ManagerModel,
  ],
})
export class AppModule {}
