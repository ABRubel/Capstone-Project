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
  return <Context.Provider value={{ allPhotos }}>{children}</Context.Provider>;
}

export { ContextProvider, Context };
