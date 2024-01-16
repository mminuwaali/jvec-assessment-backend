import { hashPassword, comparePasswords } from 'src/app.utilities';
import { Model, Table, Column, DataType, BeforeCreate, AfterCreate } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
    @Column
    email: string;

    @Column
    profile?: string;

    @Column
    firstName: string;

    @Column
    lastName: string;

    @Column
    username: string;

    @Column
    password: string;

    @Column
    phoneNumber: string;

    // methods

    public toJSON() {
        const { password, ...args } = this.get();
        return args;
    };

    async changePassword(plain: string) {
        try {
            this.password = await hashPassword(plain);
            await this.save();
            return true;
        }
        catch (error) {
            return false;
        }
    };

    async comparePassword(plain: string) {
        return await comparePasswords(plain, this.password);
    };

    // signals

    @BeforeCreate
    static async encryptPassword(user: User) {
        user.password = await hashPassword(user.password);
    };
};
