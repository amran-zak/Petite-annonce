import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    addUser(lastName: string, firstName: string, email: string, number: number, password: string, address: string, code_postal: number, city: string, img: string): Promise<{
        msg: string;
        userId: any;
        email: string;
    }>;
    login(req: any): any;
    getHello(req: any): string;
    logout(req: any): any;
}
