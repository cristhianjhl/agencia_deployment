/*
* Utilizamos los modelos de nuestra base de datos, hacemos las verificaciones, consultas y revisiones antes de enviar a las vistas o a la bd
*/

exports.infoNosotros = (req, res) => {
  res.render('nosotros', {
    pagina: 'Sobre Nosotros'
  })
}