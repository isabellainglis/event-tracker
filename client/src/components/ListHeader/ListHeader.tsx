import "./ListHeader.css";
import { useMutation, gql } from "@apollo/client";

const ADD_EVENT = gql`
  mutation AddEvent($name: String!, $date: String!, $location: String!) {
    addEvent(date: $date, location: $location, name: $name) {
      id
      name
    }
  }
`;

export default function ListHeader() {
  const [addEvent] = useMutation(ADD_EVENT);

  return (
    <header className="header">
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
      <ul className="header__list">
        <li className="header__list-item">Event Name</li>
        <li className="header__list-item">Date</li>
        <li className="header__list-item">Location</li>
      </ul>
    </header>
  );
}
