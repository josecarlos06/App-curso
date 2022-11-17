// creando los Actions methods
// get "/"
// get "/index"
import configKeys from '../../config/configKeys';

const Acount = (req, res) => {
  const viewModel = {
    author: 'vista de cuenta',
    name: 'carlos',
  };
  res.render('config/acount', viewModel);
};


export default { Acount };
