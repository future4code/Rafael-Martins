import { user  } from "../class/user";
import {BaseData} from "../database/BaseData";

export class userData extends BaseData {
    static findUserByEmail: any;
    static createUser: any;
    static emailError(email: any) {
        throw new Error("Method not implemented.");
    }
    public async createUser (user:user) {
        try {
            await BaseData.connection("rafael-martins").insert({

            id: user.getId(),
            name: user.getName(),
            email : user.getEmail(),    
            password: user.getPassword(),
            
             });
        
        } catch (error) {
         throw new Error(error.sqlMessage || error.message);
                
        }
    }

    public async emailError(email: string): Promise<user> {
        try {
          const user = await BaseData.connection("rafael-martins")
            .select("*")
            .where({ email });
          return user[0] && user.toUserModel(user[0]);
        } catch (error) {
          throw new Error(error.sqlMessage || error.message);
        }
      }

}