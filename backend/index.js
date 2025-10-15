import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cekFaktaRoutes from "./routes/cekFaktaRoutes.js";
import { PORT } from "./config/serverConfig.js";

const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: "http://localhost:10000"
}));

app.use("/api/cekfakta", cekFaktaRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
