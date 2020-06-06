import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsControler'

const routes = express.Router();
const pointsController = new PointsController();
const itemsControler = new ItemsController();

routes.get('/items', itemsControler.index);
routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;