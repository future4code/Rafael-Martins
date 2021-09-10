import { request, response, Router } from "express";
import { Express,  } from "express";

const router = Router ()

router.post('/users', (request, response) =>{
    return response.status(201).send();
})

export {router} ;