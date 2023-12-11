import Feed from "../components/home/Feed";
import SearchBar from "../components/home/PokeImg";
import Navbar from "../components/shared/Navbar";

export default function Home() {
  return (
    <>
      <Navbar name={null} />
      <SearchBar />
      <Feed />
    </>
  );
}
