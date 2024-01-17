import { hashPassword, comparePasswords } from 'src/app.utilities';
import { Model, Table, Column, DataType, BeforeCreate, AfterCreate } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
    @Column(DataType.STRING)
    email: string;

    @Column(DataType.STRING)
    profile?: string;

    @Column(DataType.STRING)
    firstName: string;

    @Column(DataType.STRING)
    lastName: string;

    @Column(DataType.STRING)
    username: string;

    @Column(DataType.STRING)
    password: string;

    @Column(DataType.STRING)
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

    @BeforeCreate
    static async setEmailAndUsernameToLowerCase(user: User) {
        user.email = user.email?.toLowerCase() || '';
        user.username = user.username?.toLowerCase() || '';
    };
};
