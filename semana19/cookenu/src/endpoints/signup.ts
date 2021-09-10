import { Request, Response } from "express";
import { userData} from "../database/userData";
import { user } from "../class/user";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";


export async function signup(req:Request, res:Response) {
    try {
    const{name, email, password} = req.body;
        if(!name || !email || !password){
            res
               .status(422)
               .send(
                   "Invalid caracters , please set the correctaly parameters"
               );
        }
        const userData = new userData();
        const userError = await userData.findUserByEmail(email);
        if (userError) {
            res.status(409).send ("Email Já cadastrado!")
    }
        const hashManager = new HashManager();
        const hashPassword = await hashManager.hash(password);
    
        const newUser = new user (id, name, email, hashPassword,);

        await userData.createUser(newUser);
        const authenticator = new Authenticator()
        const token = authenticator.generate({id,email})
        
        res.status(200).send({message: "Usuário criado com sucesso", token })
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}
