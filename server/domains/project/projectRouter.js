import { Router } from 'express';
import projectController from './projectController';
const router = new Router();
router.get(['/', '/list'], projectController.list);

// Enrutamos
// GET "/project/add"
router.get(['/add', '/create'], projectController.add);

export default router;