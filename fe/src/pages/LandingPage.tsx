import {
  Container,
  CardMedia,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
} from "@mui/material";
import Navbar from "../components/Navbar";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import { useEffect } from "react";
import useProduct from "../hooks/UseProduct";

export const LandingPage = () => {
  const { fetchData, produk } = useProduct();
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <Container
        sx={{
          width: "80%",
          height: "400px",
          // bgcolor: "#FA7070",
          display: "flex",
          justifyContent: "center",
          mt: "100px",
        }}
      >
        <CardMedia
          component="img"
          sx={{ height: 400, borderRadius: "5px" }}
          image="https://images.unsplash.com/photo-1551029313-1c711302ce7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhcmZ1bSUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
          title="green iguana"
        />
      </Container>
      <Typography
        margin="20px auto"
        width="75%"
        // color="#BD0707"
        variant="h5"
        mb={1}
      >
        Terbaru
      </Typography>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px auto",
          alignContent: "center",
          //   bgcolor: "#39A7FF",
          width: "75%",
          borderRadius: "15px",
        }}
      >
        {produk &&
          produk.map((product, index) => (
            <Grid item xs={3} key={index}>
              <Card
                sx={{
                  maxWidth: 180,
                  borderRadius: 2,
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ height: 240 }}
                  image={"http://localhost:5000/uploads/" + product.image}
                  title={product.name_produk}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name_produk}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ color: "#39A7FF" }}
                  >
                    {`Rp ${product.price}`}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
      <Typography
        margin="20px auto"
        width="75%"
        // color="#BD0707"
        variant="h5"
        mb={1}
      >
        Produk Tersedia
      </Typography>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px auto",
          alignContent: "center",
          //   bgcolor: "#39A7FF",
          width: "75%",
          borderRadius: "15px",
        }}
      >
        <Grid item xs={3} display="flex" columnGap="4">
          {produk &&
            produk.map((product, index) => (
              <Grid item xs={3} key={index}>
                <Card
                  sx={{
                    maxWidth: 180,
                    borderRadius: 2,
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ height: 240 }}
                    image={"http://localhost:5000/uploads/" + product.image}
                    title={product.name_produk}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.name_produk}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ color: "#39A7FF" }}
                    >
                      {`Rp ${product.price}`}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignContent: "center",
          width: "100%",
        }}
      >
        <Button variant="outlined">Lihat Lebih Banyak</Button>
      </Box>
      <hr />
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignContent: "center",
          width: "100%",
          mt: "50px",
        }}
      >
        <Box sx={{ width: "80%", height: "300px", display: "flex" }}>
          <Box flex={2} sx={{ width: "100%" }}>
            <Typography>Logo</Typography>
            <Typography mt={5}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              consectetur aliquam id earum adipisci. Aut numquam ullam,
              suscipit, consequuntur animi unde nisi enim quia sequi labore illo
              eos nulla optio!
            </Typography>
            <Box
              width="100%"
              display="flex"
              alignContent="center"
              justifyContent="center"
              mt={5}
            >
              <FacebookIcon sx={{ color: "black", marginRight: "50px" }} />
              <InstagramIcon sx={{ color: "black", marginRight: "50px" }} />
              <TwitterIcon sx={{ color: "black" }} />
            </Box>
          </Box>
          <Box width="100%" bgcolor="warning" flex={1}></Box>
          <Box width="100%" flex={1}>
            <Typography align="left" mb={5}>
              Layanan
            </Typography>
            <Typography align="left" mb={2}>
              BANTUAN
            </Typography>
            <Typography align="left" mb={2}>
              TANYA JAWAB
            </Typography>
            <Typography align="left" mb={2}>
              HUBUNGI KAMI
            </Typography>
            <Typography align="left" mb={2}>
              CARA BERJUALAN
            </Typography>
          </Box>
          <Box width="100%" flex={1}>
            <Typography align="left" mb={5}>
              TENTAN KAMI
            </Typography>
            <Typography align="left" mb={2}>
              ABOUT US
            </Typography>
            <Typography align="left" mb={2}>
              KARIR
            </Typography>
            <Typography align="left" mb={2}>
              BLOG
            </Typography>
            <Typography align="left" mb={2}>
              KEBIJAKAN PRIVASI
            </Typography>
            <Typography align="left" mb={2}>
              SYARAT DAN KETENTUAN
            </Typography>
          </Box>
          <Box flex={2}>
            <Typography align="left" mb={5}>
              MITRA
            </Typography>
            <Typography align="left">SUPLAYER</Typography>
          </Box>
        </Box>
      </Grid>
    </div>
  );
};
