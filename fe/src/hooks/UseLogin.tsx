import { ChangeEvent, useState } from "react";
import { IUserLogin } from "./../interface/user";
import { API, setAuthToken } from "../libs/api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AUTH_LOGIN } from "../stores/rootReducer";

const UseLogin = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [form, setForm] = useState<IUserLogin>({
    email: "",
    password: "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function handleLogin() {
    try {
      const response = await API.post("/auth/login", form);

      // localStorage.setItem("token", response.data.token);
      dispatch(AUTH_LOGIN(response.data));
      console.log("ini data", response.data);

      setAuthToken(localStorage.token);

      const role = response.data.user.role;
      if (role === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  }
  return { handleChange, handleLogin };
};

export default UseLogin;
