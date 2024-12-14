import axios from "axios";
import { BASE_PRODUCT_URL } from "../../config/constants";

const api = axios.create({
  baseURL: BASE_PRODUCT_URL,
});

export default api;
