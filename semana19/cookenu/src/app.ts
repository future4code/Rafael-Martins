import express, { request, response, Router } from 'express'
import cors from "cors"
import { user } from './class/user';
import { router } from './routes';

const app = express();

app.use(express.json())
app.use(cors())
app.use(Router)

export default app