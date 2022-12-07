// creando los Actions methods
// get "/"
// get "/index"
import ProjectModel from './../CMS/projectModel';
import configKeys from '../../config/configKeys';

const home = (req, res) => {
  const viewModel = {
    author: 'Express',
    name: 'carlos',
  };
  res.render('home/home', viewModel);
};

const about = (req, res) => {
  const viewModel = {
    appVersion: configKeys.appVersion,
  };
  res.render('home/about', viewModel);
};

const profile = (req, res) => {
  const viewModel = {
    title: 'profile page',
  };
  res.render('home/profile', viewModel);
};

const cursos = async (req, res) => {
  const projects = await ProjectModel.find().lean().exec();
  res.render('home/cursos', { projects });
};

export default { home, about, profile, cursos };
