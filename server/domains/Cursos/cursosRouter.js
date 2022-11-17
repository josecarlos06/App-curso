import { Router } from 'express';
import cursosController from './cursosController';
// crear instancia
const router = new Router();

// enrutamos
// GET
router.get(['/', '/Publicaciones'], cursosController.index);
export default router;
