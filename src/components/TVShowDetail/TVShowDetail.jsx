import { FiveStarRating } from "../FiveStarRating/FiveStarRating";
import style from "./style.module.scss";

export function TVShowDetail({ tvShow }) {
  const rating = tvShow.vote_average / 2;
  return (
    <div>
      <div className={style.title}>{tvShow.name}</div>
      <div className={style.rating_container}>
        <FiveStarRating rating={rating} />
        <span className={style.rating}>{rating}/5</span>
      </div>
      <div className={style.overview}>{tvShow.overview}</div>
      <div></div>
    </div>
  );
}
