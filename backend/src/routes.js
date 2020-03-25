const express = require('express');

const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');

const routes = express.Router();

/**
 * Query Params: parâmetros nomeados e enviados na rota após o "?" (Filtros, paginação, ...)
 * Route Params: param. utilizados para identificar recursos (:id)
 * Request Body: corpor da requisição, utilizado para criar ou alterar recursos
 */

routes.post('/sessions', SessionController.store);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.store);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;
