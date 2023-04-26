import axios from "axios";

const API_KEY = import.meta.env.VITE_REACT_APP_NEWSAPI_KEY;
const API_URL2 = `https://newsapi.org/v2/everything?q=`;

export const fetchContacts = async (page, pageSize, keyWord, URL) => {
  try {
    const res = await axios.get(
      `${API_URL2}${keyWord}&apiKey=${API_KEY}&pageSize=${pageSize}&page=${page}`
    );
    return res.data.articles;
  } catch (error) {
    console.log(error);
  }
};
