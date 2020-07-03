/*
* Utilizamos los modelos de nuestra base de datos, hacemos las verificaciones, consultas y revisiones antes de enviar a las vistas o a la bd
*/

const Testimonial = require('../models/Testimoniales')

exports.mostrarTestimoniales = async (req, res) => {
  const testimoniales = await Testimonial.findAll()
  res.render('testimoniales', {
    pagina: 'Testimoniales',
    testimoniales
  })
}

exports.agregarTestimoniales = async (req, res) => {
  // Validar que todos los datos esten llenos
  let {nombre, correo, mensaje} = req.body;
  let errores = [];

  if(!nombre) {
    errores.push({"mensaje" : "Agrega tu Nombre"})
  }
  if(!correo) {
    errores.push({"mensaje" : "Agrega tu Correo"})
  }
  if(!mensaje) {
    errores.push({"mensaje" : "Agrega tu Mensaje"})
  }

  if(errores.length > 0) {
    // Muestra la vista con errores
    const testimoniales = await Testimonial.findAll()
    res.render('testimoniales', {
      errores,
      nombre,
      correo,
      mensaje,
      pagina: 'Testimoniales',
      testimoniales
    })
  } else {
    // almacenar en la base de datos
    Testimonial.create({
      nombre,
      correo,
      mensaje
    })
    .then(testimonial => res.redirect('/testimoniales'))
    .catch(error => console.log(error))
  }
}