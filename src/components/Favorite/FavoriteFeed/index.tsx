import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Card, CardMedia, Grid, IconButton } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { RootState } from "../../../store";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { Pokemon } from "../../../store/modules/apiPokemon/pokemonSlice";
import { removeFavorite } from "../../../store/modules/favorites/favoriteSlice";

function FavoriteFeed() {
  const dispatch = useAppDispatch();
  const favoritos = useAppSelector(
    (state: RootState) => state.favorite.favoritos
  );

  const handleFavoriteClick = (pokemon: Pokemon) => {
    dispatch(removeFavorite(pokemon.id));
  };

  return (
    <>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          position: "absolute",
          margin: "15px",
        }}
      >
        <IconButton color="primary">
          <ArrowBackIcon />
        </IconButton>
      </Link>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography
            variant="h1"
            align="center"
            sx={{
              fontFamily: "Comic Sans MS",
              marginTop: "20px",
              fontSize: "3rem",
            }}
          >
            Favoritos
          </Typography>
        </Grid>
        {favoritos.map((pokemon) => (
          <Grid item key={pokemon.name} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <CardContent>
                <IconButton onClick={() => handleFavoriteClick(pokemon)}>
                  <FavoriteIcon />
                </IconButton>
                <Typography gutterBottom variant="h5" component="div">
                  {pokemon.name}
                </Typography>
              </CardContent>
              <CardMedia
                component="div"
                sx={{
                  pt: "100%",
                }}
                image={pokemon.sprites.other.dream_world.front_default}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default FavoriteFeed;
