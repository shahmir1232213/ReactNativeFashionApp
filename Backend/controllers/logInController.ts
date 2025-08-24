import{ json, type Request, type Response } from 'express';
import jwt from 'jsonwebtoken';


export function logInController (req: Request, res: Response):void{
   const { email, password } = req.body;
   console.log(`Login attempt with email: ${email} and password: ${password}`);
   const payload = {email}
   const secretKey = '123';
   const token = jwt.sign(payload, secretKey, {expiresIn:'10sec'});
   res.status(200).json({message:'Login successful', token});
   
}

