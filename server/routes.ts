import type { Express } from "express";
import { createServer, type Server } from "http";
import { chatWithGemini } from "./gemini";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)
 app.post("/api/chat", async (req, res) => {
  try {
    const { message, history, location } = req.body;
    // Llamamos a la funcion que creaste en gemini.ts
    const response = await chatWithGemini(message, history || [], location || "");
    res.json({ message: response });
  } catch (error) {
    console.error("Error en ruta /api/chat:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

  const httpServer = createServer(app);

  return httpServer;
}
