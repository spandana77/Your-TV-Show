import { useEffect } from "react";
import { useState } from "react";
import style from "./style.module.css";
import { TVShowAPI } from "./tv-show";
export function App() {
  const [currentTVShow, setcurrentTVShow] = useState();

  async function fetchPopular() {
    const popularTVShowList = await TVShowAPI.fetchPopular();
    if (popularTVShowList.length > 0) {
      setcurrentTVShow(popularTVShowList[0]);
    }
  }
  useEffect(() => {
    fetchPopular();
  }, []);

  console.log(currentTVShow);
  return (
    <div className={style.main_container}>
      <div className={style.header}>
        <div className="row">
          <div className="col-4">
            <div>LOGO</div>
            <div>Subtitle</div>
          </div>
          <div className="col-md-12 col-lg-4">
            <input style={{ width: "100%" }} type="text" />
          </div>
        </div>
      </div>
      <div className={style.tv_show_detail}>TV Show detail</div>

      <div className={style.recommended_tv_shows}>Recommended TV shows</div>
    </div>
  );
}
