import express from 'express';
import vehicleRoutes from './routes/vehicle.route';
import clientRoutes from './routes/client.route';
import { MongoVehicleRepository } from './repositories/MongoVehicleRepository';
import { VehicleService } from './services/VehicleService';
import { ClientRepository } from './repositories/ClientRepository';
import { ClientService } from './services/ClientService';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.express.use(express.json());
  }

  private routes(): void {
    const clientRepository = new ClientRepository(); 
    const clientService = new ClientService(clientRepository);

    const vehicleRepository = new MongoVehicleRepository(); 
    const vehicleService = new VehicleService(vehicleRepository);

    this.express.use('/api/vehicles', vehicleRoutes());
    this.express.use('/api/clients', clientRoutes());

  }
}

const app = new App().express;
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
