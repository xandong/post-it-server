import express, { json, Request } from "express";
import cors, { CorsOptions, CorsOptionsDelegate } from "cors";
import { router } from "./api/routes/router";

const app = express();
const PORT = process.env.PORT || 3333;

app.use(cors());
app.use(json());
app.use(router);

app.listen(PORT, () => console.log("Server is running..."));
