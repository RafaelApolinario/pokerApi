import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SendIcon from "@mui/icons-material/Send";
import { Box, IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";
import { Pokemon } from "../../../store/modules/apiPokemon/pokemonSlice";

function CardDetails() {
  const { data } = useAppSelector((state) => state.pokemon);

  const pokemonStorage = sessionStorage.getItem("pokemon");

  const [pokmonAtual, setPokmonAtual] = useState<Pokemon | undefined>();

  useEffect(() => {
    setPokmonAtual(data.find((pokemon) => pokemon.name == pokemonStorage));
  }, []);

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

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Card sx={{ width: "75vw", height: "50vw", display: "flex" }}>
          <CardMedia
            component="div"
            sx={{
              pt: "20%",
              width: "100%",
            }}
            image={pokmonAtual?.sprites.other.dream_world.front_default}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {pokmonAtual?.name}
            </Typography>
            <Typography>ID: {pokmonAtual?.id}</Typography>
            <Typography sx={{ marginTop: 0, marginBottom: 1 }}>
              Tamanho: {pokmonAtual?.height}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <CardContent>
                <Typography>Habilidades:</Typography>
                <List dense={true}>
                  {pokmonAtual?.abilities.map((ability, index) => (
                    <ListItem key={index}>
                      <SendIcon />
                      <ListItemText primary={ability.ability.name} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
              <CardContent>
                <Typography>Status:</Typography>
                <List dense={true}>
                  {pokmonAtual?.stats.map((stat, index) => (
                    <ListItem key={index}>
                      <SendIcon />
                      <ListItemText
                        primary={`${stat.stat.name}: ${stat.base_stat}`}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default CardDetails;
