import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import { Avatar } from "@mui/material";

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

interface DeleteUserModalProps {
  onConfirmDelete: () => void;
}

export default function ModalDeleteUser({
  onConfirmDelete,
}: DeleteUserModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <RemoveRedEyeIcon sx={{ color: "grey" }} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{
                backgroundColor: "#D80032",
                width: "40px",
                height: "40px",
                padding: "5px",
                mb: "20",
              }}
            >
              <ToggleOnIcon style={{ color: "white" }} fontSize="large" />
            </Avatar>
          </Box>
          <Typography
            align="center"
            fontSize="20px"
            sx={{ fontWeight: "bold", mt: "10px" }}
          >
            Komfirmasi Hapus
          </Typography>
          <Typography align="center" fontSize="15px" mt={3} mb={3}>
            Apakah kamu yakin menghapus nama user
          </Typography>
          <hr />
          <Box display={"flex"} justifyContent="end">
            <Button
              onClick={handleClose}
              variant="outlined"
              sx={{ mt: "20px", marginRight: "20px" }}
            >
              Batal
            </Button>
            <Button
              onClick={onConfirmDelete}
              variant="contained"
              sx={{ mt: "20px", color: "white" }}
            >
              Hapus
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
