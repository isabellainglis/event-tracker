import { builder } from "../../builder";

builder.prismaObject("Event", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    date: t.exposeString("date"),
    location: t.exposeString("location"),
  }),
});
