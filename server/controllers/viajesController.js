/*
* Utilizamos los modelos de nuestra base de datos, hacemos las verificaciones, consultas y revisiones antes de enviar a las vistas o a la bd
*/

const Viaje = require('../models/Viajes')

exports.mostrarViajes = async (req, res) => {
  const viajes = await Viaje.findAll()
  res.render('viajes', {
    pagina: 'Próximos Viajes',
    viajes // viajes: viajes
  })
  .catch(error => console.log(error))
}

exports.mostrarViaje = async (req, res) => {
  const viaje = await Viaje.findByPk(req.params.id)
  res.render('viaje', {
    viaje
  })
  .catch(error => console.log(error))
}