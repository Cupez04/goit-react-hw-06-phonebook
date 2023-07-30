import s from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { searchQuery } from "../../redux/sliceFilter";

export const Filter = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  return (
    <>
      <label>
        <span>Find Contacts By Name</span>
      </label>
      <input
        type="text"
        className={s.input}
        value={filter}
        onChange={(evt) => dispatch(searchQuery(evt.currentTarget.value))}
        name="filter"
        placeholder="Find your contact by name"
      />
    </>
  );
};
