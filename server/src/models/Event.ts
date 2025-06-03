import { builder } from "../builder";

builder.prismaObject("Event", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    date: t.exposeString("date"),
    location: t.exposeString("location"),
  }),
});

builder.queryField("events", (t) =>
  t.prismaField({
    type: ["Event"],
    args: {
      search: t.arg.string(),
    },
    resolve: (query, _root, args, ctx) => {
      return ctx.prisma.event.findMany({
        ...query,
        where: args.search
          ? {
              name: {
                contains: args.search,
              },
            }
          : undefined,
      });
    },
  })
);

builder.queryField("event", (t) =>
  t.prismaField({
    type: "Event",
    args: {
      id: t.arg.id({ required: true }),
    },
    resolve: async (query, _root, args, ctx) => {
      const event = await ctx.prisma.event.findUnique({
        ...query,
        where: { id: Number(args.id) },
      });

      if (!event) {
        throw new Error(`Event with ID ${args.id} not found`);
      }

      return event;
    },
  })
);

builder.mutationField("addEvent", (t) =>
  t.prismaField({
    type: "Event",
    args: {
      name: t.arg.string({ required: true }),
      date: t.arg.string({ required: true }),
      location: t.arg.string({ required: true }),
    },
    resolve: async (_query, _root, args, ctx) => {
      const trimmedName = args.name.trim();

      if (!trimmedName) {
        throw new Error("Event name cannot be empty");
      }

      return ctx.prisma.event.create({
        data: {
          name: args.name,
          date: args.date,
          location: args.location,
        },
      });
    },
  })
);
