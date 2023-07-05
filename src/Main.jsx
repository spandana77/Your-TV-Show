// import { useEffect, useState } from "react";
import { BACKDROP_BASE_URL } from "./api/api";
import style from "./css/style.module.scss";
import logoImg from "./assets/images/logo.png";
import { TVShowAPI } from "./api/tvShow";
import { Logo } from "./components/Logo/Logo";
import { Carousel } from "./components/reusable/Carousel/Carousel";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { TVShowDetail } from "./components/TvShowDetail/TVShowDetail";
import { TVShowList } from "./components/TvShowList/TvShowList";
import { useEffect, useState } from "react";
import {
  fetchPopular,
  fetchRecommendations,
} from "./components/reusable/Carousel/Carousel";

console.log(process.env.ENV, "test");

export function Main() {
  const [currentTVShow, setcurrentTVShow] = useState();
  //   const [recommendationList, setRecommendationList] = useState([]);

  //   async function fetchPopular() {
  //     try {
  //       const popularTVShowList = await TVShowAPI.fetchPopular();
  //       // console.log(popularTVShowList);
  //       if (popularTVShowList.length > 0) {
  //         setcurrentTVShow(popularTVShowList[0]);
  //       }
  //     } catch (error) {
  //       console.log("Can't fetch popular tv show because", error);
  //     }
  //   }

  //   async function fetchRecommendations(tvShowId) {
  //     try {
  //       const recommendationListResp = await TVShowAPI.fetchRecommendations(
  //         tvShowId
  //       );
  //       if (recommendationListResp.length > 0) {
  //         setRecommendationList(recommendationListResp.slice(0, 10));
  //       }
  //     } catch (error) {
  //       console.log("Can't fetch recommended tv show because", error);
  //     }

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

  // useEffect(() => {
  //   fetchPopular();
  // }, []);

  // useEffect(() => {
  //   if (currentTVShow) {
  //     fetchRecommendations(currentTVShow.id);
  //   }
  // }, [currentTVShow]);
  // console.log(recommendationList);

  // console.log(currentTVShow);

  useEffect(() => {
    async function fetchData() {
      const popularTvShow = await fetchPopular();
      if (popularTvShow) {
        setcurrentTVShow(popularTvShow);
        console.log("Popular show", popularTvShow);
      }
      const recommendations = await fetchRecommendations(popularTvShow.id);
      if (recommendations) {
        console.log("Recommended show", recommendations);
      }
    }
    fetchData();
  }, []);

  function updateCurrentTVShow(tvShow) {
    setcurrentTVShow(tvShow);
  }
  return (
    <div
      className={style.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
      url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      {/* <Recommended /> */}

      <div className={style.header}>
        <div className="row">
          <div className="col-4">
            <div>
              <Logo
                img={logoImg}
                title={"watowatch"}
                subtitle={"Find a show you may like"}
              />
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar onSubmit={fetchByTitle} />
          </div>
        </div>
      </div>
      <div className={style.tv_show_detail}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      {/* <div className={style.recommended_tv_shows}>
          {currentTVShow && (
            <TVShowList
              onClickItem={updateCurrentTVShow}
              tvShowList={recommendationList}
            />
          )}
        </div> */}
      <Carousel onClickItem={updateCurrentTVShow} />
    </div>
  );
}
