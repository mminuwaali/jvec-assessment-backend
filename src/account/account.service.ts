import { Op } from 'sequelize';
import { JwtService } from '@nestjs/jwt';
import { LoginDTO } from './dto/login.dto';
import { User } from './entities/user.entity';
import { RegisterDTO } from './dto/register.dto';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class AccountService {
    constructor(private readonly jwt: JwtService) { }

    async login({ email = '', username = '', password = '' }: LoginDTO) {
        // converts the data to lowercase before validation
        email = email.toLowerCase(); username = username.toLowerCase();

        console.log(email, username);

        // find user by email or username
        let user = await User.findOne({ where: { [Op.or]: { email, username } } });

        // throw error if user does not exists or is password is invalid
        if (!user) throw new BadRequestException('Invalid credentials');
        else if (!await user.comparePassword(password)) throw new BadRequestException('Invalid credentials');

        // return user and token object
        return this.generateUserTokenObject(user);
    }

    async register(data: RegisterDTO) {
for (const key in data) {
    
}
        // find user by email or username
        let user = await User.findOne({ where: { [Op.or]: { email: data.email || '', username: data.username || '' } } });

        // throw error if user exists
        if (user) throw new BadRequestException('a user with the given email or username already exists');

        // create new user and return user and token object
        user = await User.create(data);
        return this.generateUserTokenObject(user);
    }

    private generateUserTokenObject(user: User) {
        // creates a jwt token from user data
        let token = this.jwt.sign({ id: user.id });
        return { token, user: user.toJSON() };
    };
}
