import { Box, Typography, TextField, Button, FormControl } from "@mui/material";
import UseRegister from "../hooks/UseRegister";

export const Register = () => {
  const { handleRegister, handleChange } = UseRegister();
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box display="flex" width="100%">
        <Box
          flex={1}
          bgcolor="#39A7FF"
          p="30px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box m={15}>
            <Typography textAlign="center" fontWeight="bold" fontSize="20px">
              Selamat Datang di KRIPTO STORE
            </Typography>
            <Typography textAlign="center" mt={4}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              quia nemo, aspernatur expedita veniam possimus eligendi quas
              laboriosam, ratione debitis praesentium hic qui quaerat accusamus
              voluptates architecto. Asdfsdfsdf t, deleniti voluptatem?
            </Typography>
          </Box>
        </Box>
        <Box
          flex={1}
          //   bgcolor="#FA7070"
          p="30px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box m={15}>
            <Typography fontWeight="bold" fontSize="20px" mb={2}>
              Selamat Datang
            </Typography>
            <Typography>
              Silahkan masukan email atau no telepon dan password Anda untuk
              mulai menggunakan aplikasi
            </Typography>
            <form onSubmit={handleRegister}>
              <FormControl sx={{ width: "100%" }}>
                <Typography fontSize="15px" mt={3}>
                  Name
                </Typography>
                <TextField
                  name="username"
                  onChange={handleChange}
                  placeholder="Masukan Nama"
                  fullWidth
                  size="small"
                />
              </FormControl>
              <FormControl sx={{ width: "100%" }}>
                <Typography fontSize="15px" mt={3}>
                  No Telepon
                </Typography>
                <TextField
                  name="phone_number"
                  onChange={handleChange}
                  placeholder="Masukan No telepon "
                  fullWidth
                  size="small"
                />
              </FormControl>
              <FormControl sx={{ width: "100%" }}>
                <Typography fontSize="15px" mt={3}>
                  Email
                </Typography>
                <TextField
                  name="email"
                  onChange={handleChange}
                  placeholder="admin@gmail.com"
                  fullWidth
                  size="small"
                />
              </FormControl>
              <FormControl sx={{ width: "100%" }}>
                <Typography fontSize="15px" mt={3}>
                  Password
                </Typography>
                <TextField
                  name="password"
                  onChange={handleChange}
                  placeholder="Masukan Password"
                  fullWidth
                  size="small"
                />
              </FormControl>
            </form>

            <Button
              onClick={handleRegister}
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: "20px" }}
            >
              Daftar
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
