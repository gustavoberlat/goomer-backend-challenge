import { PrismaClient } from '@prisma/client';

export default class DatabaseService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findMany(entityName: string) {
    return this.prisma[entityName].findMany();
  }

  async create(entityName: string, data: any) {
    return this.prisma[entityName].create({ data });
  }

  async update(entityName: string, id: number, data: any) {
    return this.prisma[entityName].update({ where: { id }, data });
  }

  async delete(entityName: string, id: number) {
    return this.prisma[entityName].delete({ where: { id } });
  }
}
