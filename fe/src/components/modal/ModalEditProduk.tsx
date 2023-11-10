import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import EditIcon from "@mui/icons-material/Edit";
import { FormControl, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { IProduk } from "../../interface/produk";
import { API } from "../../libs/api";

interface IProductWithID extends IProduk {
  id: number;
}

interface EditProductModalProps {
  onConfirmUpdate: (id: number) => void;
  product: IProductWithID;
  refetch: () => Promise<void>;
}
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

export default function ModalEditProduk({
  product,
  refetch,
}: EditProductModalProps) {
  const [form, setForm] = React.useState<IProduk>({
    name_produk: product!.name_produk,
    price: product!.price,
    image: product!.image,
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setForm({
      name_produk: "",
      price: 0,
      image: "",
    });
    setOpen(false);
  };

  const handleSubmitUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        if (key === "image") {
          if (typeof value !== "string") {
            return formData.append(key, value);
          }
        }

        formData.append(key, value);
      });
      const { data: updateData } = await API.patch(
        "/produk/" + product.id,
        formData
      );
      console.log(updateData);
      setForm({
        name_produk: "",
        price: 0,
        image: "",
      });
      refetch();
      handleClose();
    } catch (error: never) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm({
        ...form,
        [name]: files[0],
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{ float: "right", m: "10px" }}
      >
        <EditIcon />
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
              Ubah Produk
            </Typography>
            <Typography fontSize="15px" mt={3}>
              Nama Produk
            </Typography>
            <form encType="multipart/form-data" onSubmit={handleSubmitUpdate}>
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
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ color: "white", mt: "20px" }}
              >
                Simpan
              </Button>
            </form>
          </Box>
        </Modal>
      </Box>
    </div>
  );
}
