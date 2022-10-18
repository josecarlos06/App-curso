import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import debug from './service/debugLogger'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.dev.config'

// Recuperar el modo de ejecución de la app
const nodeEnv = process.env.NODE_ENV || 'development'

// Definición de rutas
import indexRouter from "./routes/index";
import usersRouter from "./routes/users";
import WebpackHotMiddleware from 'webpack-hot-middleware';

// Creando una instancia de express
const app = express();

// Inclusion del webpack middleware
if (nodeEnv === 'development') {
  debug('✒ Ejecutando en modo de desarrollo 👨‍💻')
  // Configurando webpack en modo de desarrollo
  webpackConfig.mode = 'development'
  // Configurar la ruta del HMR (Hot Module Replacement)
  // 👉 "reload=true" -> Habilita la recarga automatica cuando un archivo
  // js cambia
  // 👉 "timeout=1000" -> Establece el timpo de refresco de la pagina
  webpackConfig.entry = [
    "webpack-hot-middleware/client?reload=true&timeout=1000",
    webpackConfig.entry
  ]
  // Agregando el plugin a la configuracion
  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin())
  // Crear el empaquetado con webpack
  const bundler = webpack(webpackConfig);
  // Registro el middleware en express
  app.use(webpackDevMiddleware(bundler, {
    publicPath: webpackConfig.output.publicPath
  }))
  // Registrando el HMR Middleware
  app.use(WebpackHotMiddleware(bundler))
} else {
  debug('✒ Ejecutando en modo de producción 🏭')
}

// view engine setup
// Configura el motor de plantillas
// 1. Establecer donde estarán las plantillas
// (Vistas -> Views)
// app.set("<nombre de la var>", <valor>)
app.set('views', path.join(__dirname, 'views'));
// Establezco que motor precargado usare
app.set('view engine', 'hbs');

// Establezco Middelware
app.use((logger('dev')));
// Middleware para parsear a json la peticion
app.use(express.json());
// Decodificar la url
app.use(express.urlencoded({ extended: false }));
// Parsear cookies
app.use(cookieParser());
// Servidor de archivos estáticos
app.use(express.static(path.join(__dirname,'..', 'public')));

// Registro Rutas
app.use('/', indexRouter);
app.use('/index', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next)=> {
  next(createError(404));
});

// error handler
app.use((err, req, res, next)=> {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;