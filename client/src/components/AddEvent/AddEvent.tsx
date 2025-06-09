import "./AddEvent.css";
import { useMutation, gql } from "@apollo/client";

const ADD_EVENT = gql`
  mutation AddEvent($name: String!, $date: String!, $location: String!) {
    addEvent(date: $date, location: $location, name: $name) {
      id
      name
    }
  }
`;

export default function AddEvent() {
  const [addEvent] = useMutation(ADD_EVENT);

  return (
    <section className="add-event">
      <div className="header__button-container">
        <button
          className="header__add-event-btn"
          onClick={() =>
            addEvent({
              variables: {
                name: "Festival",
                date: "2025-10-10",
                location: "NYC",
              },
            })
          }
        >
          Add Event
        </button>
      </div>
    </section>
  );
}
