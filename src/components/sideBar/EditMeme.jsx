import { useState, useRef } from "react";
import EditMemeText from "./SB_editText/EditMemeText";
import EditMemeRotate from "./EditMemeRotate";
import SideBarItem from "./SideBarItem";

// font awesome icons
import { faFont, faRotateRight } from "@fortawesome/free-solid-svg-icons";

export default function EditMeme() {
  const [detailsActive, setDetailsActive] = useState("text");
  const sideBarItemsContainer = useRef();

  const showMemeDetails = (e) => {
    const sideBarItemsArray = Array.from(
      sideBarItemsContainer.current.children
    );
    sideBarItemsArray.forEach((item) => {
      item.classList.remove("active");
    });
    if (e.target.parentElement.nodeName === "BUTTON") {
      setDetailsActive(e.target.parentElement.name);
      e.target.parentElement.classList.toggle("active");
    } else {
      setDetailsActive(e.target.name);
      e.target.classList.toggle("active");
    }
  };

  const SIDEBAR_ITEMS = [
    {
      name: "text",
      icon: faFont,
      handleClick: showMemeDetails,
    },
    {
      name: "rotate",
      icon: faRotateRight,
      handleClick: showMemeDetails,
    },
  ];

  return (
    <section className="edit-meme">
      <aside className="left-side-bar" ref={sideBarItemsContainer}>
        {SIDEBAR_ITEMS.map((item, index) => {
          return (
            <SideBarItem
              name={item.name}
              icon={item.icon}
              handleClick={item.handleClick}
              key={index}
              index={index}
            />
          );
        })}
      </aside>
      <div className="details">
        {detailsActive === "text" && <EditMemeText />}

        {detailsActive === "rotate" && <EditMemeRotate />}
      </div>
    </section>
  );
}
