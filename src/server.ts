import express, { json } from "express";
import { router } from "./api/routes/router";

const app = express();
const PORT = process.env.PORT || 3333;

app.use(json());
app.use(router);

app.listen(PORT, () => console.log("Server is running..."));
