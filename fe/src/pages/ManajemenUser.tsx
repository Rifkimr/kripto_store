import { Box, Stack } from "@mui/material";
import ImplementasiGrid from "../layout/Grid";
import Muser from "../components/Muser";

export const ManajemenUser = () => {
  return (
    <div>
      <ImplementasiGrid>
        <Box color={"text.primary"}>
          <Stack direction="row" justifyContent="space-between">
            <Muser />
          </Stack>
        </Box>
      </ImplementasiGrid>
    </div>
  );
};
