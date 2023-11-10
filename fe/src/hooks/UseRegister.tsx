import { ChangeEvent, useState } from "react";
import { IUserRegister } from "./../interface/user";
import { API, setAuthToken } from "../libs/api";
import { useNavigate } from "react-router-dom";

const UseRegister = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<IUserRegister>({
    username: "",
    email: "",
    phone_number: "",
    password: "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function handleRegister() {
    try {
      const response = await API.post("/auth/register", form);

      localStorage.setItem("token", response.data.token);
      setAuthToken(localStorage.token);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  }
  return { handleChange, handleRegister };
};

export default UseRegister;
