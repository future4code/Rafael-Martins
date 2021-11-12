import { UserInputDTO } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import EmailValidation from "../services/EmailValidation";

export class UserBusiness {
    [x: string]: any;
    constructor(
        private userDataBase: UserDatabase,
        private authenticator: Authenticator,
        private hashManager: HashManager,
        private idGenerator: IdGenerator,
        private emailValidation: EmailValidation
    ) { }


    async createUser(user: UserInputDTO) {

        if (!user.email) {
            throw new Error("Empty 'Email'")
        } else if (
            !this.emailValidation.isValidEmail(user.email)
        ) {
            throw new Error("Invalid 'Email'")
        }

        if (!user.password) {
            throw new Error("Empty 'Password'")
        }

        if (!user.name) {
            throw new Error("Empty 'Name'")
        }

        if(!user.cpf){
            throw new Error("Empty 'CPF' ");  
        }

        if(!user.amount){
            throw new Error("Empty 'Value'");
            
        }

        if (!user.role) {
            throw new Error("Empty 'Role'")
        } else if (!["CARD", "BOLETO"]
            .includes(user.role.toLocaleUpperCase().trim())) {
            throw new Error("'Role' must be 'Boleto' or 'Card'")
        }


        const id = this.idGenerator.generate();


        const hashPassword = await this.hashManager.hash(user.password);
        await this.userDataBase.createUser(id, user.email, user.name, hashPassword, user.cpf, user.amount, user.role);


        const accessToken = this.authenticator.generateToken({ id,});

        return accessToken;
    }


}