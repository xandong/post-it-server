import express, { json } from "express";
import { router } from "./api/routes/router";
import cors from "cors";

const app = express();
const PORT = 3333;

app.use(cors());
app.use(json());
app.use(router);

app.listen(PORT, () => console.log("Server is running..."));
