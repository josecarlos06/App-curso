import { Router } from 'express';
import adminController from './adminController';
// crear instancia
const router = new Router();

// enrutamos
router.get(['/', '/home', '/index', '/Dasboard'], adminController.dashboard);
router.get(['/profile', '/perfil'], adminController.profile);

export default router;
