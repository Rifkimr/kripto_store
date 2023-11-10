import { Box, Stack } from "@mui/material";
import ManajemenProduk from "./ManajemanProduct";

const Mproduk = () => {
  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      <Stack spacing={1}>
        <Box bgcolor="#F5F7F8" height="600px">
          <ManajemenProduk />
        </Box>
      </Stack>
    </Box>
  );
};

export default Mproduk;
