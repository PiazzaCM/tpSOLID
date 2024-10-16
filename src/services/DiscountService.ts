import { IVehicle } from '../models/Vehicle';

export class DiscountService {
  applyDiscount(vehicle: IVehicle, discountPercentage: number): IVehicle {
    const discountedPrice = vehicle.price * (1 - discountPercentage / 100);
    return { ...vehicle, price: discountedPrice };
  }
}