import style from "./style.module.scss";
//import { SMALL_IMG_COVER_BASE_URL } from "../../api/api";
import React from "react";

const max_title_character = 20;

interface TVShow {
  name: string;
  backdrop_path: string;
}

interface TvShowListItemProps {
  tvShow: TVShow;
  onClick: (tvShow: TVShow) => void;
}

export function TVShowListItem({ tvShow, onClick }: TvShowListItemProps) {
  const url: string = "https://image.tmdb.org/t/p/w300";

  const onClick_show = () => {
    onClick(tvShow);
  };
  return (
    <div onClick={onClick_show} className={style.container}>
      <img
        alt={tvShow.name}
        src={url + tvShow.backdrop_path}
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
