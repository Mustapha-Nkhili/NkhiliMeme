import SaveMemeText from "./SaveMemeText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignLeft,
  faAlignCenter,
  faT,
  faAlignRight,
  faItalic,
  faBold,
  faUnderline,
  faCircleArrowDown,
} from "@fortawesome/free-solid-svg-icons";
// import { useRef } from "react";

export default function TextMemeOptions({
  handleFormChanges,
  handleForm,
  saveMemeText,
  displayTextOptions,
  imgWidth,
  imgHeight,
}) {
  return (
    <>
      <div className="text-options">
        <input
          type="text"
          className="txt-field"
          placeholder="Enter the meme text"
          name="memeText"
          value={handleForm.memeText}
          onChange={handleFormChanges}
        />
        <span className="option-title">Choose a Font: </span>
        <div className="font">
          <select
            name="fontFamily"
            onChange={handleFormChanges}
            value={handleForm.fontFamily}
          >
            <option value="impact">Impact</option>
            <option value="Roboto">Roboto</option>
            <option value="Open Sans">Open Sans</option>
            <option value="Montserrat">Montserrat</option>
          </select>
        </div>

        <span className="option-title">Align</span>
        <div className="align">
          <div className="container">
            <input
              type="radio"
              id="left"
              value="left"
              name="align"
              checked={handleForm.align === "left"}
              onChange={handleFormChanges}
            />
            <label htmlFor="left" className="align-label left">
              <FontAwesomeIcon icon={faAlignLeft} />
            </label>
          </div>

          <div className="container">
            <input
              type="radio"
              id="center"
              value="center"
              name="align"
              checked={handleForm.align === "center"}
              onChange={handleFormChanges}
            />
            <label htmlFor="center" className="align-label center">
              <FontAwesomeIcon icon={faAlignCenter} />
            </label>
          </div>

          <div className="container">
            <input
              type="radio"
              id="right"
              value="right"
              name="align"
              checked={handleForm.align === "right"}
              onChange={handleFormChanges}
            />
            <label htmlFor="right" className="align-label right">
              <FontAwesomeIcon icon={faAlignRight} />
            </label>
          </div>
        </div>

        <span className="option-title">Color</span>
        <div className="color">
          <input
            className="text-color"
            type="color"
            name="color"
            id="color"
            value={handleForm.color}
            onChange={handleFormChanges}
          />

          <label htmlFor="color" className="color-input-label">
            <FontAwesomeIcon icon={faCircleArrowDown} />
          </label>
        </div>

        <div className="font-size">
          <span className="option-title">Font size</span>
          <label htmlFor="fontSize">{handleForm.fontSize}px</label>
        </div>
        <input
          type="range"
          min="10"
          max="100"
          step="1"
          name="fontSize"
          id="fontSize"
          className="meme-text-ranges"
          value={handleForm.fontSize}
          onChange={handleFormChanges}
        />

        <span className="option-title">Style</span>
        <ul className="text-style">
          <li className="container">
            <input
              type="checkbox"
              name="upperCase"
              checked={handleForm.upperCase}
              onChange={handleFormChanges}
              id="text-upperCase"
            />
            <label htmlFor="text-upperCase">
              <FontAwesomeIcon icon={faT} />
            </label>
          </li>

          <li className="container">
            <input
              type="checkbox"
              name="italic"
              checked={handleForm.italic}
              onChange={handleFormChanges}
              id="text-italic"
            />
            <label htmlFor="text-italic">
              <FontAwesomeIcon icon={faItalic} />
            </label>
          </li>

          <li className="container">
            <input
              type="checkbox"
              name="bold"
              checked={handleForm.bold}
              onChange={handleFormChanges}
              id="text-bold"
            />
            <label htmlFor="text-bold">
              <FontAwesomeIcon icon={faBold} />
            </label>
          </li>

          <li className="container">
            <input
              type="checkbox"
              name="underline"
              checked={handleForm.underline}
              onChange={handleFormChanges}
              id="text-underline"
            />
            <label htmlFor="text-underline">
              <FontAwesomeIcon icon={faUnderline} />
            </label>
          </li>
        </ul>

        <div className="letter-spacing">
          <span className="option-title">Letter Spacing</span>
          <label htmlFor="letterSpacing">{handleForm.letterSpacing}px</label>
        </div>
        <input
          type="range"
          min="-10"
          max="100"
          step="1"
          name="letterSpacing"
          id="letterSpacing"
          className="meme-text-ranges"
          value={handleForm.letterSpacing}
          onChange={handleFormChanges}
        />

        <div className="text-position">
          <span className="option-title">t position x</span>
          <label htmlFor="textPositionX">{handleForm.textPositionX}px</label>
        </div>
        <input
          type="range"
          min="0"
          max={imgWidth}
          step="1"
          name="textPositionX"
          id="textPositionX"
          className="meme-text-ranges"
          value={handleForm.textPositionX}
          onChange={handleFormChanges}
        />

        <div className="text-position">
          <span className="option-title">t position y</span>
          <label htmlFor="textPositionY">{handleForm.textPositionY}px</label>
        </div>
        <input
          type="range"
          min="-10"
          max="535"
          step="1"
          name="textPositionY"
          id="textPositionY"
          className="meme-text-ranges"
          value={handleForm.textPositionY}
          onChange={handleFormChanges}
        />
        {console.log(handleForm.textPositionY)}
      </div>
      <SaveMemeText
        saveMemeText={saveMemeText}
        displayTextOptions={displayTextOptions}
      />
    </>
  );
}
