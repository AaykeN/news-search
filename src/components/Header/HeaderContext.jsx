import { useNewsContext } from "../../context/NewsContext";

export function useHeaderContext() {
  const { setKeyWord, setSearch, search, setPageSize } = useNewsContext();

  const handleSetKeyword = (e) => {
    setSearch(e.target.value);
    setPageSize(8);
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    setKeyWord(search);
  };

  return {
    handleSetKeyword,
    handleSubmitSearch,
  };
}
