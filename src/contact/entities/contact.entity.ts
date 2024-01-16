import { User } from 'src/account/entities/user.entity';
import { Model, Table, Column, DataType, BeforeCreate, AfterCreate, ForeignKey, BelongsTo } from 'sequelize-typescript';

@Table
export class Contact extends Model<Contact> {
    @Column
    firstName: string;

    @Column
    lastName: string;

    @Column
    phoneNumber: string;

    @ForeignKey(() => User)
    userId: number;

    @BelongsTo(() => User, { onDelete: 'CASCADE' })
    user: User;

};
