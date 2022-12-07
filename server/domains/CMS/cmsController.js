import ProjectModel from './projectModel';
const index = (req, res) => {
  const viewModel = {
    title: 'CMS index',
  };
  res.render('CMS/index', viewModel);
};

const createCurso = (req, res) => {
  const viewModel = {};
  res.render('CMS/new', viewModel);
};



// POST "/project/add"
// POST "/project/create"
const addProject = async (req, res) => {
  // Rescatando la info del formulario
  const { validData, errorData: error } = req;
  let project = {};
  let errorModel = {};
  // Desesctructurando y renombrando error de datos
  // Verificando si hay error de validación
  if (error) {
    // Rescatar los datos del formlario
    project = error.value;
    // Quiero generar un objeto que contenga
    // los campos con error y sus errores
    errorModel = error.inner.reduce((prev, curr) => {
      // Creabdo una variable temporal donde
      // guardare el elemento anterior
      const newVal = prev;
      newVal[`${curr.path}Error`] = curr.message;
      return newVal;
    }, {});
  } else {
    // Creando un documento con los datos
    // Provistos por el formulario
    const projectInstance = new ProjectModel(validData);
    try {
      // Salvando el documento en la base de datos
      const projectDocument = await projectInstance.save();
      // Cambiar esto por winston
      console.log(`Proyecto Creado: ${JSON.stringify(projectDocument)}`);
      // Redireccionando al listado de proyectos
      return res.redirect('/cursos');
    } catch (error1) {
      return res.status(404).json({ error1 });
    }
  }
  // Contestando los datos del proyecti
  return res.status(200).render('CMS/new', { project, errorModel });
};




const editCurso = (req, res) => {
  const viewModel = {
    title: 'Edit Curso',
  };
  res.render('CMS/edit', viewModel);
};

const subirCurso = (req, res) => {
  res.send('guardando las configuraines del curso');
};
const eliminandoCurso = (req, res) => {
  res.send('eliminanod curso por id');
};
export default { index, createCurso, editCurso, subirCurso, eliminandoCurso,addProject};
