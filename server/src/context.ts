import { PrismaClient } from "../src/generated/prisma";

export const prisma = new PrismaClient();

export type Context = {
  prisma: PrismaClient;
};

export const createContext = (): Context => ({
  prisma,
});
