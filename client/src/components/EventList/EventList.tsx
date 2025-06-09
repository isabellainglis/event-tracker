import ListHeader from "../ListHeader/ListHeader";
import "./EventList.css";
import { useQuery, gql } from "@apollo/client";

const GET_EVENTS = gql`
  query {
    events {
      id
      name
      location
      date
    }
  }
`;

interface Event {
  id: number;
  name: string;
  date: string;
  location: string;
}

export default function EventList() {
  const { data, error, loading } = useQuery(GET_EVENTS);

  if (loading) return <p>Data loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="event-list">
      <h1>Event List</h1>
      <ListHeader />
      <ul className="event-list__events">
        {data.events.map((event: Event) => {
          return (
            <ul className="event-list__single-event" key={event.id}>
              <li className="event-list__column">{event.name}</li>
              <li className="event-list__column">{event.date}</li>
              <li className="event-list__column">{event.location}</li>
            </ul>
          );
        })}
      </ul>
    </section>
  );
}
