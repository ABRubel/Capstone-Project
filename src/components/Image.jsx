import React from "react";

function Image({ className, img }) {
  const [hover, setHover] = React.useState(false);
  console.log(hover);
  return (
    <div
      className={`${className} image-container `}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img className="image-grid" src={img.url} alt="" />
    </div>
  );
}

export default Image;
