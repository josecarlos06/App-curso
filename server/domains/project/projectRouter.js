import { Router } from 'express';
import projectController from './projectController';
const router = new Router();
router.get(['/', '/list'], projectController.list);

// enrutador
router.get(['/add', '/create'], projectController.showAddForm);
router.post(['/add'], projectController.addProject);

export default router;