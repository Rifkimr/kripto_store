import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { ManajemenProduk } from "./pages/ManajemenProduk";
import { ManajemenUser } from "./pages/ManajemenUser";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manajemen-produk" element={<ManajemenProduk />} />
        <Route path="/manajemen-user" element={<ManajemenUser />} />
      </Routes>
    </Router>
  );
}

export default App;
