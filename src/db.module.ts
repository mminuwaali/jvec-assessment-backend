import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
        SequelizeModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (service: ConfigService) => (
                service.get<string>('NODE_ENV') == 'production' ?
                    {
                        logging: false,
                        synchronize: true,
                        dialect: 'postgres',
                        autoLoadModels: true,
                        dialectOptions: { ssl: true },
                        uri: service.get('DATABASE_URL'),
                    } :
                    {
                        logging: true,
                        synchronize: true,
                        dialect: 'sqlite',
                        autoLoadModels: true,
                        storage: 'db.sqlite3',
                    }
            )

        })
    ]
})
export class DatabaseModule { }
