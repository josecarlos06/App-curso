const index = (req, res) => {
  res.send('index-Cursos Working!');
};

const createCurso = (req, res) => {
  res.send('vista creaciom de usuario listo');
};

const editCurso = (req, res) => {
  res.send('vista editanto curso.!');
};

const subirCurso = (req, res) => {
  res.send('guardando las configuraines del curso');
};
const eliminandoCurso = (req, res) => {
  res.send('eliminanod curso por id');
};
export default { index, createCurso, editCurso, subirCurso, eliminandoCurso };
