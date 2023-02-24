import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./routes.js";

import cors from "cors";
dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use("/backend", router);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
