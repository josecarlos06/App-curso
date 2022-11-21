// ACCION METHOS DE CONFIG

const index = (req, res) => {
  const ViewModel = {
    title: 'principal page',
  };
  res.render('options/index', ViewModel);
};

const cursos = (req, res) => {
  const ViewModel = {
    title: 'Opciones de cursos',
  };
  res.render('options/cursos', ViewModel);
};

const cuenta = (req, res) => {
  const ViewModel = {
    title: 'Opciones de cuenta',
  };
  res.render('options/cuenta', ViewModel);
};

export default { index, cursos, cuenta };
