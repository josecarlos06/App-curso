import { Router } from 'express';
import homeController from './homeController';
// crear instancia
const router = new Router();

// enrutamos
router.get(['/', '/home', '/index', '/Dasboard'], homeController.home);
router.get(['/about'], homeController.about);
router.get(['/profile', '/perfil'], homeController.profile);
router.get('/cursos', homeController.cursos);

export default router;
