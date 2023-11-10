import { Box, Stack } from "@mui/material";
import ManajemenUser from "./ManajemenUser";

const Muser = () => {
  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      <Stack spacing={1}>
        <Box bgcolor="#F5F7F8" height="600px">
          <ManajemenUser />
        </Box>
      </Stack>
    </Box>
  );
};

export default Muser;
