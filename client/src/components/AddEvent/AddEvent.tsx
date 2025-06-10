import { useState } from "react";
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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [addEvent] = useMutation(ADD_EVENT);

  return (
    <section className="add-event">
      <div className="add-event__button-container">
        <button
          className="add-event__btn"
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          New Event
        </button>
      </div>
      {isModalOpen ? (
        <div className="add-event__modal">
          <form className="add-event__form">
            <label className="add-event__label">
              Event name:
              <input type="text" name="name" className="add-event__input" />
            </label>
            <label className="add-event__label">
              Date:
              <input type="text" name="date" className="add-event__input" />
            </label>
            <label className="add-event__label">
              Location:
              <input type="text" name="location" className="add-event__input" />
            </label>
            <button
              className="add-event__modal-btn"
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
          </form>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
