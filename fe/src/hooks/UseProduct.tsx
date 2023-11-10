import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { IProduk, Produk } from "../interface/produk";
import { API } from "../libs/api";
import { useNavigate } from "react-router-dom";
const useProduct = () => {
  const navigate = useNavigate();
  const [produk, setProduk] = useState<Produk[]>([]);
  const [form, setForm] = useState<IProduk>({
    name_produk: "",
    price: 0,
    image: "",
  });

  const fetchData = async () => {
    try {
      const response = await API.get("/produk");
      setProduk(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
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

    if (!form.name_produk || !form.price || !form.image) {
      return alert("harus di isi");
    }

    const formData = new FormData();
    formData.append("name_produk", form.name_produk);
    formData.append("price", String(form.price));
    formData.append("image", form.image as File);

    try {
      const response = await API.post("/produk", formData);
      setForm({
        name_produk: "",
        price: 0,
        image: "",
      });
      console.log("data telah di tambahkan", response.data);
      fetchData();
      navigate("/manajemen-produk");
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (id: number) => {
    // event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name_produk", form.name_produk);
      formData.append("price", String(form.price));
      formData.append("image", form.image as File);

      const response = await API.patch(`/produk/${id}`, formData);
      console.log("Product updated:", response.data);
      fetchData();
      navigate("/manajemen-produk");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduk = async (id: number) => {
    try {
      await API.delete(`/produk/${id}`);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    handleSubmit,
    form,
    fetchData,
    produk,
    changeHandler,
    deleteProduk,
    handleEdit,
  };
};

export default useProduct;
