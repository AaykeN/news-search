import { fetchContacts } from "../services/api";
import { createContext, useContext, useState, useEffect } from "react";
import { useLoginContext } from "../components/Login/LoginContext";
import { useDisplayResultsContext } from "../components/DisplayResults/DisplayResultsContext";

export const NewsContext = createContext({});
export function NewsContextProvider({ children }) {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [liked, setLiked] = useState(false);

  //---------------- Fetch Data ----------------//
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const [keyWord, setKeyWord] = useState("trend");
  const [URL, setURL] = useState("top-headlines?sources=bbc-news");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(false);
      if (keyWord === "") {
        return;
      } else {
        const data = await fetchContacts(page, pageSize, keyWord);
        setNews(data);
        setIsLoading(true);
      }
    };
    fetchData();
  }, [page, pageSize, keyWord]);

  //---------------- Search Function ----------------//
  const handleSetKeyword = (e) => {
    setSearch(e.target.value);
    setPageSize(8);
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    setKeyWord(search);
  };

  //---------------- Passing Value ----------------//
  const displayResults = useDisplayResultsContext();
  const login = useLoginContext();

  const value = {
    liked,
    setLiked,
    search,
    setSearch,
    news,
    setNews,
    isLoading,
    setIsLoading,
    page,
    pageSize,
    setPageSize,
    keyWord,
    handleSetKeyword,
    setPage,
    setKeyWord,
    handleSubmitSearch,
    ...displayResults,
    ...login,
  };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
}

export function useNewsContext() {
  return useContext(NewsContext);
}
