import { useId } from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ value, onSearch }) => {
  const srchId = useId();
  return (
    <div className={css.searchInp}>
      <label htmlFor={srchId}>Find contacts by name</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
        id={srchId}
      />
    </div>
  );
};

export default SearchBox;
