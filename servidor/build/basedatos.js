"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    user: 'postgres',
    host: '192.168.1.241',
    password: 'p0stgr3s',
    database: 'dbtechnosalud',
    port: 5432
});
