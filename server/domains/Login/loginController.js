const loggin = (req, res) => {
  const viewModel = {
    title: 'Loggin',
  };
  res.render('Login/index', viewModel);
};

const recovery = (req, res) => {
  const viewModel = {
    title: 'recovery',
  };
  res.render('Login/recovery', viewModel);
};

const recoveryPut = (req, res) => {
  res.send(' logica de recuperacion de cuenta!');
};

export default { loggin, recovery, recoveryPut };
