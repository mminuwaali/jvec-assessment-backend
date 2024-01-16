import * as bcrypt from 'bcrypt';

export async function hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
};

export async function comparePasswords(candidatePassword: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(candidatePassword, hashedPassword);
};
