import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { updateCurrentPage } from "./pokemonSlice";

const URL: string = import.meta.env.VITE_BASE_URL;
const api = axios.create({
  baseURL: URL,
});

interface Pokemon {
  name: string;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  url: string;
}

const fetchPokemonDetails = async (
  pokemon: Pokemon
): Promise<unknown | null> => {
  try {
    const pokemonApi = axios.create({
      baseURL: pokemon.url,
    });
    const detailsResponse: AxiosResponse<unknown> = await pokemonApi.get("/");
    return detailsResponse.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const fetchPokemonsDetails = createAsyncThunk<Pokemon[] | null, number>(
  "fetchPokemonsDetails",
  async (page: number, { dispatch }) => {
    try {
      const offset = (page - 1) * 20;
      const pokemonListResponse: AxiosResponse<{ results: Pokemon[] }> =
        await api.get(`/pokemon?offset=${offset}&limit=20`);
      const pokemons: Pokemon[] = pokemonListResponse.data.results;

      const detailsPromises: Promise<unknown | null>[] =
        pokemons.map(fetchPokemonDetails);

      const detailsResults: (unknown | null)[] = await Promise.all(
        detailsPromises
      );

      // Despache a ação para atualizar a página atual diretamente do slice
      dispatch(updateCurrentPage(page));

      return detailsResults as Pokemon[];
    } catch (error) {
      console.error("Erro ao buscar pokémons:", error);
      return null;
    }
  }
);

export default fetchPokemonsDetails;
