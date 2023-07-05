import style from "./style.module.scss";

export function Logo({ title, subtitle, img }) {
  return (
    <>
      <div className={style.container}>
        <img className={style.img} src={img} alt="Logo" />
        <div className={style.title}>{title}</div>
      </div>
      <div className={style.subtitle}>{subtitle}</div>
    </>
  );
}
