import express from "express";
import { config } from "dotenv";
import  { rotas, rotas2 }  from "./routes/index.routes.js";

config();

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(rotas)
app.use(rotas2)

app.listen(port, () =>
  console.log(`⚡ Server started on http://localhost:${port}`)
);