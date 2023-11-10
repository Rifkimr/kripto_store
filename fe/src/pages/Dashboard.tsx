import { Box, Stack } from "@mui/material";
import Feed from "../components/Feed";
import ImplementasiGrid from "../layout/Grid";

export const Dashboard = () => {
  return (
    <div>
      <ImplementasiGrid>
        <Box color={"text.primary"}>
          <Stack direction="row" justifyContent="space-between">
            <Feed />
          </Stack>
        </Box>
      </ImplementasiGrid>
    </div>
  );
};
