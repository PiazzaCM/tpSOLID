import { Request, Response } from 'express';
import { ClientService } from '../services/ClientService';

export class ClientController {
  constructor(private clientService: ClientService) {}

  async createClient(req: Request, res: Response): Promise<void> {
    try {
      const client = await this.clientService.createClient(req.body);
      res.status(201).json(client);
    } catch (error) {
      console.error('Error creating client:', error);
      res.status(500).json({ error: 'Error creating client' });
    }
  }

  async getClient(req: Request, res: Response): Promise<void> {
    try {
      const client = await this.clientService.getClient(req.params.id);
      if (client) {
        res.json(client);
      } else {
        res.status(404).json({ error: 'Client not found' });
      }
    } catch (error) {
      console.error('Error retrieving client:', error);
      res.status(500).json({ error: 'Error retrieving client' });
    }
  }

  async updateClient(req: Request, res: Response): Promise<void> {
    try {
      const client = await this.clientService.updateClient(req.params.id, req.body);
      if (client) {
        res.json(client);
      } else {
        res.status(404).json({ error: 'Client not found' });
      }
    } catch (error) {
      console.error('Error updating client:', error);
      res.status(500).json({ error: 'Error updating client' });
    }
  }

  async deleteClient(req: Request, res: Response): Promise<void> {
    try {
      const success = await this.clientService.deleteClient(req.params.id);
      if (success) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: 'Client not found' });
      }
    } catch (error) {
      console.error('Error deleting client:', error);
      res.status(500).json({ error: 'Error deleting client' });
    }
  }

  async getAllClients(req: Request, res: Response): Promise<void> {
    try {
      const clients = await this.clientService.getAllClients();
      res.json(clients);
    } catch (error) {
      console.error('Error retrieving clients:', error);
      res.status(500).json({ error: 'Error retrieving clients' });
    }
  }
}