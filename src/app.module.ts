import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-hefesto'),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public') 
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
