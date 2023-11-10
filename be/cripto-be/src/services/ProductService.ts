import { Request, Response } from "express";
import { Product } from "./../entities/Produk";
import { AppDataSource } from "../data-source";
import { Repository } from "typeorm";

class ProductServices {
  private readonly ProductRepository: Repository<Product> =
    AppDataSource.getRepository(Product);

  async find(req: Request, res: Response): Promise<Response> {
    const produk = await this.ProductRepository.find();
    return res.status(200).json(produk);
  }
  async delete(req: Request, res: Response): Promise<Response> {
    const id = parseInt(req.params.id);
    try {
      const produk = await this.ProductRepository.findOne({
        where: { id: id },
      });

      if (!produk) {
        return res.status(400).json("Thread Not Found");
      }

      await this.ProductRepository.remove(produk);

      return res.status(200).json(produk);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Error While Deleting Threads" });
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { name_produk, price } = req.body;
    const image = req.file ? req.file.filename : undefined;

    try {
      const product = this.ProductRepository.create({
        name_produk,
        price,
        image,
      });
      const saveProduk = await this.ProductRepository.save(product);

      return res.status(200).json(saveProduk);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    const id = parseInt(req.params.id);
    const { name_produk, price } = req.body;
    const image = req.file ? req.file.filename : undefined;

    try {
      const product = await this.ProductRepository.findOne({
        where: { id: id },
      });
      console.log(product, req.body);

      product.name_produk = name_produk;
      product.price = price;
      if (image !== undefined) {
        product.image = image;
      }

      const updateProduk = await this.ProductRepository.save(product);

      return res.status(200).json(product);
    } catch (err) {
      return res.status(500).json({ error: "Error While Updatting Threads" });
    }
  }
}

export default new ProductServices();
