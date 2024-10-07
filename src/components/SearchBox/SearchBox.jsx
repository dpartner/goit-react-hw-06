import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.searchWrap}>
      <input className={s.input} type="text" onChange={handleSearch} />
      <p className={s.inputName}>Search contact:</p>
    </div>
  );
};

export default SearchBox;
