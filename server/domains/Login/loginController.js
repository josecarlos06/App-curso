const loggin = (req, res) => {
  res.send('login its worked!');
};

const recovery = (req, res) => {
  res.send('recovery acount its working!');
};

export default { loggin, recovery };
