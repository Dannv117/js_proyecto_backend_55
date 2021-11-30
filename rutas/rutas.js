//Endpoints del proyecto
//Endpoint: Ruta REST en un proyecto API Backend
// Ej: http://localhost:5000/personas/4
//          Un endpoint solo exponen info en formato JSON
import { addPersona,
         getPersonas, 
         getPersonaById, 
         deletePersona } from "../controllers/ContactoController.js"

const rutas = (  app ) => {
        app.route('/personas')
                  .get( getPersonas)
                  .post(addPersona)
        app.route('/personas/:personaid')   
                  .get(getPersonaById) 
                  .delete(deletePersona)      
}

export default rutas

