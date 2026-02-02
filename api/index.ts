import express from 'express';
import { registerRoutes } from '../server/routes.js';


const app = express();
app.use(express.json());

// Conectamos tus rutas existentes a esta nueva app de Vercel
registerRoutes(app);

// Exportamos la app para que Vercel la ejecute
export default app;