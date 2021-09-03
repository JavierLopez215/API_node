import { Router } from "express";
import GamesController from '../controllers/gamesController'

class AreaRoutes {

    public router:Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', GamesController.list);
        this.router.get('/:id',GamesController.getOne);
        this.router.post('/' , GamesController.create);
        this.router.delete('/:id',GamesController.delete);
        this.router.put('/:id',GamesController.update);

    }
}

const areaRoutes = new AreaRoutes();
export default areaRoutes.router;