import { IVehicleRepository } from './IVehicleRepository';
import { IVehicle } from '../models/Vehicle';

export class VehicleRepository implements IVehicleRepository {
  private vehicles: IVehicle[] = [];

  async create(vehicle: IVehicle): Promise<IVehicle> {
    try {
      console.log('Adding vehicle to repository:', vehicle);
      this.vehicles.push(vehicle);
      console.log('Vehicle added to repository:', vehicle);
      return vehicle;
    } catch (error) {
      console.error('Error in VehicleRepository.create:', error);
      throw new Error('Error creating vehicle');
    }
  }

  async findById(id: string): Promise<IVehicle | null> {
    try {
      const vehicle = this.vehicles.find(v => v.id === id) || null;
      console.log('Vehicle found:', vehicle);
      return vehicle;
    } catch (error) {
      console.error('Error in VehicleRepository.findById:', error);
      throw new Error('Error retrieving vehicle');
    }
  }

  async update(id: string, vehicle: Partial<IVehicle>): Promise<IVehicle | null> {
    try {
      const index = this.vehicles.findIndex(v => v.id === id);
      if (index !== -1) {
        this.vehicles[index] = { ...this.vehicles[index], ...vehicle };
        console.log('Vehicle updated:', this.vehicles[index]);
        return this.vehicles[index];
      }
      console.log('Vehicle not found for update:', id);
      return null;
    } catch (error) {
      console.error('Error in VehicleRepository.update:', error);
      throw new Error('Error updating vehicle');
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      const index = this.vehicles.findIndex(v => v.id === id);
      if (index !== -1) {
        this.vehicles.splice(index, 1);
        console.log('Vehicle deleted:', id);
        return true;
      }
      console.log('Vehicle not found for deletion:', id);
      return false;
    } catch (error) {
      console.error('Error in VehicleRepository.delete:', error);
      throw new Error('Error deleting vehicle');
    }
  }

  async getAll(): Promise<IVehicle[]> {
    try {
      console.log('Retrieving all vehicles');
      return this.vehicles;
    } catch (error) {
      console.error('Error in VehicleRepository.getAll:', error);
      throw new Error('Error retrieving vehicles');
    }
  }
}