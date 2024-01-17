import { User } from 'src/account/entities/user.entity';
import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';

@Table
export class Contact extends Model<Contact> {
    @Column(DataType.STRING)
    firstName: string;

    @Column(DataType.STRING)
    lastName: string;

    @Column(DataType.STRING)
    phoneNumber: string;

    @ForeignKey(() => User)
    userId: number;

    @BelongsTo(() => User, { onDelete: 'CASCADE' })
    user: User;

};
