import { combineReducers } from "@reduxjs/toolkit";
import pokemonSlice from "./apiPokemon/pokemonSlice";
import favoriteSlice from "./favorites/favoriteSlice";

export const rootReducer = combineReducers({
  pokemon: pokemonSlice,
  favorite: favoriteSlice,
});

export default rootReducer;
