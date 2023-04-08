import { Spacer, Text, Link } from "@nextui-org/react";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0 20px",
        backgroundColor: "#090b28",
        borderBottom: "3px solid #4b3665",
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        alt="Pikachu"
        width={60}
        height={60}
        priority
      />
      <Link href="/">
        <Text color="white" h2 style={{ margin: "0" }}>
          P
        </Text>
        <Text color="white" h3 style={{ margin: "0" }}>
          okémon
        </Text>
      </Link>
      <Spacer css={{ flex: 1 }} />
      <Link href="/favorites">
        <Text color="white" style={{ margin: "0" }}>
          Favorites
        </Text>
      </Link>
    </div>
  );
};
