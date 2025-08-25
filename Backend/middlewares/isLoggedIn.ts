import jwt from 'jsonwebtoken';
import { type Request, type Response } from 'express';

export async function isLogggedIn(req:Request, res:Response,next){
        //console.log('req.headers:', req.headers);
       const token = req.headers['authorization']?.split(' ')[1];
       
            if(!token){
                console.log('No token provided');
                return res.status(401).json({message:'No token provided'});
            }
        try{  
            console.log('token provided: ',token)
            const decoded = jwt.verify(token as string,'123')
            req.user = decoded;
           // console.log('Token verified, user:', req.user);
          //  res.status(200).json({message:'You are authorized to access this route', user: req.user});
            next();
        }catch(error){
            console.log(error,'token expireed');
            return res.status(401).json({message:'token expired or invalid'});
        }
}