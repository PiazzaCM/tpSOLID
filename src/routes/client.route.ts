import { Router } from 'express';
import { ClientController } from '../controllers/ClientController';
import { ClientService } from '../services/ClientService';

export default function(clientService: ClientService): Router {
  const clientRouter = Router();
  const clientController = new ClientController(clientService);

  clientRouter.post('/', clientController.createClient);
  clientRouter.get('/:id', clientController.getClient);
  clientRouter.put('/:id', clientController.updateClient);
  clientRouter.delete('/:id', clientController.deleteClient);
  clientRouter.get('/', clientController.getAllClients);

  return clientRouter;
}