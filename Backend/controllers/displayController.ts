import type {Request,Response} from 'express';

export function displayController(req:Request,res:Response):void{
   return res.status(200).json({userName:'Shahmir'});
}