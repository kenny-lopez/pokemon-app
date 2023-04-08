const handleFavorite = (id: number) => {
  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  if (favorites.includes(id)) {
    favorites = favorites.filter((fav: number) => fav !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existFavorite = (id: number): boolean => {
  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  return favorites.includes(id);
};

const getFavorites = (): number[] => {
  const favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
    
  return favorites;
};

export { handleFavorite, existFavorite, getFavorites };
