import axios from "axios";
import { ApiResponse } from "../types/Api.types";

const API_URL = "https://api.unsplash.com/search/photos";

const ACCESS_KEY =
  import.meta.env.VITE_ACCESS_KEY ||
  "hW4vjLujJZnaPTQoaEfSysKvIsYQc-Dez83hh84VQNY";

const fetchImages = async (
  query: string,
  page: number = 1
): Promise<ApiResponse> => {
  const response = await axios.get<ApiResponse>(API_URL, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: ACCESS_KEY,
    },
  });
  return response.data;
};

export default fetchImages;
