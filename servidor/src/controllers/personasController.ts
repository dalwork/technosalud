import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { BasPersonas } from '../entities/BasPersonas';

class PersonasController {


    public async listaPersonas(req: Request, res: Response): Promise<any> {
        try {
            const personas = await getRepository(BasPersonas).find();
            return res.json(personas);
        } catch (e) {
            res.status(500).json({texto:'Error Servidor Interno'});
        }
    }

    public async verPersona(req: Request, res: Response): Promise<any> {
        try {
            const id = parseInt(req.params.id);
            const persona = await getRepository(BasPersonas).findOne(id);
            return res.json(persona);
        } catch (e) {
            res.status(500).json({texto:'Error Servidor Interno'});
        }
    }

    public async crearPersona(req: Request, res: Response): Promise<any> {
        try {
            const nuevaPersona = getRepository(BasPersonas).create(req.body);
            const resultado = await getRepository(BasPersonas).save(nuevaPersona);
            return res.json(resultado);
        } catch (e) {
            res.status(500).json({texto:'Error Servidor Interno'});
        }
    }

    public async actualizarPersona(req: Request, res: Response): Promise<any> {
        try {
            console.log("aqui esta " + req.params.id);
            const persona = await getRepository(BasPersonas).findOne(req.params.id);
            console.log(persona);
            if (persona) {
                getRepository(BasPersonas).merge(persona, req.body);
                const resultado = await getRepository(BasPersonas).save(persona);
                return res.json(resultado);
            } else {
                res.json({texto:'No se tiene Registro'});
            }
        } catch (e) {
            res.status(500).json({texto:'Error Servidor Interno'});
        }
    }

    public async borrarPersona (req: Request, res: Response): Promise<any> {
        try {
            const persona = await getRepository(BasPersonas).delete(req.params.id);
            return res.json(persona);
        } catch (e) {
            res.status(500).json({error:'Error Servidor Interno'});
        }
    }
}

const personasController = new PersonasController();
export default personasController;

