import { Request, Response } from "express";
import { prismaClient } from '../prisma';
import { hashSync } from 'bcrypt'

export const signup = async (req: Request, res: Response) => {
    try {
        const { email, password, name } = req.body;
    
        let user = await prismaClient.user.findFirst({ where: { email } })
    
        if (user) {
            res.send('user alredy exists!')
            //throw Error('user alredy exists!')
        }
        user = await prismaClient.user.create({
            data: {
                name,
                email,
                password: hashSync(password, 10)
            }
        })
        res.status(201).json(user);
    } catch (error) {
        console.log('error', error);
        
    }

}