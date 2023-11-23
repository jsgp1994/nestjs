import { Module, Global } from '@nestjs/common';

const API_KEY = '152634';
const API_KEY_PROD = 'PRODUCTION2';



@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV == 'prod' ? API_KEY : API_KEY_PROD,
    },
  ],
  exports: ['API_KEY'],
})
export class DatabaseModule {}
