import {
  Typography,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  CardMedia,
} from "@mui/material";
import ModalTambahProduk from "./modal/ModalTambahProduk";
import ModalEditProduk from "./modal/ModalEditProduk";
import { useEffect } from "react";
import useProduct from "../hooks/UseProduct";
import ModalDeleteProduk from "./modal/ModalDeleteProduk";

const ManajemenProduk = () => {
  const { fetchData, produk, deleteProduk, handleEdit } = useProduct();

  useEffect(() => {
    fetchData();
  }, []);

  const confirmDelete = (productId: number) => {
    deleteProduk(productId)
      .then((response) => {
        console.log("Thread deleted:", response);
      })
      .catch((err) => {
        console.error("Error deleting produk:", err);
      });
  };

  const confirmEdit = (productId: number) => {
    handleEdit(productId)
      .then((response) => {
        console.log("product edited:", response);
      })
      .catch((err) => {
        console.error("Error deleting thread:", err);
      });
  };

  return (
    <div>
      <Box display="flex" justifyContent="space-between">
        <Typography fontWeight={"bold"} margin="20px" marginLeft={4}>
          Manajeman Produk
        </Typography>
        <Button>
          <ModalTambahProduk />
        </Button>
      </Box>
      <Box p={4}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table sx={{ Width: "100%" }} aria-label="simple table">
            <TableHead sx={{ bgcolor: "#19A7CE", borderRadius: "20px" }}>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell>Nama Produk</TableCell>
                <TableCell>Harga</TableCell>
                <TableCell>Photo Produk</TableCell>
                <TableCell>Status</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {produk &&
                produk.map((product, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell>{product.name_produk}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>
                      <CardMedia
                        component="img"
                        sx={{
                          width: "60px",
                          borderRadius: "5px",
                        }}
                        image={
                          "http://kriptostore-production.up.railway.app/uploads/" +
                          product.image
                        }
                        title={product.name_produk}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Box
                        sx={{
                          backgroundColor: product.isActive
                            ? "#FFC63D"
                            : "#69B08F",
                          color: "#fff",
                          width: "100%",
                          borderRadius: "20px",
                        }}
                      >
                        {product.isActive ? "Active" : "Not Active"}
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{
                        width: "100px",
                        justifyContent: "space-between",
                        display: "flex",
                      }}
                    >
                      <IconButton aria-label="edit" size="small">
                        <ModalDeleteProduk
                          onConfirmDelete={() => confirmDelete(product.id)}
                        />
                      </IconButton>
                      <ModalEditProduk
                        onConfirmUpdate={(productId) => confirmEdit(productId)}
                        product={product}
                        refetch={fetchData}
                      />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default ManajemenProduk;
