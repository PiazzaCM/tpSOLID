import { Router } from 'express';
import { VehicleController } from '../controllers/VehicleController';
import { VehicleService } from '../services/VehicleService';

//para usar mongo importas esto
import { MongoVehicleRepository } from '../repositories/MongoVehicleRepository';

//para usar postgree usas este
// import { PostgresVehicleRepository } from '../repositories/PostgresVehicleRepository';

export default function(): Router {
  const vehicleRouter = Router();
  //en caso de querer usar posgres, debes cambiar a new PostgresVehicleRepository();
  const vehicleRepository = new MongoVehicleRepository();
  const vehicleService = new VehicleService(vehicleRepository);
  const vehicleController = new VehicleController(vehicleService);

  vehicleRouter.post('/', vehicleController.createVehicle.bind(vehicleController));
  vehicleRouter.get('/:id', vehicleController.getVehicle.bind(vehicleController));
  vehicleRouter.put('/:id', vehicleController.updateVehicle.bind(vehicleController));
  vehicleRouter.delete('/:id', vehicleController.deleteVehicle.bind(vehicleController));
  vehicleRouter.get('/', vehicleController.getAllVehicles.bind(vehicleController));

  return vehicleRouter;
}