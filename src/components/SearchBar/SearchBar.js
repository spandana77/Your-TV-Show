import style from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";
import { useState } from "react";

export function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");
  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      //   console.log("send search");
      onSubmit(e.target.value);
      setValue("");
    }
    // console.log(e.target.value);
  }
  function handleChange(e) {
    // console.log("typed", e.target.value);
    setValue(e.target.value);
  }
  return (
    <>
      <SearchIcon size={27} className={style.icon} />
      <input
        onKeyUp={submit}
        onChange={handleChange}
        className={style.input}
        type="text"
        value={value}
        placeholder={"Search for a tv show you may like"}
      ></input>
    </>
  );
}
