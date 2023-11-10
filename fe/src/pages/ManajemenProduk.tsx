import { Box, Stack } from "@mui/material";
import ImplementasiGrid from "../layout/Grid";
import Mproduk from "../components/Mproduk";

export const ManajemenProduk = () => {
  return (
    <div>
      <ImplementasiGrid>
        <Box color={"text.primary"}>
          <Stack direction="row" justifyContent="space-between">
            <Mproduk />
          </Stack>
        </Box>
      </ImplementasiGrid>
    </div>
  );
};
