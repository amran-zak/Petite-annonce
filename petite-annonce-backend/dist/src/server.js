"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// require('dotenv').config();
const express_1 = __importDefault(require("express"));
const default_1 = __importDefault(require("../config/default"));
const connectDB_1 = __importDefault(require("./utils/connectDB"));
const app = (0, express_1.default)();
const port = default_1.default.port;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
    // ? call the connectDB function here
    (0, connectDB_1.default)();
});
//# sourceMappingURL=server.js.map