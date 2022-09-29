import express, { json } from "express";
import { router } from "./api/routes/router";
import cors from "cors";

const app = express();

app.use(cors());
app.use(json());
app.use(router);

app.listen(8080, () => console.log("Server is running..."));
