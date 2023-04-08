import { ReactNode } from "react";
import Head from "next/head";
import { Navbar } from "../common/Navbar";

type Props = {
  children?: ReactNode
  title?: string
};

const origin = (typeof window === "undefined") ? "" : window.location.origin;;

export const MainLayout = ({ children, title }: Props ) => {
  return (
    <>
      <Head>
        <title>{title || "Pokémon App"}</title>
        <meta name="description" content={`${title}'s information`} />
        <meta name="keywords" content={`${title}, Pokémon, NextJs`} />
        <meta name="author" content="Raynier" />

        <meta property="og:title" content={`${title} | Pokémon App`} />
        <meta property="og:description" content={`${title}'s information`} />
        <meta property="og:image" content={`${origin}/images/banner.png`} />
      </Head>

      <Navbar />

      <main style={{
        padding: "0 20px",
        overflow: "hidden",
      }}>
        { children }
      </main>
    </>
  );
};
