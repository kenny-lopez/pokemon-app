import { Grid } from "@nextui-org/react";
import { MainLayout } from "../components/layouts/MainLayout";
import pokeApi from "../api/pokeApi";
import * as PokemonInterfaces from "../interfaces/pokemonLimit";
import PokemonCard from "@/components/common/PokermonCard";

type Props = {
  pokemons: PokemonInterfaces.Result[];
};

const index = ({ pokemons }: Props) => {

  return (
    <MainLayout title="Pokémon - List">
      <Grid.Container gap={2} justify="flex-start" css={{ marginTop: "5px", marginBottom: "5px" }}>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemons={pokemon} />
        ))}
      </Grid.Container>
    </MainLayout>
  );
};

export const getStaticProps = async () => {

  const { data } = await pokeApi.get<PokemonInterfaces.Pokemons>("/pokemon?limit=151");
  const pokemons = data.results.map((pokemon, index) => {

    return {
      id: 1 + index,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${1 + index}.svg`,
      name: pokemon.name
      };
  });

  return {
    props: {
      pokemons,
    },
  };
};

export default index;
