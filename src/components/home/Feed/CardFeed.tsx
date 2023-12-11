import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { RootState } from "../../../store";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import buscarPokemons from "../../../store/modules/apiPokemon/action";
import { Pokemon } from "../../../store/modules/apiPokemon/pokemonSlice";
import {
  addFavorite,
  removeFavorite,
} from "../../../store/modules/favorites/favoriteSlice";

function CardFeed() {
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector((state) => state.pokemon);

  const favoritos = useAppSelector(
    (state: RootState) => state.favorite.favoritos
  );

  useEffect(() => {
    dispatch(buscarPokemons(1));
  }, [dispatch]);

  const handleFavoriteClick = (pokemon: Pokemon) => {
    const isFavoriteIndex = favoritos.findIndex(
      (favorito) => favorito.id === pokemon.id
    );

    if (isFavoriteIndex === -1) {
      dispatch(addFavorite(pokemon));
    } else {
      dispatch(removeFavorite(pokemon.id));
    }
  };

  function handleCardClick(pokemonName: string) {
    sessionStorage.setItem("pokemon", pokemonName);
  }

  return (
    <>
      <Grid container spacing={2}>
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          data.map((pokemon) => (
            <Grid item key={pokemon.name} xs={12} sm={6} md={4}>
              <Card
                onClick={() => handleCardClick(pokemon.name)}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <CardActionArea>
                  <Link to="/pokemon">
                    <CardMedia
                      component="div"
                      sx={{
                        pt: "100%",
                      }}
                      image={pokemon.sprites.other.dream_world.front_default}
                    />
                  </Link>
                </CardActionArea>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    textAlign="center"
                  >
                    {pokemon.id + " - "}
                    {pokemon.name.charAt(0).toUpperCase() +
                      pokemon.name.slice(1)}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    {" "}
                    Altura: {pokemon.height}
                  </Typography>
                  <IconButton onClick={() => handleFavoriteClick(pokemon)}>
                    <FavoriteIcon />
                  </IconButton>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
}

export default CardFeed;
