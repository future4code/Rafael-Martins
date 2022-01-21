import { Request, Response } from "express";
import { UserInputDTO } from "../model/User";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import EmailValidation from "../services/EmailValidation";

export class UserController {
    constructor(private userBusiness: UserBusiness) { }


    async signup(req: Request, res: Response) {

        try {

            const input: UserInputDTO = {
                email: req.body.email,
                name: req.body.name,
                password: req.body.password,
                cpf: req.body.cpf,
                amount: req.body.amount,
                role: req.body.role
            }

            const token = await userBusiness.createUser(input);

            res.status(200).send({ token });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

}

const hashManager = new HashManager()
const authenticator = new Authenticator()
const idGenerator = new IdGenerator()
const emailValidation = new EmailValidation()
const userDataBase = new UserDatabase()
const userBusiness = new UserBusiness(userDataBase, authenticator, hashManager, idGenerator, emailValidation)
const userController = new UserController(userBusiness)

export default userController