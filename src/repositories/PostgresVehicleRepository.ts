import { IVehicleRepository } from './IVehicleRepository';
import { IVehicle } from '../models/Vehicle';

export class PostgresVehicleRepository implements IVehicleRepository {
  private vehicleRecords: IVehicle[] = [];

  async create(newVehicleData: IVehicle): Promise<IVehicle> {
    this.vehicleRecords.push(newVehicleData);
    return newVehicleData;
  }

  async findById(vehicleId: string): Promise<IVehicle | null> {
    return this.vehicleRecords.find(vehicle => vehicle.id === vehicleId) || null;
  }

  async update(vehicleId: string, updatedVehicleData: Partial<IVehicle>): Promise<IVehicle | null> {
    const vehicleIndex = this.vehicleRecords.findIndex(vehicle => vehicle.id === vehicleId);
    if (vehicleIndex !== -1) {
      this.vehicleRecords[vehicleIndex] = { ...this.vehicleRecords[vehicleIndex], ...updatedVehicleData };
      return this.vehicleRecords[vehicleIndex];
    }
    return null;
  }

  async delete(vehicleId: string): Promise<boolean> {
    const vehicleIndex = this.vehicleRecords.findIndex(vehicle => vehicle.id === vehicleId);
    if (vehicleIndex !== -1) {
      this.vehicleRecords.splice(vehicleIndex, 1);
      return true;
    }
    return false;
  }

  async getAll(): Promise<IVehicle[]> {
    return this.vehicleRecords;
  }
}
