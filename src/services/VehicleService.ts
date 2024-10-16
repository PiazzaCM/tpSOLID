import { IVehicleRepository } from '../repositories/IVehicleRepository';
import { IVehicle } from '../models/Vehicle';

export class VehicleService {
  constructor(private vehicleRepository: IVehicleRepository) {}

  async createVehicle(vehicle: IVehicle): Promise<IVehicle> {
    try {
      console.log('Creating vehicle:', vehicle);
      const createdVehicle = await this.vehicleRepository.create(vehicle);
      console.log('Vehicle created:', createdVehicle);
      return createdVehicle;
    } catch (error) {
      console.error('Error creating vehicle:', error);
      throw new Error('Error creating vehicle');
    }
  }

  async getVehicle(id: string): Promise<IVehicle | null> {
    try {
      return await this.vehicleRepository.findById(id);
    } catch (error) {
      console.error('Error retrieving vehicle:', error);
      throw new Error('Error retrieving vehicle');
    }
  }

  async updateVehicle(id: string, vehicle: Partial<IVehicle>): Promise<IVehicle | null> {
    try {
      return await this.vehicleRepository.update(id, vehicle);
    } catch (error) {
      console.error('Error updating vehicle:', error);
      throw new Error('Error updating vehicle');
    }
  }

  async deleteVehicle(id: string): Promise<boolean> {
    try {
      return await this.vehicleRepository.delete(id);
    } catch (error) {
      console.error('Error deleting vehicle:', error);
      throw new Error('Error deleting vehicle');
    }
  }

  async getAllVehicles(): Promise<IVehicle[]> {
    try {
      return await this.vehicleRepository.getAll();
    } catch (error) {
      console.error('Error retrieving vehicles:', error);
      throw new Error('Error retrieving vehicles');
    }
  }
}