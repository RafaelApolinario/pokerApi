import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PaginationControlled from "../PaginationControlled";
import CardFeed from "./CardFeed";

function Feed() {
  return (
    <>
      <Container
        sx={{
          py: 8,
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
        maxWidth="md"
      >
        <Grid container spacing={4}>
          <CardFeed />
        </Grid>

        <PaginationControlled />
      </Container>
    </>
  );
}

export default Feed;
