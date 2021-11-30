import mongoose from 'mongoose'
import PersonaSchema from '../models/ContactoModel.js'

//DAO de Contacto
const Persona = mongoose.model('Persona' , PersonaSchema)

//accion de controlador: insertar nueva Persona
export const addPersona = ( request , response ) => {
    //crear nueva Persona:
    let nuevaPersona = new Persona( request.body )
    //grabar la nueva persona
    nuevaPersona.save( (error , persona) => {
        if(error){
            response.send(error)
        }else{
            response.json(persona)
        }
    })
}

//accion para seleccionar todas las personas
export const getPersonas = (request , response) => {
    Persona.find( {} ,   (error , personas) => {
        if(error){
            response.send(error)
        }else{
            response.json(personas)
        }
    }   )
}

//accion de detalle de persona
export const getPersonaById = (request , response ) => {
    Persona.findById( request.params.personaid ,   (error , persona) => {
        if(error){
            response.send(error)
        }else{
            response.json(persona)
        }
    }   )
}

//accion borrar: 
export const deletePersona = (request , response ) => {
    Persona.deleteOne( { _id: request.params.personaid } , (error , persona ) =>{
           if(error){
               response.send(error)
           }
           else{
               response.json({ mensaje: "Persona borrada"})
           } 
    })
}



