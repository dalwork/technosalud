"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const typeorm_1 = require("typeorm");
const indexRouter_1 = __importDefault(require("./routers/indexRouter"));
const personasRouter_1 = __importDefault(require("./routers/personasRouter"));
class Server {
    constructor() {
        this.app = express_1.default();
        typeorm_1.createConnections();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRouter_1.default);
        this.app.use('/techno', personasRouter_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Servidor sobre el puerto `, this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
