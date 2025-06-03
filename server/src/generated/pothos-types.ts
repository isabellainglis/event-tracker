/* eslint-disable */
import type { Prisma, Event } from "/Users/isabellainglis/Documents/Coding/projects/event-tracker/server/src/generated/prisma/index.js";
export default interface PrismaTypes {
    Event: {
        Name: "Event";
        Shape: Event;
        Include: never;
        Select: Prisma.EventSelect;
        OrderBy: Prisma.EventOrderByWithRelationInput;
        WhereUnique: Prisma.EventWhereUniqueInput;
        Where: Prisma.EventWhereInput;
        Create: {};
        Update: {};
        RelationName: never;
        ListRelations: never;
        Relations: {};
    };
}