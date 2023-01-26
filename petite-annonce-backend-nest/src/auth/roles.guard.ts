import {Injectable, CanActivate, ExecutionContext, Inject, forwardRef} from "@nestjs/common";
import {Reflector} from "@nestjs/core";
import {Observable} from "rxjs";
import {UserRole} from "../users/interfaces/user.interface";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor( private reflector: Reflector) {
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const roles = this.reflector.get<UserRole[]>('roles', context.getHandler());
        if (!roles) {
            return true;
        }

        const { user } = context.switchToHttp().getRequest();
        console.log(user.role);
        return roles.some((role) => user.role?.includes(role));
    }
}