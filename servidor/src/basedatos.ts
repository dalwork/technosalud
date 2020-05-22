import { Pool } from 'pg'
export const pool = new Pool({
    user: 'postgres',
    host: '192.168.1.241',
    password: 'p0stgr3s',
    database: 'dbtechnosalud',
    port: 5432
})
