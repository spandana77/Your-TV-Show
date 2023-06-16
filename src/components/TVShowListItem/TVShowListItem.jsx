import style from "./style.module.css";
import { small_img_cover_base_url } from "../../config";

const max_title_character = 20;
export function TVShowListItem({ tvShow, onClick }) {
  const onClick_show = () => {
    onClick(tvShow);
  };
  return (
    <div onClick={onClick_show} className={style.container}>
      <img
        alt={tvShow.name}
        src={small_img_cover_base_url + tvShow.backdrop_path}
        className={style.img}
      />
      <div className={style.title}>
        {tvShow.name.length > max_title_character
          ? tvShow.name.slice(0, max_title_character) + "..."
          : tvShow.name}
      </div>
    </div>
  );
}
