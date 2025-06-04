import { prisma } from "../../context";

export const EventRepository = {
  findMany: (filter: object | undefined, query?: any) => {
    return prisma.event.findMany({
      ...query,
      where: filter,
    });
  },

  findById: (id: number, query?: any) => {
    return prisma.event.findUnique({
      ...query,
      where: { id },
    });
  },

  create: (data: {
    name: string;
    date: string;
    location: string;
    query?: any;
  }) => {
    return prisma.event.create({
      data,
    });
  },
};
