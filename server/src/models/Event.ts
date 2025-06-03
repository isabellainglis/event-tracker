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
