import { EventRepository } from "./event.repository";

export const EventService = {
  listEvents: async (search?: string, query?: any) => {
    const filter = search
      ? {
          name: {
            contains: search,
          },
        }
      : undefined;

    return EventRepository.findMany(filter, query);
  },

  getEventById: async (id: number, query?: any) => {
    const event = await EventRepository.findById(id, query);

    if (!event) {
      throw new Error(`Event with ID ${id} not found`);
    }

    return event;
  },

  createEvent: async (name: string, date: string, location: string) => {
    const trimmedName = name.trim();
    const trimmedDate = date.trim();
    const trimmedLocation = location.trim();

    if (!trimmedName || !trimmedDate || !trimmedLocation) {
      throw new Error("All fields are required");
    }

    return EventRepository.create({ name: name.trim(), date, location });
  },
};
