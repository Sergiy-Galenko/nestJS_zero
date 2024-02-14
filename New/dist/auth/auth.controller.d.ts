import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: AuthDto): Promise<any>;
    login({ login, password }: AuthDto): Promise<{
        access_token: any;
    }>;
}
