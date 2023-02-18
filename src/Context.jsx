import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  function getPhotos() {
    const url =
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllPhotos(data));
  }
  function toggleFavourite(id) {
    const updatedPhotos = allPhotos.map((photo) => {
      if (photo.id === id) {
        console.log(id);
        console.log(!photo.isFavourite);
        return { ...photo, isFavourite: !photo.isFavourite };
      }
      return photo;
    });
    setAllPhotos(updatedPhotos);
  }
  const {
    status,
    error,
    data: photos,
  } = useQuery({
    queryKey: ["allPhotos"],
    queryFn: getPhotos,
  });
  if (status === "loading") return <h1>Loading ...</h1>;
  if (status === "error ") return <h1>{JSON.stringify(error)}</h1>;
  return (
    <Context.Provider value={{ allPhotos, toggleFavourite }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
