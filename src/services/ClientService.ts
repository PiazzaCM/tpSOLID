import { IClientRepository } from '../repositories/IClientRepository';
import { IClient } from '../models/Client';

export class ClientService {
  constructor(private clientRepository: IClientRepository) {}

  async createClient(client: IClient): Promise<IClient> {
    return this.clientRepository.create(client);
  }

  async getClient(id: string): Promise<IClient | null> {
    return this.clientRepository.findById(id);
  }

  async updateClient(id: string, client: Partial<IClient>): Promise<IClient | null> {
    return this.clientRepository.update(id, client);
  }

  async deleteClient(id: string): Promise<boolean> {
    return this.clientRepository.delete(id);
  }

  async getAllClients(): Promise<IClient[]> {
    return this.clientRepository.getAll();
  }
}
