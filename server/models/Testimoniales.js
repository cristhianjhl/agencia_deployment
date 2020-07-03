/*
* Se encarga de crear una plantilla de nuestras tables que se encuentran en nuestra base de datos, para luego darle uso desde el controlador
*/

const Sequelize = require('sequelize')

const db = require('../config/database')

const Testimonial = db.define('testimoniales', {
  nombre: {
    type: Sequelize.STRING
  },
  correo: {
    type: Sequelize.STRING
  },
  mensaje: {
    type: Sequelize.STRING
  }
})

module.exports = Testimonial