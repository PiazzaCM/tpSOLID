import { IVehicleRepository } from '../repositories/IVehicleRepository';
import { IVehicle } from '../models/Vehicle';

export class VehicleService {
  constructor(private vehicleRepository: IVehicleRepository) {}

  async createVehicle(vehicle: IVehicle): Promise<IVehicle> {
    return this.vehicleRepository.create(vehicle);
  }

  async getVehicle(id: string): Promise<IVehicle | null> {
    return this.vehicleRepository.findById(id);
  }

  async updateVehicle(id: string, vehicle: Partial<IVehicle>): Promise<IVehicle | null> {
    return this.vehicleRepository.update(id, vehicle);
  }

  async deleteVehicle(id: string): Promise<boolean> {
    return this.vehicleRepository.delete(id);
  }

  async getAllVehicles(): Promise<IVehicle[]> {
    return this.vehicleRepository.getAll();
  }
}
