    const express = require('express');

    const ongcontrollers = require('./controllers/ongcontrollers');
    const incidentcontrollers = require('./controllers/incidentcontrollers');
    const Profilecontrollers = require('./controllers/Profilecontrollers');
    const SessionControllers = require('./controllers/SessionControllers')

    const routes = express.Router();

    routes.post('/sessions', SessionControllers.create);

    routes.get('/fiquefit', ongcontrollers.index);
    routes.post('/fiquefit', ongcontrollers.create);

    routes.get('/Profile', Profilecontrollers.index);

    routes.get('/incidents',incidentcontrollers.index);
    routes.post('/incidents', incidentcontrollers.create);
    routes.delete('/incidents/:id', incidentcontrollers.delete);

     
    module.exports = routes;