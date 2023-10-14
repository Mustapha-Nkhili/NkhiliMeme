import { useState } from "react";
import TextMemeOptions from "./TextMemeOptions";

export default function EditMemeText({
  handleFormChanges,
  handleForm,
  getMemesImg,
  saveMemeText,
  imgWidth,
  imgHeight
}) {
  const [displayTextOptions, setDisplayTextOptions] = useState(false);

  const isTextOptionsDisplay = () => {
    setDisplayTextOptions((prev) => !prev);
  };
  return (
    <form>
      <input
        type="button"
        className="add-text-btn details-btns"
        value="Add Text"
        onClick={isTextOptionsDisplay}
      />

      {displayTextOptions && (
        <TextMemeOptions
          handleFormChanges={handleFormChanges}
          handleForm={handleForm}
          saveMemeText={saveMemeText}
          displayTextOptions={setDisplayTextOptions}
          imgWidth={imgWidth}
          imgHeight={imgHeight}
        />
      )}
      <button type="button" className="main--btn" onClick={getMemesImg}>
        Get a new meme image
      </button>
    </form>
  );
}
