import {  useEffect, useReducer } from "react";
import EditMeme from "./sideBar/EditMeme";
import Meme from "./Meme";
import memeImg from "../assets/confused-guy-meme.jpg";
import { EditMemeContext } from "../context/EditMemeContext";
import memeGeneratorReducer, {
  DEFAULT_MEME_TEXT_STYLES,
} from "../reducer/memeGeneratorReducer";

const initialState = {
  isTextHidden: true,
  memes: [],
  memeTextStyleArray: [],
  imgAdjustments: {
    rotate: 0,
    width: 400,
    height: "auto",
  },
  handleForm: {
    ...DEFAULT_MEME_TEXT_STYLES,
    randomImg: memeImg,
    randomImgAlt: "confused guy",
  },
};

export default function MemeGenerator() {
  const [state, dispatch] = useReducer(memeGeneratorReducer, initialState);

  const handleFormChanges = (e) => {
    dispatch({ type: "handle_form_changes", e: e });
  };

  const getMemesImg = () => {
    dispatch({ type: "get_meme_img" });
  };

  useEffect(() => {
    fetch(" https://api.imgflip.com/get_memes")
      .then((data) => data.json())
      .then((data) => dispatch({ type: "get_meme", data: data.data }));
  }, []);

  function rotateImg(direction) {
    dispatch({ type: "rotate_img", direction: direction });
  }

  function resizeImg(e) {
    dispatch({ type: "resize_img", e: e });
  }

  function saveMemeText(hideEdit) {
    if (state.handleForm.memeText.length > 0) {
      hideEdit((prev) => !prev);
      dispatch({ type: "save_meme_text" });
    }
  }

  const { handleForm, imgAdjustments } = state;

  const contextValue = {
    handleForm,
    handleFormChanges,
    getMemesImg,
    imgAdjustments,
    saveMemeText,
    rotateImg,
    resizeImg,
  };

  return (
    <EditMemeContext.Provider value={contextValue}>
      <main className="main">
        <EditMeme />
        <Meme
          isTextHidden={state.isTextHidden}
          memeTextStyleArray={state.memeTextStyleArray}
        />
      </main>
    </EditMemeContext.Provider>
  );
}
