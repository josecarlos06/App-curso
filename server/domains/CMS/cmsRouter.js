import { Router } from 'express';
import cursosController from './cmsController';
// crear instancia
const router = new Router();

// enrutamos
// GET
router.get(['/', '/Dashboard'], cursosController.index);
router.get(['/edit', 'editar'], cursosController.editCurso);
router.get(['/new', '/nuevo'], cursosController.createCurso);

// POST
router.post(['/new', '/nuevo'], cursosController.subirCurso);
// DELETE
router.delete('/:id', cursosController.eliminandoCurso);
export default router;
