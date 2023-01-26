import { SetMetadata } from "@nestjs/common"
import {UserRole} from "../users/interfaces/user.interface";

export const hasRoles = (...hasRoles: UserRole[]) => SetMetadata('roles', hasRoles);