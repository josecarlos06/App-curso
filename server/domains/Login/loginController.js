const loggin = (req, res) => {
  res.send('login its worked!');
};

const recovery = (req, res) => {
  res.send('recovery acount its working!');
};

const recoveryPut = (req, res) => {
  res.send(' logica de recuperacion de cuenta!');
};

export default { loggin, recovery, recoveryPut };
