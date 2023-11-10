import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import EditIcon from "@mui/icons-material/Edit";
import { FormControl, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { IUserUpdate } from "../../interface/user";
import { API } from "../../libs/api";

interface IUserwithID extends IUserUpdate {
  id: number;
}

interface EditUserModalProps {
  onComfirmUpdate: (id: number) => void;
  dataUser: IUserwithID;
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

export default function ModalEditUser({
  dataUser,
  refetch,
}: EditUserModalProps) {
  const [form, setForm] = React.useState<IUserUpdate>({
    username: dataUser!.username,
    email: dataUser!.email,
    phone_number: dataUser!.phone_number,
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setForm({
      username: "",
      email: "",
      phone_number: "",
    });
    setOpen(false);
  };

  const handleSubmitUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      const { data: updateData } = await API.patch(
        "/user/" + dataUser.id,
        formData
      );
      console.log(updateData);
      setForm({
        username: "",
        email: "",
        phone_number: "",
      });
      refetch();
      handleClose();
    } catch (error: any) {
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
      <Button onClick={handleOpen}>
        <EditIcon sx={{ color: "grey" }} />
      </Button>
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
            Ubah Data User
          </Typography>
          <form encType="multipart/form-data" onSubmit={handleSubmitUpdate}>
            <Typography fontSize="15px" mt={3}>
              Nama
            </Typography>
            <FormControl>
              <TextField
                onChange={changeHandler}
                name="username"
                fullWidth
                size="small"
                placeholder="Masukan Nama"
              />
            </FormControl>
            <Typography fontSize="15px" mt={3}>
              No Telepon
            </Typography>
            <FormControl>
              <TextField
                onChange={changeHandler}
                name="phone_number"
                fullWidth
                size="small"
                placeholder="Masukan No Telepon"
              />
            </FormControl>
            <Typography fontSize="15px" mt={3}>
              Email
            </Typography>
            <FormControl>
              <TextField
                onChange={changeHandler}
                name="email"
                fullWidth
                size="small"
                placeholder="Masukan Email"
              />
            </FormControl>
            <Button
              variant="contained"
              fullWidth
              sx={{ color: "white", mt: "20px" }}
            >
              Simpan
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
