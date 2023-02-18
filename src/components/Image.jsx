import React from "react";
import { Context } from "../Context";

function Image({ className, img }) {
  const [hover, setHover] = React.useState(false);
  const { toggleFavourite } = React.useContext(Context);
  const heartIcon = hover && (
    <i
      className="ri-heart-line favorite"
      onClick={() => toggleFavourite(img.id)}
    ></i>
  );
  const cartIcon = hover && <i className="ri-add-circle-line cart"></i>;
  return (
    <div
      className={`${className} image-container ${hover} (hover ? 'show' : 'hidden')`}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img className="image-grid" src={img.url} alt="" />
      {heartIcon}
      {cartIcon}
    </div>
  );
}

export default Image;
