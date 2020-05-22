import { Router } from 'express';
import { listaSaludos,verSaludo } from '../controllers/indexController';

class IndexRouter {
    router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', (req, res) => res.send('Sistema TECHNO SALUD'));
        this.router.get('/saludos', listaSaludos);
        this.router.get('/saludos/:id', verSaludo);
    }
}
const indexRouter = new IndexRouter();
export default indexRouter.router;
