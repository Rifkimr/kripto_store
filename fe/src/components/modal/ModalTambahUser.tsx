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
import useUser from "../../hooks/UseUser";

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
function ModalTambahUser() {
  const { handleSubmit, changeHendler, form } = useUser();
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
        Tambah User
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
              Tambah User
            </Typography>
            <form encType="multipart/form-data" onSubmit={handleSubmit}>
              <Typography fontSize="15px" mt={3}>
                Nama
              </Typography>
              <TextField
                defaultValue={form.username}
                onChange={changeHendler}
                name="username"
                fullWidth
                size="small"
                placeholder="Masukan Nama"
              />
              <Typography fontSize="15px" mt={3}>
                No Telepon
              </Typography>
              <FormControl fullWidth>
                <TextField
                  defaultValue={form.phone_number}
                  name="phone_number"
                  onChange={changeHendler}
                  size="small"
                  placeholder="Masukan No Telepon"
                />
              </FormControl>
              <Typography fontSize="15px" mt={3}>
                Email
              </Typography>
              <FormControl fullWidth>
                <TextField
                  defaultValue={form.email}
                  name="email"
                  onChange={changeHendler}
                  size="small"
                  placeholder="Masukan Email"
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

export default ModalTambahUser;
