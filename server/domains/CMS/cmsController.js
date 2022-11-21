const index = (req, res) => {
  const viewModel = {
    title: 'CMS index',
  };
  res.render('CMS/index', viewModel);
};

const createCurso = (req, res) => {
  const viewModel = {
    title: 'New Curso',
  };
  res.render('CMS/new', viewModel);
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
export default { index, createCurso, editCurso, subirCurso, eliminandoCurso };
