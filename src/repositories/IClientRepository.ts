import { IClient } from '../models/Client';

export interface IClientRepository {
  create(client: IClient): Promise<IClient>;
  findById(id: string): Promise<IClient | null>;
  update(id: string, client: Partial<IClient>): Promise<IClient | null>;
  delete(id: string): Promise<boolean>;
  getAll(): Promise<IClient[]>;
}