import { Router } from 'express';
import configController from './configController';
// crear instancia
const router = new Router();

// enrutamos
// GET
router.get('/publications', configController.publications);
router.get(['/account', '/cuenta'], configController.acount);

export default router;
