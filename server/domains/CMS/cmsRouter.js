import { Router } from 'express';
import cursosController from './cmsController';

import ValidateFactory from '../../services/validateFactory';
// Importando objeto validador
import projectValidator from './projectValidator';
// crear instancia
const router = new Router();

// enrutamos
// GET
router.get(['/', '/Dashboard'], cursosController.index);
router.get(['/edit', 'editar'], cursosController.editCurso);
// POST


router.get(['/new', '/nueva'], cursosController.createCurso);

router.post(
   ['/new', '/nuevo'],
   ValidateFactory({
     schema: projectValidator.projectSchema,
     getObject: projectValidator.getProject,
   }),
   cursosController.addProject
 );
// DELETE
router.delete('/:id', cursosController.eliminandoCurso);
export default router;
