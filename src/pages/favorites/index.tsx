import { useState, useEffect } from "react";

import { MainLayout } from "../../components/layouts/MainLayout";
import { getFavorites } from "../../utils/localFavorites";
import NoFavorites from "../../components/common/NoFavorites";
import PokemonFavorites from "../../components/common/PokemonFavorites";

const IndexPage = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  return (
    <MainLayout title="Pokémon - Favorites">
      {favorites.length === 0 ? (
        <NoFavorites />
      ) : (
        <PokemonFavorites pokemons={favorites} />
      )}
    </MainLayout>
  );
};

export default IndexPage;
