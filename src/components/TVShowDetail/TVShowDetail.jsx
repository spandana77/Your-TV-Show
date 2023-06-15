import style from "./style.module.css";

export function TVShowDetail({ tvShow }) {
  return (
    <div>
      <div className={style.title}>{tvShow.name}</div>
      <div className={style.rating}>{tvShow.vote_average / 2}/5</div>
      <div className={style.overview}>{tvShow.overview}</div>
      <div></div>
    </div>
  );
}
