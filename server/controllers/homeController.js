/*
* Utilizamos los modelos de nuestra base de datos, hacemos las verificaciones, consultas y revisiones antes de enviar a las vistas o a la bd
*/

const Viaje = require('../models/Viajes')
const Testimonial = require('../models/Testimoniales')

exports.consultasHomePage = async (req, res) => {
  const promises = []

  const viajes = await Viaje.findAll({ limit: 3 })

  const testimoniales = await Testimonial.findAll({ limit: 3 })

  res.render('index', {
    pagina: 'Próximos Viajes',
    clase: 'home',
    viajes,
    testimoniales
  })
  .catch(error => console.log(error))
}