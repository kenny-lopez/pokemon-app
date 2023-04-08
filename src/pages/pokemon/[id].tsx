import { useState, useEffect } from "react";
import { GetStaticPaths, GetStaticProps } from "next";

import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";

import confetti from "canvas-confetti";

import pokeApi from "../../api/pokeApi";
import { handleFavorite, existFavorite } from "../../utils/localFavorites";

import { MainLayout } from "@/components/layouts/MainLayout";
import { PokemonInfo } from "../../interfaces/pokemonInfo";

type Props = {
  pokemon: PokemonInfo;
};

const PokemonPage = ({ pokemon }: Props) => {
  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const [favorite, setFavorite] = useState<boolean>(false);

  useEffect(() => {
    setFavorite(existFavorite(pokemon.id));
  }, [pokemon.id]);

  const onHandleFavorite = () => {
    handleFavorite(pokemon.id);
    setFavorite(prevFavorite => !prevFavorite);

    if (favorite) return;

    confetti({
      zIndex: 100,
      particleCount: 100,
      spread: 160,
      angle: -120,
      origin: { x: 1, y: 0 },
    });
  };

  const ghostStyle = {
    borderWidth: !favorite ? "3px" : "0",
    borderStyle: "solid",
    borderColor: !favorite ? "#4b3665" : "#4b3665",
    backgroundImage: !favorite
      ? "linear-gradient(#000000, #000000, #000000)"
      : "linear-gradient(112deg, #06b7db -63.59%, #ff4ecd -20.3%, #0072f5 70.46%)",
    "&&:hover": {
      backgroundImage:
        "linear-gradient(112deg, #06b7db -63.59%, #ff4ecd -20.3%, #0072f5 70.46%)",
      borderWidth: "0",
    },
  };

  return (
    <MainLayout title={`Pokémon - ${capitalize(pokemon.name)}`}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card
            isHoverable
            css={{
              padding: "30px",
              boxShadow: "2px 2px 1px #4b3665",
              border: "2px solid #200f1a",
              backgroundColor: "#090b28",
            }}
          >
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "/no-image.png"
                }
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card
            css={{
              boxShadow: "2px 2px 1px #4b3665",
              border: "2px solid #200f1a",
              backgroundColor: "#090b28",
            }}
          >
            <Card.Header
              css={{
                display: "flex",
                justifyContent: "space-between",
                padding: "15px 25px",
              }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
              <Button
                css={ghostStyle}
                color="gradient"
                onPress={onHandleFavorite}
              >
                {favorite ? "Remove" : "Add"} to favorites
              </Button>
            </Card.Header>
            <Card.Body css={{ padding: "15px 25px" }}>
              <Text size={30}>Sprites:</Text>
              <Container display="flex" direction="row" gap={0}>
                <Image
                  src={pokemon.sprites.front_default || "/no-image.png"}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default || "/no-image.png"}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny || "/no-image.png"}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny || "/no-image.png"}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pokemonIds: string[] = Array.from(
    { length: 151 },
    (_, index) => `${index + 1}`
  );

  return {
    paths: pokemonIds.map(id => ({
      params: {
        id,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ctx => {
  const { id } = ctx.params as { id: string };

  const { data } = await pokeApi.get<PokemonInfo>(`/pokemon/${id}`);

  const pokemon = {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };

  return {
    props: {
      pokemon
    },
  };
};

export default PokemonPage;
