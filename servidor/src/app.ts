import "reflect-metadata";
import express,{ Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { createConnections } from "typeorm";

import indexRouter from './routers/indexRouter';
import personasRouter from './routers/personasRouter';


class Server{

	public app: Application;

	constructor() {
       this.app = express();
       createConnections();
	   this.config();
	   this.routes();
	}

    config() : void{
       this.app.set('port', process.env.PORT||3000);
       this.app.use(morgan('dev'));
       this.app.use(cors());
       this.app.use(express.json());
       this.app.use(express.urlencoded({extended: false}));
	}

	routes() : void{
        this.app.use('/', indexRouter);
        this.app.use('/techno', personasRouter);
    }
    
	start() : void{
        this.app.listen(this.app.get('port'),()=>{
           console.log(`Servidor sobre el puerto `, this.app.get('port'));
        })
	}
}

const server = new Server();
server.start();
