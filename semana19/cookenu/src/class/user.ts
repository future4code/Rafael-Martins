import { uuid } from "uuidv4";


export class user {
    constructor(
      private id: string,
      private name: string,
      private email: string,
      private password: string,
    ) {}
  
    public getId() {
      return this.id;
    }
    public getName() {
      return this.name;
    }
    public getEmail() {
      return this.email;
    }
    public getPassword() {
      return this.password;
    }
  
    static toUserModel(data: any): user {
      return new user(data.id, data.name, data.email, data.password);
    }
  }
