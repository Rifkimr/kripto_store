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
} from "@mui/material";

import ModalEditUser from "./modal/ModalEditUser";
import ModalTambahUser from "./modal/ModalTambahUser";
import ModalDeleteUser from "./modal/ModalDeleteUser";
import useUser from "../hooks/UseUser";
import { useEffect } from "react";

const ManajemenUser = () => {
  const { fetchData, user, deleteUser, handleEdit } = useUser();

  useEffect(() => {
    fetchData();
  }, []);

  const confirmDelete = (userId: number) => {
    deleteUser(userId)
      .then((response) => {
        console.log("user deleted:", response);
      })
      .catch((err) => {
        console.log("error delete user", err);
      });
  };

  const confirmEdit = (userId: number) => {
    handleEdit(userId)
      .then((response) => {
        console.log("user edited:", response);
      })
      .catch((err) => {
        console.log("error edit user", err);
      });
  };

  return (
    <div>
      <Box display="flex" justifyContent="space-between">
        <Typography fontWeight={"bold"} margin="20px" marginLeft={4}>
          Manajeman User
        </Typography>
        <Button>
          <ModalTambahUser />
        </Button>
      </Box>
      <Box p={4}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table sx={{ Width: "100%" }} aria-label="simple table">
            <TableHead sx={{ bgcolor: "#19A7CE", borderRadius: "20px" }}>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell>Nama Lengkap</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>No Telepon</TableCell>
                <TableCell>Status</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {user &&
                user.map((data, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell>{data.username} </TableCell>
                    <TableCell> {data.email} </TableCell>
                    <TableCell>{data.phone_number}</TableCell>
                    <TableCell align="center">
                      <Box
                        sx={{
                          backgroundColor: "#FFC63D",
                          color: "#fff",
                          width: "100%",
                          bgcolor: "#69B08F",
                          borderRadius: "20px",
                        }}
                      >
                        Active
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
                        <ModalDeleteUser
                          onConfirmDelete={() => confirmDelete(data.id)}
                        />
                      </IconButton>
                      <ModalEditUser
                        onComfirmUpdate={(userId) => confirmEdit(userId)}
                        dataUser={data}
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

export default ManajemenUser;
