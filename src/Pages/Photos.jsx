import React from "react";
import { Context } from "../Context";
import { getClass } from "../utils";
import Image from "../components/Image";

function Photos() {
  const { allPhotos } = React.useContext(Context);
  return (
    <main className="photos">
      {allPhotos.map((photo, index) => (
        <Image key={photo.id} img={photo} className={getClass(index)} />
      ))}
    </main>
  );
}

export default Photos;
