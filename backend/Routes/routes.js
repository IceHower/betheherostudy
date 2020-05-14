const express = require('express')
const routes = express.Router();
const OngController = require('../src/controllers/OngController')
const IncidentController = require('../src/controllers/IncidentController')
const ProfileController = require('../src/controllers/ProfileController')
const SessionController = require('../src/controllers/SessionController')

routes.post('/ongs', OngController.store) //metodo post encapsulado
routes.get('/ongs', OngController.index) //metodo get encapsulado

routes.post('/incidents', IncidentController.store)
routes.get('/incidents', IncidentController.index)
routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/profile', ProfileController.index)

routes.post('/sessions', SessionController.create)


module.exports = routes;
