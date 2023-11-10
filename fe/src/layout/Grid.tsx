import { Box } from "@mui/material";
import Sidebar from "../components/SideBar";
// import Navbar from "../components/Navbar";
import { ReactNode } from "react";
import NavbarUser from "../components/NavbarUser";
// import Navbar from "../components/Navbar";

interface LayoutProps {
  children: ReactNode;
}

export default function ImplementasiGrid({ children }: LayoutProps) {
  return (
    <div>
      <NavbarUser />
      <Box width="100%" display="flex" mt="67px">
        <Box flex={1} height="100vh">
          <Sidebar />
        </Box>
        <Box bgcolor="#F5F7F8" flex={4}>
          {children}
        </Box>
      </Box>
    </div>
  );
}
