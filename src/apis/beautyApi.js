import axios from "axios";

export const beautyUrl = "https://dummyjson.com/products";
export const getBeauty = async () => {
  try {
    const res = await axios.get(beautyUrl);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
