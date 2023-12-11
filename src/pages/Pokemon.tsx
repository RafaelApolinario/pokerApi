import CardDetails from "../components/Pokemon/CardDetails";
import Navbar from "../components/shared/Navbar";

function Pokemon() {
  const pokemonStorage = sessionStorage.getItem("pokemon");
  return (
    <>
      <Navbar name={pokemonStorage} />
      <CardDetails />
    </>
  );
}

export default Pokemon;
