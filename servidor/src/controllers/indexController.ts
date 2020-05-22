import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import { pool } from "../basedatos";

export const listaSaludos = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query('SELECT * FROM saludos');
        console.log(response.rows);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Servidor Interno');
    }
}

export const verSaludo = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        const response: QueryResult = await pool.query('SELECT * FROM saludos WHERE id_saludo= $1', [id]);
        console.log(response.rows);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Servidor Interno');
    }
}