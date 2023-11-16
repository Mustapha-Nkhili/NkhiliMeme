import { EditMemeContext } from "../../../context/EditMemeContext";
import { useContext } from "react";

export default function SaveMemeText({ displayTextOptions }) {
  const { saveMemeText } = useContext(EditMemeContext);
  return (
    <input
      type="button"
      value="Save Changes"
      className="details-btns save-changes-btn"
      onClick={() => saveMemeText(displayTextOptions)}
    />
  );
}
