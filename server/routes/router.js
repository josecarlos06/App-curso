import homeRouter from '../domains/home/homeRouter';
import loginRouter from '../domains/Login/loginRouter';
import configRouter from '../domains/config/configRouter';
import cursosRouter from '../domains/Cursos/cursosRouter';

const addRoutes = (app) => {
  // agregando ruta home
  app.use('/', homeRouter);
  app.use('/login', loginRouter);
  app.use('/config', configRouter);
  app.use('/Cursos', cursosRouter);
};

export default { addRoutes };
