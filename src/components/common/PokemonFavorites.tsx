import { Grid } from "@nextui-org/react";
import PokemonFavoritesCard from "./PokemonFavoritesCard";

type Props = {
  pokemons: number[];
};

const FavoriteContainer = ({ pokemons }: Props) => {
  return (
    <Grid.Container gap={2} css={{ marginTop: "5px" }}>
      {pokemons.map((pokemonId) => (
        <PokemonFavoritesCard key={pokemonId} pokemonId={pokemonId} />
      ))}
    </Grid.Container>
  );
};

export default FavoriteContainer;
