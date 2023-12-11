import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import * as React from "react";
import { useAppDispatch } from "../../../store/hooks";
import buscarPokemons from "../../../store/modules/apiPokemon/action";

function PaginationControlled() {
  const dispatch = useAppDispatch();

  const [page, setPage] = React.useState(1);
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    dispatch(buscarPokemons(value));
  };

  return (
    <Stack spacing={2} margin={10}>
      <Pagination count={65} page={page} onChange={handleChange} />
    </Stack>
  );
}

export default PaginationControlled;
