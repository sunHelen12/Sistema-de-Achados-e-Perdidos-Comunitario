import cors from "cors";
import express from "express";
import router from "./routes/itemRoutes.js"; // Certifique-se do caminho correto
import { PrismaClient } from "@prisma/client";
const app = express();

app.use(cors());
app.use(express.json());

// Registrar as rotas
app.use("/api", router); // Agora todas as rotas estarão em /api/item

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`);
});
