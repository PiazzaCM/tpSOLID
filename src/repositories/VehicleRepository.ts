import { IVehicleRepository } from './IVehicleRepository';
import { IVehicle } from '../models/Vehicle';

export class VehicleRepository implements IVehicleRepository {
  private vehicles: IVehicle[] = [];

  async create(vehicle: IVehicle): Promise<IVehicle> {
    this.vehicles.push(vehicle);
    return vehicle;
  }

  async findById(id: string): Promise<IVehicle | null> {
    return this.vehicles.find(v => v.id === id) || null;
  }

  async update(id: string, vehicle: Partial<IVehicle>): Promise<IVehicle | null> {
    const index = this.vehicles.findIndex(v => v.id === id);
    if (index !== -1) {
      this.vehicles[index] = { ...this.vehicles[index], ...vehicle };
      return this.vehicles[index];
    }
    return null;
  }

  async delete(id: string): Promise<boolean> {
    const index = this.vehicles.findIndex(v => v.id === id);
    if (index !== -1) {
      this.vehicles.splice(index, 1);
      return true;
    }
    return false;
  }

  async getAll(): Promise<IVehicle[]> {
    return this.vehicles;
  }
}