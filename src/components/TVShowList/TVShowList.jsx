import React from "react";
import { TVShowListItem } from "../TvShowListItem/TvShowListItem";
import style from "./style.module.scss";

export function TvShowList({ tvShowList, onClickItem }) {
  return (
    <div>
      <div className={style.title}>You'll probably like:</div>
      <div className={style.list}>
        {tvShowList.map((tvShow) => {
          return (
            <span className={style.tv_show_item} key={tvShow.id}>
              <TVShowListItem tvShow={tvShow} onClick={onClickItem} />
            </span>
          );
        })}
      </div>
    </div>
  );
}
