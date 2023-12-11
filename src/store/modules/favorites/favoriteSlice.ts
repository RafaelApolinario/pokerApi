import { createSlice } from "@reduxjs/toolkit";
import { Pokemon } from "../apiPokemon/pokemonSlice";

interface InitialState {
  favoritos: Pokemon[];
}

const initialState: InitialState = {
  favoritos: [],
};

const favoriteSlice = createSlice({
  name: "favoriteSlice",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favoritos.push(action.payload);
    },
    removeFavorite: (state, action) => {
      const indexRemove = state.favoritos.findIndex(
        (pokemon) => pokemon.id === action.payload
      );

      if (indexRemove !== -1) {
        state.favoritos.splice(indexRemove, 1);
      }
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
