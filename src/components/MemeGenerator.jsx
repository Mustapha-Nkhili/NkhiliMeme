import { useState, useEffect } from "react";
import EditMeme from "./sideBar/EditMeme";
import Meme from "./Meme";
import memeImg from "../assets/confused-guy-meme.jpg";

const DEFAULT_MEME_TEXT_STYLES = {
  memeText: [],
  fontFamily: "Impact",
  align: "center",
  upperCase: true,
  italic: false,
  bold: true,
  underLine: false,
  color: "#ffffff",
  fontSize: "38.4",
  letterSpacing: "1",
  textPositionX: "200",
  textPositionY: 5,
};

export default function MemeGenerator() {
  const [isTextHidden, setTextHidden] = useState(true);
  const [memes, setMemes] = useState([]);
  const [handleForm, setHandleFrorm] = useState({
    ...DEFAULT_MEME_TEXT_STYLES,
    randomImg: memeImg,
    randomImgALt: "confused guy",
  });

  // const [memeTextArray, setMemeTextArray] = useState([]);
  const [memeTextStyleArray, setMemeTextStyleArray] = useState([]);

  const [imgAdjustments, setImgAdjustments] = useState({
    rotate: 0,
    width: 400,
    height: "auto",
  });

  const handleFormChanges = (e) => {
    const { name, value, type, checked } = e.target;

    setHandleFrorm((prev) => ({
      ...prev,
      [name]:
        type === "button"
          ? handleForm.randomImg
          : type === "checkbox"
          ? checked
          : value,
    }));

    if (handleForm.memeText !== "") {
      setTextHidden(false);
    } else {
      setTextHidden(true);
    }
  };

  const getMemesImg = () => {
    const randomNumber = Math.floor(Math.random() * memes.length);
    const url = memes[randomNumber].url;
    const alt = memes[randomNumber].name;

    setHandleFrorm((prev) => {
      return {
        ...prev,
        randomImg: url,
        randomImgALt: alt,
      };
    });
  };

  useEffect(() => {
    fetch(" https://api.imgflip.com/get_memes")
      .then((data) => data.json())
      .then((data) => setMemes(data.data.memes));
  }, []);

  function rotateImg(direction) {
    direction === "right"
      ? setImgAdjustments((prev) => ({ ...prev, rotate: prev.rotate + 90 }))
      : setImgAdjustments((prev) => ({ ...prev, rotate: prev.rotate - 90 }));
  }

  function resizeImg(e) {
    setImgAdjustments((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function saveMemeText(hideEdit) {
    if (handleForm.memeText !== "") {
      console.log(handleForm.randomImg);
      setMemeTextStyleArray((prev) => [...prev, handleForm]);

      hideEdit((prev) => !prev);
      setHandleFrorm(DEFAULT_MEME_TEXT_STYLES);
      setHandleFrorm((prev) => ({
        ...prev,
        memeText: "",
        randomImg: handleForm.randomImg,
        randomImgALt: handleForm.randomImgALt,
      }));
    }
  }

  return (
    <main className="main">
      <EditMeme
        handleForm={{ ...handleForm }}
        handleFormChanges={handleFormChanges}
        getMemesImg={getMemesImg}
        rotateImg={rotateImg}
        imgWidth={imgAdjustments.width}
        imgHeight={imgAdjustments.height}
        resizeImg={resizeImg}
        saveMemeText={saveMemeText}
      />
      <Meme
        isTextHidden={isTextHidden}
        handleForm={{ ...handleForm }}
        imgUrl={handleForm.randomImg}
        imgALt={handleForm.randomImgALt}
        rotate={imgAdjustments.rotate}
        imgWidth={imgAdjustments.width}
        imgHeight={imgAdjustments.height}
        // memeTextArray={memeTextArray}
        memeTextStyleArray={memeTextStyleArray}
      />
    </main>
  );
}
