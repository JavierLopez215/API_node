import {Request, Response} from 'express';
import pool from '../database';
import db from '../database'

class GamesController {
    
    public async list (req: Request, res: Response){
        const games = await pool.query('SELECT * FROM game')
        res.json(games);
    } 

    public getOne (req: Request, res: Response){
        res.json({
            text: 'listing games'
        });
    }

    public async create (req: Request, res: Response) {
        await pool.query('INSERT INTO game set ?', [req.body]);
        res.json({
            message: 'Game Saved'
        });
        // res.json(req.body);
    }

    public delete (req: Request, res: Response){
        res.json({
            text: 'deleting a game'
        });
    }

    public update (req: Request, res: Response){
        res.json({
            text: 'deleting a game'
        })
    }

}
const gameController = new GamesController();
export default gameController;