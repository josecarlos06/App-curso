import homeRouter from '../domains/home/homeRouter';
import projectRouter from '../domains/project/projectRouter';
import loginRouter from '../domains/Login/loginRouter';
import adminRouter from '../domains/admin/adminRouter';
import optionsRouter from '../domains/options/optionsRouter';
import cmsRouter from '../domains/CMS/cmsRouter';

const addRoutes = (app) => {
  // agregando ruta home
  app.use('/', homeRouter);
  app.use('/project', projectRouter)
  app.use('/login', loginRouter);
  app.use('/admin', adminRouter);
  app.use('/options', optionsRouter);
  app.use('/CMS', cmsRouter);
};

export default { addRoutes };
