// creando los Actions methods
// get "/"
const dashboard = (req, res) => {
  const viewModel = {
    title: 'dashboard page',
  };
  res.render('admin/dashboard', viewModel);
};

const profile = (req, res) => {
  const viewModel = {
    title: 'profile page',
  };
  res.render('admin/profile', viewModel);
};

export default { dashboard, profile };
