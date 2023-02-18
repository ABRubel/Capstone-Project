import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  function getPhotos() {
    const url =
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllPhotos(data));
  }
  function toggleFavorite(id) {
    const updatedPhotos = allPhotos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setAllPhotos(updatedPhotos);
    console.log(updatedPhotos);
  }
  function addToCart(newItem) {
    setCartItems((prevItems) => [...prevItems, newItem]);
  }
  const {
    status,
    error,
    data: photos,
  } = useQuery({
    queryKey: ["allPhotos"],
    queryFn: getPhotos,
  });

  return (
    <Context.Provider
      value={{ allPhotos, toggleFavorite, addToCart, loadingStatus: status, cartItems }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
