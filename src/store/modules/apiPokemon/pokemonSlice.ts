import { createSlice } from "@reduxjs/toolkit";
import fetchPokemonsDetails from "./action";

interface Abilty {
  ability: {
    name: string;
  };
}

interface Stats {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface Pokemon {
  name: string;
  height: number;
  id: number;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  abilities: Abilty[];
  url: string;
  stats: Stats[];
}

interface InitialState {
  loading: boolean;
  data: Pokemon[];
  currentPage: number;
  nextPageUrl: null | string;
}

const initialState: InitialState = {
  loading: false,
  data: [],
  currentPage: 1,
  nextPageUrl: null,
};

const pokemonSlice = createSlice({
  name: "pokemonSlice",
  initialState,
  reducers: {
    // Adicione um reducer para atualizar o estado com os dados da API
    updatePokemonList: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.nextPageUrl =
        action.payload.length > 0
          ? action.payload[action.payload.length - 1].url
          : null;
    },
    // Adicione um reducer para atualizar a página atual
    updateCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemonsDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPokemonsDetails.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }
      // Use o reducer criado para atualizar o estado de forma mais modular
      pokemonSlice.caseReducers.updatePokemonList(state, action);
    });
  },
});

export const { updatePokemonList, updateCurrentPage } = pokemonSlice.actions;

export default pokemonSlice.reducer;
