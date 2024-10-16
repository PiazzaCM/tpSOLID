import { Router } from 'express';
import { VehicleController } from '../controllers/VehicleController';
import { VehicleService } from '../services/VehicleService';

export default function(vehicleService: VehicleService): Router {
  const vehicleRouter = Router();
  const vehicleController = new VehicleController(vehicleService);

  vehicleRouter.post('/', vehicleController.createVehicle);
  vehicleRouter.get('/:id', vehicleController.getVehicle);
  vehicleRouter.put('/:id', vehicleController.updateVehicle);
  vehicleRouter.delete('/:id', vehicleController.deleteVehicle);
  vehicleRouter.get('/', vehicleController.getAllVehicles);

  return vehicleRouter;
}