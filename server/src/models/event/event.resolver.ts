import { builder } from "../../builder";
import { EventService } from "./event.service";

builder.queryField("events", (t) =>
  t.prismaField({
    type: ["Event"],
    args: {
      search: t.arg.string(),
    },
    resolve: (query, _root, args, ctx) => {
      return EventService.listEvents(args.search ?? undefined, query);
    },
  })
);

builder.queryField("event", (t) =>
  t.prismaField({
    type: "Event",
    args: {
      id: t.arg.id({ required: true }),
    },
    resolve: async (query, _root, args, _ctx) => {
      const id = Number(args.id);

      return EventService.getEventById(id, query);
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
      return EventService.createEvent(args.name, args.date, args.location);
    },
  })
);

builder.mutationField("deleteEvent", (t) =>
  t.prismaField({
    type: "Event",
    args: {
      id: t.arg.id({ required: true }),
    },
    resolve: async (_query, _root, args, ctx) => {
      const id = Number(args.id);

      return EventService.deleteEvent(id);
    },
  })
);
