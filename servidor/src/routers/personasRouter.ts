import { Router } from 'express';
import personasController from '../controllers/personasController';

class PersonasRouter {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/personas', personasController.listaPersonas);
        this.router.get('/personas/:id', personasController.verPersona);
        this.router.post('/personas', personasController.crearPersona);
        this.router.put('/personas/:id', personasController.actualizarPersona);
        this.router.delete('/personas/:id', personasController.borrarPersona);
    }
}

const personasRouter = new PersonasRouter();
export default personasRouter.router;
