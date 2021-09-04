import { Request, Response } from "express"
import app from "./app"
import connection from "./connection"

const searchActor = async (name:string): Promise<any>  => {
  const result = await connection.raw(`
  SELECT * FROM Acton WHERE name = ${name}

  `)

  return result

}

const countActors = async (gender:string): Promise<any>  => {
  const result = await connection.raw(`
  SELECT * FROM Acton WHERE name = ${gender}
  `)

  const count = result[0][0].count;
  return count;

}

app.get("/actors/count", async (req:Request, res:Response) => {
  try {
      const gender = req.params.gender
        console.log(await countActors(gender))

        res.end()
    } catch (error) {
      console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

  app.get("/actors/name", async (req:Request, res:Response) => {
      try {
          const name = req.params.name
            console.log(await searchActor(name))

            res.end()
        } catch (error) {
          console.log(error.message)
            res.status(500).send("Unexpected error")
        }
  })


