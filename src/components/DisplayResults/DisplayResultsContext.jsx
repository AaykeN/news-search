import { useState, useEffect } from "react";

export function useDisplayResultsContext() {
  const [myFavourites, setMyFavourites] = useState([]);

  useEffect(() => {
    const savedmyFavourites =
      JSON.parse(localStorage.getItem("myFavourites")) || [];
    setMyFavourites(savedmyFavourites);
  }, []);

  const handleSetLike = (newsData) => {
    const duplicate = myFavourites.some(
      (item) => item.title === newsData.title || item.url === newsData.url
    );
    if (!duplicate) {
      setMyFavourites([...myFavourites, newsData]);
      localStorage.setItem(
        "myFavourites",
        JSON.stringify([...myFavourites, newsData])
      );
    }
  };

  const clearMyFavourites = (e) => {
    e.preventDefault();
    setMyFavourites([]);
    localStorage.removeItem("myFavourites");
  };

  return {
    myFavourites,
    setMyFavourites,
    handleSetLike,
    clearMyFavourites,
  };
}
