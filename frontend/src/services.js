import axiosInstance from "./axiosInstance";

export default class Services {
  static getProductsByQuery(q) {
    return axiosInstance.get(`http://localhost:8000/search/?q=${q}`);
  }

  static getProductById(id) {
    return axiosInstance.get(`http://localhost:8000/item/${id}`);
  }
}
