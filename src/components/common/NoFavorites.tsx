import { Container, Text } from "@nextui-org/react";

const NoFavorites = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 100px)",
        alignSelf: "center",
      }}
    >
      <Text h2>No favorites added</Text>
    </Container>
  );
};

export default NoFavorites;
