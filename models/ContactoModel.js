import mongoose from 'mongoose'

//Definir un objeto Schema 
const Schema = mongoose.Schema

//Definir la estructura de las entidades 
//a registrar

const PersonaSchema = new Schema(
    {
        nombre: {
            type: String,
            required: "nombre vacio"
        },
        apellido: {
            type: String,
            required: "apellido vacio"
        },email: {
            type:String
        },empresa:{
            type:String
        },telefono:{
            type:Number
        },fecha_creacion:{
            type:Date,
            default: Date.now
        }

    }
)

export default PersonaSchema
