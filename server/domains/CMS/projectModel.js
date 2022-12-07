// Importando Mongoose
import mongoose from 'mongoose';
// Desestructurando un generador de Schemas de mongoose
const { Schema } = mongoose;
// Creando el esquema
const ProjectSchema = new Schema({
   course: {
      type: String,
      required: true,
   },
   teacher: {
      type: String,
      required: true,
   },
   price: {
      type: String,
      required: true,
   },
   priceOff: {
      type: String,
      required: true,
   },
   img: {
      type: String,
      required: true,
   },
   date: {
      type: Date,
      default: Date.now,
   },
});
// Exportando la compilacon de ProjectSchema
// en un modelo de mongoose
export default mongoose.model('project', ProjectSchema);