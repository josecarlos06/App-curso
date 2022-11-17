// ACCION METHOS DE CONFIG

const publications = (req, res) => {
  res.send('Publicacion Working!');
};

const acount = (req, res) => {
  res.send('Acount working!');
};

const tools = (req, res) => {
  res.send('tools nice working');
};

export default { publications, acount, tools };
