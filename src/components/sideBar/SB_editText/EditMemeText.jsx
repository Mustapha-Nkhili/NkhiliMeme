import { useState } from "react";
import TextMemeOptions from "./TextMemeOptions";
import { useContext } from "react";
import { EditMemeContext } from "../../../context/EditMemeContext";

export default function EditMemeText() {
  const EditMemeConetext = useContext(EditMemeContext);
  const [displayTextOptions, setDisplayTextOptions] = useState(false);

  const isTextOptionsDisplay = () => {
    setDisplayTextOptions((prev) => !prev);
  };
  const { getMemesImg } = EditMemeConetext;
  return (
    <form>
      <input
        type="button"
        className="add-text-btn details-btns"
        value="Add Text"
        onClick={isTextOptionsDisplay}
      />

      {displayTextOptions && (
        <TextMemeOptions displayTextOptions={setDisplayTextOptions} />
      )}
      <button type="button" className="main--btn" onClick={getMemesImg}>
        Get a new meme image
      </button>
    </form>
  );
}
