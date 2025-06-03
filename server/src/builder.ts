import SchemaBuilder from "@pothos/core";
import type PrismaTypes from "../src/generated/pothos-types";
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

builder.queryType({});
