import DescriptionHero from "../components/DescriptionHero";
import NavigationBar from "../components/NavigationBar";
import PokemonList from "../components/PokemonList";
import PokemonSearchBar from "../components/PokemonSearchBar";

export default function HomePage() {
  return (
      <>
          <NavigationBar />
          <PokemonSearchBar />
          <DescriptionHero />
          <PokemonList />
      </>
  )
}
