const list = (req, res) =>{
   const viewModel = {};
   res.render('project/list', viewModel);
} 

const showAddForm = (req, res) =>{
   const viewModel = {};
   res.render('project/add', viewModel);
} 

const addProject = (req,res)=>{
   // extrayendo la peticion
   const {name, description} = req.body;
   res.status(200).json({
      name,
      description
   })
}

export default {list, showAddForm, addProject}