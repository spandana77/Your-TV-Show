import { useEffect } from "react";
import { useState } from "react";
import { backdrop_base_url } from "./config";
import style from "./style.module.css";
import { TVShowAPI } from "./tv-show";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import { Logo } from "./components/Logo/Logo";
import logoImg from "./assets/images/logo.png";
import { TVShowList } from "./components/TVShowList/TVShowList";
//import { TVShowListItem } from "./components/TVShowListItem/TVShowListItem";
import { SearchBar } from "./components/SearchBar/SearchBar";

export function App() {
  const [currentTVShow, setcurrentTVShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  async function fetchPopular() {
    try {
      const popularTVShowList = await TVShowAPI.fetchPopular();
      // console.log(popularTVShowList);
      if (popularTVShowList.length > 0) {
        setcurrentTVShow(popularTVShowList[0]);
      }
    } catch (error) {
      console.log("Can't fetch popular tv show because", error);
    }
  }
  //   async function fetchRecommendations(tvShowId) {
  //     try {
  //       const recommendationListResp = await TVShowAPI.fetchRecommendations(
  //         tvShowId
  //       );
  //       if (recommendationListResp && recommendationListResp.length > 0) {
  //         setRecommendationList(recommendationListResp.slice(0, 10));
  //       }
  //     } catch (error) {
  //       console.log("Error fetching recommendations", error);
  //     }
  //   }
  async function fetchRecommendations(tvShowId) {
    try {
      const recommendationListResp = await TVShowAPI.fetchRecommendations(
        tvShowId
      );
      if (recommendationListResp.length > 0) {
        setRecommendationList(recommendationListResp.slice(0, 10));
      }
    } catch (error) {
      console.log("Can't fetch recommended tv show because", error);
    }
  }

  async function fetchByTitle(title) {
    try {
      const searchResponse = await TVShowAPI.fetchByTitle(title);
      if (searchResponse.length > 0) {
        setcurrentTVShow(searchResponse[0]);
      }
    } catch (error) {
      console.log("Can't fetch tv show because", error);
    }
  }

  useEffect(() => {
    fetchPopular();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);
  console.log(recommendationList);

  //console.log(currentTVShow);
  function updateCurrentTVShow(tvShow) {
    setcurrentTVShow(tvShow);
  }
  return (
    <div
      className={style.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
    url("${backdrop_base_url}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={style.header}>
        <div className="row">
          <div className="col-4">
            <div>
              <Logo
                img={logoImg}
                title={"ZoroTV"}
                subtitle={"Find a show you may like"}
              />
            </div>
            {/* <div>Subtitle</div> */}
          </div>
          <div className="col-md-12 col-lg-4">
            {/* <input style={{ width: "100%" }} type="text" /> */}
            <SearchBar onSubmit={fetchByTitle} />
          </div>
        </div>
      </div>
      <div className={style.tv_show_detail}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>

      <div className={style.recommended_tv_shows}>
        {currentTVShow && (
          <TVShowList
            onClickItem={updateCurrentTVShow}
            tvShowList={recommendationList}
          />
        )}
      </div>
    </div>
  );
}
