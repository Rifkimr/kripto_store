import {
  Box,
  CardMedia,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import useProduct from "../hooks/UseProduct";
import { useEffect } from "react";

const cardTop = {
  bgcolor: "#91C8E4",
  borderRadius: "15px",
};

const styleFont = {
  fontSize: "15px",
};
const Dashboard = () => {
  const { fetchData, produk } = useProduct();

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Box width="100%" p={4}>
      <Typography fontWeight={"bold"} mb={3}>
        Dashboard
      </Typography>
      <Box
        width="95%"
        // bgcolor="#2E97A7"
        display="flex"
        // gap="10px"
        justifyContent="space-between"
      >
        <Box sx={cardTop}>
          <Box width="165px" height="45px" m={3}>
            <Typography sx={styleFont}>Jumlah Produk</Typography>
            <Typography fontWeight="bold">500 Produk</Typography>
          </Box>
        </Box>
        <Box sx={cardTop}>
          <Box width="165px" height="45px" m={3}>
            <Typography sx={styleFont}>Jumlah user</Typography>
            <Typography fontWeight="bold">500 user</Typography>
          </Box>
        </Box>
        <Box sx={cardTop}>
          <Box width="165px" height="45px" m={3}>
            <Typography sx={styleFont}>Jumlah Produk Aktif</Typography>
            <Typography fontWeight="bold">500 Produk aktif</Typography>
          </Box>
        </Box>
        <Box sx={cardTop}>
          <Box width="165px" height="45px" m={3}>
            <Typography sx={styleFont}>Jumlah User aktif</Typography>
            <Typography fontWeight="bold">500 user</Typography>
          </Box>
        </Box>
      </Box>
      <Box width="75%" borderRadius="15px" bgcolor="white" mt={4} p={5}>
        <Typography mb={3} fontWeight={"bold"}>
          Produk Terbaru
        </Typography>
        <div style={{ height: "300px", overflowY: "scroll" }}>
          <Table sx={{ Width: "100%" }} aria-label="simple table">
            <TableHead
              sx={{
                borderRadius: "20px",
                bgcolor: "#41A0E4",
                position: "sticky",
                top: "0",
              }}
            >
              <TableRow>
                <TableCell>Produk</TableCell>
                <TableCell>Tanggal di buat</TableCell>
                <TableCell>Harga</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {produk &&
                produk.map((product, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        display: "flex",
                        // bgcolor: "tomato",
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          width: "60px",
                          borderRadius: "5px",
                        }}
                        image={"http://localhost:5000/uploads/" + product.image}
                      />
                      <Typography
                        sx={{
                          alignItems: "center",
                          // alignContent: "center",
                          mt: "10px",
                          marginLeft: "30px",
                        }}
                      >
                        {product.name_produk}
                      </Typography>
                    </TableCell>
                    <TableCell>12 Mei 2023</TableCell>
                    <TableCell>Rp.{product.price}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </Box>
    </Box>
  );
};

export default Dashboard;
