import { Router } from 'express';
import loginController from './loginController';
// crear instancia
const router = new Router();

// enrutamos
// GET
router.get(['/', '/login', '/iniciar'], loginController.loggin);
router.get(['/recovery', '/recuperar'], loginController.recovery);
export default router;
