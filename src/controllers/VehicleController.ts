import { Request, Response } from 'express';
import { VehicleService } from '../services/VehicleService';

export class VehicleController {
  constructor(private vehicleService: VehicleService) {}

  async createVehicle(req: Request, res: Response) {
    try {
      const vehicle = await this.vehicleService.createVehicle(req.body);
      res.status(201).json(vehicle);
    } catch (error) {
      res.status(500).json({ error: 'Error creating vehicle' });
    }
  }

  async getVehicle(req: Request, res: Response) {
    try {
      const vehicle = await this.vehicleService.getVehicle(req.params.id);
      if (vehicle) {
        res.json(vehicle);
      } else {
        res.status(404).json({ error: 'Vehicle not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving vehicle' });
    }
  }

  async updateVehicle(req: Request, res: Response) {
    try {
      const vehicle = await this.vehicleService.updateVehicle(req.params.id, req.body);
      if (vehicle) {
        res.json(vehicle);
      } else {
        res.status(404).json({ error: 'Vehicle not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error updating vehicle' });
    }
  }

  async deleteVehicle(req: Request, res: Response) {
    try {
      const success = await this.vehicleService.deleteVehicle(req.params.id);
      if (success) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: 'Vehicle not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error deleting vehicle' });
    }
  }

  async getAllVehicles(req: Request, res: Response) {
    try {
      const vehicles = await this.vehicleService.getAllVehicles();
      res.json(vehicles);
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving vehicles' });
    }
  }
}
