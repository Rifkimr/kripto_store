import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IUser, IUserUpdate } from "../interface/user";
import { API } from "../libs/api";
import { ChangeEvent } from "react";
import { FormEvent } from "react";
import { useEffect } from "react";

const useUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser[]>([]);

  const [form, setForm] = useState<IUserUpdate>({
    username: "",
    email: "",
    phone_number: "",
  });

  const fetchData = async () => {
    try {
      const response = await API.get("/user");
      setUser(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const changeHendler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;

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

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!form.email || !form.phone_number || !form.username) {
      return "data harus di isi";
    }

    const formData = new FormData();
    formData.append("username", form.username);
    formData.append("email", form.email);
    formData.append("phone_number", form.phone_number);

    try {
      const response = await API.post("/user", formData);
      console.log(response);
      setForm({
        username: "",
        email: "",
        phone_number: "0",
      });
      console.log(response.data);
      fetchData();
      navigate("/user");
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (id: number) => {
    try {
      const formData = new FormData();
      formData.append("username", form.username);
      formData.append("email", form.email);
      formData.append("phone_number", form.phone_number);

      const response = await API.patch(`/user/${id}`, formData);
      console.log("user updated:", response.data);
      fetchData();
      navigate("/manajemen-user");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id: number) => {
    try {
      const response = await API.delete(`/user/${id}`);
      console.log(response.data);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    deleteUser,
    handleSubmit,
    changeHendler,
    form,
    user,
    fetchData,
    handleEdit,
  };
};

export default useUser;
