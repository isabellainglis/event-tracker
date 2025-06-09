import AddEvent from "../AddEvent/AddEvent";
import "./ListHeader.css";

export default function ListHeader() {
  return (
    <header className="header">
      <AddEvent />
      <ul className="header__list">
        <li className="header__list-item">Event Name</li>
        <li className="header__list-item">Date</li>
        <li className="header__list-item">Location</li>
      </ul>
    </header>
  );
}
