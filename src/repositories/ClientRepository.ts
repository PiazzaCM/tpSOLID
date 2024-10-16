import { IClientRepository } from './IClientRepository';
import { IClient } from '../models/Client';

export class ClientRepository implements IClientRepository {
  private clients: IClient[] = [];

  async create(client: IClient): Promise<IClient> {
    this.clients.push(client);
    return client;
  }

  async findById(id: string): Promise<IClient | null> {
    return this.clients.find(c => c.id === id) || null;
  }

  async update(id: string, client: Partial<IClient>): Promise<IClient | null> {
    const index = this.clients.findIndex(c => c.id === id);
    if (index !== -1) {
      this.clients[index] = { ...this.clients[index], ...client };
      return this.clients[index];
    }
    return null;
  }

  async delete(id: string): Promise<boolean> {
    const index = this.clients.findIndex(c => c.id === id);
    if (index !== -1) {
      this.clients.splice(index, 1);
      return true;
    }
    return false;
  }

  async getAll(): Promise<IClient[]> {
    return this.clients;
  }
}