import { ConfigService } from '@nestjs/config';
import { UserModel } from '../user.model';
declare const JwtStratagy_base: any;
export declare class JwtStratagy extends JwtStratagy_base {
    private readonly configService;
    constructor(configService: ConfigService);
    validate({ email }: Pick<UserModel, 'email'>): Promise<string>;
}
export {};
