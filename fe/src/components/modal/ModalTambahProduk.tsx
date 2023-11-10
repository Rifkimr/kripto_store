import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Typography,
  Box,
  Button,
  Modal,
  TextField,
  FormControl,
} from "@mui/material";
import useProduct from "../../hooks/UseProduct";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ModalTambahProduk() {
  const { handleSubmit, changeHandler, form } = useProduct();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{ float: "right", m: "10px" }}
      >
        Tambah Produk
      </Button>
      <Box width="100%">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Button onClick={handleClose} sx={{ float: "right" }}>
              <CloseIcon sx={{ color: "#B0A695" }} />
            </Button>
            <Typography textAlign="center" variant="h6" component="h2">
              Tambah Produk
            </Typography>
            <Typography fontSize="15px" mt={3}>
              Nama Produk
            </Typography>
            <form encType="multipart/form-data" onSubmit={handleSubmit}>
              <FormControl sx={{ width: "100%" }}>
                <TextField
                  onChange={changeHandler}
                  name="name_produk"
                  defaultValue={form.name_produk}
                  fullWidth
                  size="small"
                  placeholder="Nama Produk"
                />
              </FormControl>
              <Typography fontSize="15px" mt={3}>
                Harga Produk
              </Typography>
              <FormControl sx={{ width: "100%" }}>
                <TextField
                  onChange={changeHandler}
                  name="price"
                  value={form.price}
                  fullWidth
                  size="small"
                  placeholder="Masukan harga"
                />
              </FormControl>
              <Typography fontSize="15px" mt={3}>
                Gambar Produk
              </Typography>
              <FormControl sx={{ width: "100%" }}>
                <TextField
                  onChange={changeHandler}
                  name="image"
                  type="file"
                  fullWidth
                  size="small"
                  placeholder="url"
                />
              </FormControl>
            </form>
            <Button
              onClick={handleSubmit}
              type="submit"
              variant="contained"
              fullWidth
              sx={{ color: "white", mt: "20px" }}
            >
              Simpan
            </Button>
          </Box>
        </Modal>
      </Box>
    </div>
  );
}

export default ModalTambahProduk;
