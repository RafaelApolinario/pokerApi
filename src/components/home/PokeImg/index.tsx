import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function PokeImg() {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Stack width="500px" alignItems="center">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
            alt="PokeApi"
            width="300px"
          />
        </Stack>
      </Container>
    </Box>
  );
}

export default PokeImg;
