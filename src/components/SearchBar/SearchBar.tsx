import toast from "react-hot-toast";
import styles from "./SearchBar.module.css";
import { use, useState } from "react";
interface SearchBarProps {
  onSubmit: (topic: string) => void;
}
export default function SearchBar({ onSubmit }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const topic = query.trim();
    if (topic === "") {
      toast.error("Please enter your search query.");
      return;
    }
    onSubmit(topic);
    setQuery("");
  };
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a
          className={styles.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            name="topic"
            autoComplete="off"
            placeholder="Search movies..."
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className={styles.button} type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}
