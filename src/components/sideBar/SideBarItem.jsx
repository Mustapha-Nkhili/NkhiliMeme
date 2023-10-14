import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SideBarItems({ name, icon, handleClick }) {
  return (
    <button
      type="button"
      className="bar-btn-container"
      onClick={handleClick}
      name={name}
    >
      <FontAwesomeIcon icon={icon} className="left-side-bar-btn" />
      <span className="left-side-txt">{name}</span>
    </button>
  );
}
