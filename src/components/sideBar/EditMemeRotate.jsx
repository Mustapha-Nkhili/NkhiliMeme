import { faRotateRight, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EditMemeRotate({rotateImg, imgWidth, imgHeight, resizeImg}) {
  return (
    <div className="rotate-option">
      <div className="img-width img-measurements">
        <span>width</span>
        <input type="number" value={imgWidth} onChange={resizeImg} name="width" className="resize-img-fields"/>
      </div>
      <div className="img-height img-measurements">
        <span>height</span>
        <input type="number" value={imgHeight} onChange={resizeImg} name="height" className="resize-img-fields"/>
      </div>
      <span>Rotate & Flip</span>
      <div className="rotate-flip-btn">
        <button className="meme-rotate right" onClick={() => rotateImg("right")}>
          <FontAwesomeIcon icon={faRotateRight} />
        </button>

        <button className="meme-rotate left" onClick={() => rotateImg("left")}>
          <FontAwesomeIcon icon={faRotateLeft} />
        </button>
      </div>
    </div>
  );
}
