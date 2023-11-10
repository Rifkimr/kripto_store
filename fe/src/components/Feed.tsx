import { Box, Stack } from "@mui/material";
import Dashboard from "./Dashboard";

const Feed = () => {
  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      <Stack spacing={1}>
        <Box>
          <Dashboard />
        </Box>
      </Stack>
    </Box>
  );
};

export default Feed;
