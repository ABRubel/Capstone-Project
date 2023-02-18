import React from "react";
import PropTypes from "prop-types";
import { Context } from "../Context";

function Image({ className, img }) {
  const [hover, setHover] = React.useState(false);
  const { toggleFavorite } = React.useContext(Context);
  const { addToCart } = React.useContext(Context);
  function heartIcon() {
    if (img.isFavorite) {
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
  const cartIcon = hover && (
    <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
  );
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

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }),
};
export default Image;
