// Importando biblioteca de validacion
import * as Yup from 'yup';

// Creando un esquema de validación para el proyecto
const projectSchema = Yup.object().shape({
  course: Yup.string()
  .required('Se requiere un curso')
  .max(25, 'No escribir mas de 25 caracteres'),
  teacher: Yup.string()
  .required('Se requiere un nombre')
  .max(30, 'No escribir mas de 30 caracteres'),
  price: Yup.string().required('Se requiere un precio'),
  priceOff: Yup.string().required('Se requiere un descuento'),
  img: Yup.string().required('Se requiere un precio'),
});

// Creando el extractor de datos de la petición
const getProject = (req) => {
  // Extrayendo datos de la petición
  const { course,teacher,price,priceOff,img } = req.body;
  // Regresando el objeto proyecto
  return {
   course,
   teacher,
   price,
   priceOff,
   img
  };
};

export default {
  projectSchema,
  getProject,
};