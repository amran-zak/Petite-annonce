"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const bcrypt = require("bcrypt");
const authenticated_guard_1 = require("../auth/authenticated.guard");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async addUser(lastName, firstName, email, number, password, address, code_postal, city, img) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await this.usersService.insertUser(firstName, lastName, email, hashedPassword, number, address, code_postal, city, img);
        return {
            msg: 'Utilisateur enregistré',
            userId: result.id,
            email: result.email
        };
    }
    async login(email, password, req) {
        const user = await this.usersService.getUser(email);
        if (!user) {
            throw new common_1.BadRequestException("Utilisateur introuvable");
        }
        if (!bcrypt.compareSync(password, user.password)) {
            throw new common_1.BadRequestException("Email ou Mot de passe incorrects");
        }
        req.user = user;
        return { User: req.user,
            msg: 'Utilisateur connecté!' };
    }
    getHello(req) {
        return req.user;
    }
    logout(req) {
        req.session.destroy();
        return { msg: 'The user session has ended' };
    }
};
__decorate([
    (0, common_1.Post)('/signup'),
    __param(0, (0, common_1.Body)('lastname')),
    __param(1, (0, common_1.Body)('firstname')),
    __param(2, (0, common_1.Body)('email')),
    __param(3, (0, common_1.Body)('number')),
    __param(4, (0, common_1.Body)('password')),
    __param(5, (0, common_1.Body)('address')),
    __param(6, (0, common_1.Body)('code_postal')),
    __param(7, (0, common_1.Body)('city')),
    __param(8, (0, common_1.Body)('img')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number, String, String, Number, String, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "addUser", null);
__decorate([
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)('email')),
    __param(1, (0, common_1.Body)('password')),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    (0, common_1.Get)('/protected'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], UsersController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('/logout'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], UsersController.prototype, "logout", null);
UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map