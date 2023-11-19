export const DEFAULT_MEME_TEXT_STYLES = {
  memeText: [],
  fontFamily: "Impact",
  align: "center",
  upperCase: true,
  italic: false,
  bold: true,
  underLine: false,
  color: "#ffffff",
  fontSize: 38.4,
  letterSpacing: 1,
  textPositionX: 200,
  textPositionY: 5,
};

export default function memeGeneratorReducer(state, action) {
  switch (action.type) {
    case "handle_form_changes": {
      const { name, value, type, checked } = action.e.target;
      const handleForm = state.handleForm;
      const isTextHidden = handleForm.memeText.length > 0 ? false : true;
      return {
        ...state,
        isTextHidden: isTextHidden,
        handleForm: {
          ...state.handleForm,
          [name]:
            type === "button"
              ? handleForm.randomImg
              : type === "checkbox"
              ? checked
              : value,
        },
      };
    }
    case "get_meme_img": {
      const randomNumber = Math.floor(Math.random() * state.memes.length);
      const meme = state.memes[randomNumber];

      return {
        ...state,
        handleForm: {
          ...state.handleForm,
          randomImg: meme.url,
          randomImgAlt: meme.name,
        },
      };
    }
    case "get_meme":
      return {
        ...state,
        memes: action.data.memes,
      };
    case "rotate_img":
      return {
        ...state,
        imgAdjustments: {
          ...state.imgAdjustments,
          rotate:
            action.direction === "right"
              ? state.imgAdjustments.rotate + 90
              : state.imgAdjustments.rotate - 90,
        },
      };
    case "resize_img":
      return {
        ...state,
        imgAdjustments: {
          ...state.imgAdjustments,
          [action.e.target.name]: action.e.target.value,
        },
      };
    case "save_meme_text": {
      const defaultHandleForm = {
        ...state,
        handleForm: { ...DEFAULT_MEME_TEXT_STYLES },
      };
      console.log(defaultHandleForm.handleForm);

      return {
        ...defaultHandleForm,
        memeTextStyleArray: [...state.memeTextStyleArray, state.handleForm],
        handleForm: {
          ...defaultHandleForm.handleForm,
          memeText: "",
          randomImg: state.handleForm.randomImg,
          randomImgAlt: state.handleForm.randomImgAlt,
        },
      };
    }

    default:
      return state;
  }
}
