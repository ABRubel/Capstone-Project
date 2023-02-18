import React from "react";
import { Context } from "../Context";

function Image({ className, img }) {
  const [hover, setHover] = React.useState(false);
  const { toggleFavorite } = React.useContext(Context);
  function heartIcon() {
    if (img.isFavorite) {
      console.log(img);
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    } else if (hover) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    }
  }
  const cartIcon = hover && <i className="ri-add-circle-line cart"></i>;
  return (
    <div
      className={`${className} image-container`}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img className="image-grid" src={img.url} alt="" />
      {heartIcon()}
      {cartIcon}
    </div>
  );
}

export default Image;
