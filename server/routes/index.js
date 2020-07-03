/*
* Creamos las rutas de nuestro sitio web y ejecutamos los controladores 
*/

const express = require('express')
const router = express.Router()

// Controladores de la App
const nosotrosController = require('../controllers/nosotrosController')
const homeController = require('../controllers/homeController')
const viajesController = require('../controllers/viajesController')
const testimonialesController = require('../controllers/testimonialController')

module.exports = () => {
  router.get('/', homeController.consultasHomePage)  
  router.get('/nosotros', nosotrosController.infoNosotros)
  router.get('/viajes', viajesController.mostrarViajes)
  router.get('/viajes/:id', viajesController.mostrarViaje)
  router.get('/testimoniales', testimonialesController.mostrarTestimoniales)
  // Cuando se llena el formulario con nueva data
  router.post('/testimoniales', testimonialesController.agregarTestimoniales)


  return router
}