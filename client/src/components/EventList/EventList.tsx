import "./EventList.css";
import { useQuery, useMutation, gql } from "@apollo/client";

const GET_USERS = gql`
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
  const { data, error, loading } = useQuery(GET_USERS);

  if (loading) return <p>Data loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  console.log(data);

  return (
    <section className="event-list">
      <h1>Event List</h1>
      <ul>
        {data.events.map((event: Event) => {
          console.log(event);
          return <li>{event.name}</li>;
        })}
      </ul>
    </section>
  );
}
