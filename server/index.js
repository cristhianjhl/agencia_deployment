/**
 * Iniciamos un servidor rápido con express, creamos los paths de nuestros directorios, configuramos los template engine, creamos variables locales res.locals y llamos a las rutas de nuestra app
 */

// Importar Express
const express = require('express')
const path = require('path')
const routes = require('./routes')
const bodyParser = require('body-parser')
const configs = require('./config')
const db = require('./config/database')

require('dotenv').config({ path: 'variables.env' })


db.authenticate()
  .then(() => console.log('BD Conectada'))
  .catch(error => console.log(error))

// Configurar Express
const app = express()

// habilitar pug
app.set('view engine', 'pug')

// añadir las vistas 
app.set('views', path.join(__dirname, './views'))

// cargar una carpeta estatica llamada public
app.use(express.static('public'))

// Validar si estamos en desarrollo o producción
const config = configs[app.get('env')]

// creamos la variable para el sitio web
app.locals.titulo = config.nombresitio

// Muestra el año actual y genera la ruta
app.use((req, res, next) => {
  // crear una nueva fecha
  const fecha = new Date()
  res.locals.fechaActual = fecha.getFullYear()
  res.locals.ruta = req.path

  return next()
})

// ejecutamos el body parser
app.use(bodyParser.urlencoded({extended: true}))

// cargar rutas
app.use('/', routes())

// Puerto y Post Para la App
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000

app.listen(port, host, () => {
  console.log(`El Servidor esta Funcionando en: http://${host}:${port}`)
  
})

