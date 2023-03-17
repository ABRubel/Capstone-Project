import React from "react";
import PropTypes from "prop-types";
import { Context } from "../Context";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useHover from "../hooks/useHover";

function Image({ className, img }) {
  const [hover, ref] = useHover();
  const { toggleFavorite } = React.useContext(Context);
  const { addToCart } = React.useContext(Context);
  const { loadingStatus } = React.useContext(Context);
  const { cartItems } = React.useContext(Context);
  const { removeFromCart } = React.useContext(Context);

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
  function cartIcon() {
    const found = cartItems.some((item) => item.id === img.id);
    if (found) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => removeFromCart(img.id)}
        ></i>
      );
    } else if (hover) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => addToCart(img)}
        ></i>
      );
    }
  }
  if (loadingStatus === "loading") {
    // setTimeout(() => console.log("loading"), 5000);
    return (
      <div>
        <Skeleton variant="rounded" width={180} height={120} animation="wave" />
      </div>
    );
  }
  if (loadingStatus === "error ") return <h1>{JSON.stringify(error)}</h1>;
  return (
    <div className={`${className} image-container`} ref={ref}>
      <img className="image-grid" src={img.url} alt="" />
      {heartIcon()}
      {cartIcon()}
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
