import { Card, Grid, Image } from "@nextui-org/react";
import { useRouter } from "next/router";

type Props = {
  pokemonId: number;
};

const PokemonFavorites = ({pokemonId:id}: Props) => {

  const router = useRouter();

  const handleClick = () => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Grid key={id} xs={6} sm={3} md={2} onClick={handleClick}>
      <Card
        css={{
          boxShadow: "2px 2px 1px #4b3665",
          border: "2px solid #200f1a",
          backgroundColor: "#090b28",
          cursor: "pointer",
          padding: "70px 0",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt="Pokemon"
          width={100}
          height={100}
        />
      </Card>
    </Grid>
  );
};

export default PokemonFavorites;
