import express, { Request, Response } from 'express'
import cors from 'cors'
import {users} from "./users"

type User = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}

const app = express()
app.use(express.json())
app.use(cors())

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})


//a. Qual método HTTP você deve utilizar para isso?

// Utilizei o GET

//b. Como você indicaria a **entidade** que está sendo manipulada?*



app.get("/users",(req:Request, res:Response) =>{

  res.send(users)
})

app.get("/users/search/type", (req:Request, res:Response) =>{

const result = users.find(
  (userss) =>{return userss.type === (req.params.type)}
)
if (result === undefined) {
  res.status(404).send("Type Not Found")
}else{
  res.status(200).send(result)
}
})


app.get("/users/search", (req:Request, res:Response) =>{

  let result : User[] = users;
  try{
    if (!req.query.name) {
      throw new Error ("Invalida Paramenters")
    }
  if (req.query.name ) {
    result = result.filter((users)=>
      users.name.includes(req.query.name as string)

    )

  }
  res.status(200).send(result)
  }catch(error){
    res.status(400).send(error.message);
  }

})


app.listen(3003, () => {
  console.log('Server is running at port 3003')
})


