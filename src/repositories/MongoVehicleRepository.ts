import { IVehicleRepository } from './IVehicleRepository';
import { IVehicle } from '../models/Vehicle';

export class MongoVehicleRepository implements IVehicleRepository {
  private vehicleCollection: IVehicle[] = [];

  async create(vehicleData: IVehicle): Promise<IVehicle> {
    this.vehicleCollection.push(vehicleData);
    return vehicleData;
  }

  async findById(vehicleId: string): Promise<IVehicle | null> {
    return this.vehicleCollection.find(vehicle => vehicle.id === vehicleId) || null;
  }

  async update(vehicleId: string, updatedVehicleData: Partial<IVehicle>): Promise<IVehicle | null> {
    const vehicleIndex = this.vehicleCollection.findIndex(vehicle => vehicle.id === vehicleId);
    if (vehicleIndex !== -1) {
      this.vehicleCollection[vehicleIndex] = { ...this.vehicleCollection[vehicleIndex], ...updatedVehicleData };
      return this.vehicleCollection[vehicleIndex];
    }
    return null;
  }

  async delete(vehicleId: string): Promise<boolean> {
    const vehicleIndex = this.vehicleCollection.findIndex(vehicle => vehicle.id === vehicleId);
    if (vehicleIndex !== -1) {
      this.vehicleCollection.splice(vehicleIndex, 1);
      return true;
    }
    return false;
  }

  async getAll(): Promise<IVehicle[]> {
    return this.vehicleCollection;
  }
}
