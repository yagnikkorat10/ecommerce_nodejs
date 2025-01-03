import { Request, Response } from "express";
import { emit } from "process";
import { prismaClient } from "..";
import { hashSync } from 'bcrypt'

export const signup = async (req: Request, res: Response) => {

    
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
    res.json(user)
}