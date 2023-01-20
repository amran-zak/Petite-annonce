import React, { useState } from "react";
import "./DetailPage.scss";
import prod1 from "../../../Style/Img/img1.jpg";
import prod2 from "../../../Style/Img/img2.jpg";
import prod3 from "../../../Style/Img/img3.jpg";
import prod4 from "../../../Style/Img/img4.jpg";

const THUMBS = [prod1, prod2, prod3, prod4];

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(prod1);

  const handleClick = (index: number) => {
    setCurrentImage(THUMBS[index]);
  };
  const removeActivatedClass = (parent: ParentNode | null) => {
    if (parent) {
      parent.childNodes.forEach((node: Node) => {
        (node.childNodes[0] as Element).classList.contains("activated") &&
          (node.childNodes[0] as Element).classList.remove("activated");
      });
    }
  };

  return (
    <section className="gallery-holder hide-in-mobile">
      <section className="gallery">
        <div className="image">
          <img src={currentImage} alt="product-1" />
        </div>
        <div className="thumbnails">
          {THUMBS.map((th, index) => {
            return (
              <div
                className="img-holder"
                key={index}
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                  handleClick(index);
                  removeActivatedClass(e.currentTarget.parentNode);
                  const target = e.currentTarget.childNodes[0] as Element;
                  target.classList.toggle("activated");
                }}
              >
                <div className={`outlay ${index === 0 && "activated"}`}></div>
                <img src={th} alt={`product-${index + 1}`} />
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default Gallery;
