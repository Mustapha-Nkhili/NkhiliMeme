import { useRef } from "react";
import domtoimage from "dom-to-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function Meme({
  imgUrl,
  imgAlt,
  isTextHidden,
  handleForm,
  rotate,
  imgWidth,
  imgHeight,
  memeTextStyleArray,
}) {
  const memeTextContainer = useRef(null);
  const memeContainer = useRef(null);

  const imgStyles = {
    transform: `rotate(${rotate}deg)`,
    width: `${imgWidth}px`,
    height: `${imgHeight}px`,
  };

  function Memestyles(stylesHolder) {
    return {
      fontFamily: `'${stylesHolder.fontFamily}', Haettenschweiler, 'Arial Narrow Bold', sans-serif`,
      textAlign: `${stylesHolder.align}`,
      textTransform: stylesHolder.upperCase ? "uppercase" : "lowercase",
      fontStyle: stylesHolder.italic ? "italic" : "normal",
      fontWeight: stylesHolder.bold ? 900 : 500,
      textDecoration: stylesHolder.underline ? "underline" : "none",
      color: `${stylesHolder.color}`,
      fontSize: `${stylesHolder.fontSize / 16}rem`,
      letterSpacing: `${stylesHolder.letterSpacing}px`,
      left: `${stylesHolder.textPositionX}px`,
      top: `${stylesHolder.textPositionY}px`,
    };
  }

  const downloadMeme = () => {
    const container = memeContainer.current;
    const a = document.createElement("a");

    domtoimage
      .toPng(container)
      .then((dataUrl) => {
        a.href = dataUrl;
        a.download = "meme-img.png";
        a.click();
        a.remove();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <section className="meme">
      <div className="img-container" style={imgStyles} ref={memeContainer}>
        <img
          src={imgUrl}
          className="main--img"
          alt={imgAlt}
          draggable="false"
        />
        {memeTextStyleArray.map((meme, index) => {
          const { memeText, ...styles } = meme;
          return (
            <span
              key={index}
              className="meme-text top-meme"
              style={Memestyles(styles)}
              ref={memeTextContainer}
            >
              {memeText}
            </span>
          );
        })}
        {!isTextHidden && (
          <span
            className="meme-text top-meme"
            style={Memestyles(handleForm)}
            ref={memeTextContainer}
          >
            {handleForm.memeText}
          </span>
        )}
      </div>
      <button onClick={downloadMeme} className="download-meme-btn">
        <FontAwesomeIcon icon={faDownload} />
      </button>
    </section>
  );
}
