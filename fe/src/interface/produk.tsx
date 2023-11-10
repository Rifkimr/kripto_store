export interface Produk {
  id: number;
  name_produk: string;
  price: number;
  image: string;
  isActive: boolean;
}

export interface IProduk {
  name_produk: string;
  price: number;
  image?: File | string;
}
