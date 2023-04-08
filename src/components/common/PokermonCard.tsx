import { useRouter } from "next/router";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import * as PokemonInterfaces from "../../interfaces/pokemonLimit";
import Image from "next/image";

type Props = {
  pokemons: PokemonInterfaces.Result;
};

const PokemonCard = ({ pokemons }: Props) => {

  const router = useRouter();

  const handleClick = () => {
    router.push(`/pokemon/${pokemons.id}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} onClick={handleClick}>
      <Card
        isHoverable
        css={{
          boxShadow: "2px 2px 1px #4b3665",
          border: "2px solid #200f1a",
          backgroundColor: "#090b28",
          cursor: "pointer",
        }}
      >
        <Card.Body css={{ p: 1, paddingTop: "15px", alignItems: "center" }}>
          <Image
            src={pokemons.img}
            alt={pokemons.name}
            width={100}
            height={100}
          />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text h5 transform="capitalize">
              {pokemons.name}
            </Text>
            <Text h5>#{pokemons.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

export default PokemonCard;
