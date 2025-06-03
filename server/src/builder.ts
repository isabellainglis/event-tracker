import SchemaBuilder from "@pothos/core";
import type PrismaTypes from "@pothos/plugin-prisma/generated";
import PrismaPlugin from "@pothos/plugin-prisma";
import { Context, prisma } from "./context";

export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes;
  Context: Context;
}>({
  plugins: [PrismaPlugin],
  prisma: {
    client: prisma,
  },
});
