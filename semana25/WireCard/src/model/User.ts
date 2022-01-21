export class User{
    constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private cpf: string,
    private amount: number,
    private role: UserRole
    ){}

    getId(){
        return this.id;
    }

    getName(){
        return this.name
    }

    getEmail(){
        return this.email;
    }

    getPassword(){
        return this.password;
    }

    getRole(){
        return this.role;
    }

    getCpf(){
        return this.cpf
    }

    setId(id: string){
        this.id = id;
    }

    setName(name: string){
        this.name = name;
    }

    setEmail(email: string){
        this.email = email;
    }

    setPassword(password: string){
        this.password = password;
    }

    setCpf(cpf: string){
        this.cpf = cpf;
    }

    setAmount(amount: number){
        this.amount = amount;
    }

    setRole(role: UserRole){
        this.role = role;
    }

   static stringToUserRole(input: string): UserRole{
        switch (input) {
            case "BOLETO":
              return UserRole.BOLETO;
            case "CARTAO":
              return UserRole.CARTAO;
            default:
              throw new Error("Invalid user role");
          }
    }

    static toUserModel(user: any): User {
        return new User(user.id, user.name, user.email, user.password, user.cpf, user.amount, User.stringToUserRole(user.role));
      }


}


export interface UserInputDTO{
    email: string;
    password: string;
    name: string;
    role: string;
    amount: number;
    cpf: string;
}

export interface card{
    cardName : string;
    cardNumber: number;
    cardDate : Date;
    cardCvv : number;
}

export enum UserRole{
    BOLETO = "BOLETO",
    CARTAO = "CARTAO",

}


