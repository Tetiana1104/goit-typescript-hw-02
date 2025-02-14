import { useState } from "react";
import { HiSearch } from "react-icons/hi";
import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter a search term!");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={s.searchBar}>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          error: {
            style: {
              background: "lightgrey",
              color: "#ff4d4d",
              fontSize: "16px",
              fontWeight: "bold",
              border: "2px solid #ff4d4d",
              borderRadius: "8px",
              padding: "10px",
            },
          },
        }}
      />
      <form onSubmit={handleSubmit} className={s.searchForm}>
        <div className={s.inputWrapper}>
          <button type="submit" className={s.button}>
            <HiSearch size={20} style={{ color: "white" }} />
          </button>

          <input
            type="text"
            className={s.input}
            placeholder="Search images and photos"
            value={query}
            onChange={handleChange}
          />
        </div>
      </form>
    </header>
  );
};

export default SearchBar;
