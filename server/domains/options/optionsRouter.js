import { Router } from 'express';
import optionsController from './optionsController';
// crear instancia
const router = new Router();

// enrutamos
// GET
router.get(['/index', '/'], optionsController.index);
router.get('/cursos', optionsController.cursos);
router.get('/cuenta', optionsController.cuenta);
export default router;
