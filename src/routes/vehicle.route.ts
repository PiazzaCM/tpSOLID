import { Router } from 'express';
import { VehicleController } from '../controllers/VehicleController';
import { VehicleService } from '../services/VehicleService';
import { VehicleRepository } from '../repositories/VehicleRepository';

export default function(): Router {
  const vehicleRouter = Router();
  const vehicleRepository = new VehicleRepository();
  const vehicleService = new VehicleService(vehicleRepository);
  const vehicleController = new VehicleController(vehicleService);

  vehicleRouter.post('/', vehicleController.createVehicle.bind(vehicleController));
  vehicleRouter.get('/:id', vehicleController.getVehicle.bind(vehicleController));
  vehicleRouter.put('/:id', vehicleController.updateVehicle.bind(vehicleController));
  vehicleRouter.delete('/:id', vehicleController.deleteVehicle.bind(vehicleController));
  vehicleRouter.get('/', vehicleController.getAllVehicles.bind(vehicleController));

  return vehicleRouter;
}