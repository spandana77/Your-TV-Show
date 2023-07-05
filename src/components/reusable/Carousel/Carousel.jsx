import React, { useState, useEffect } from "react";
import style from "../../../css/style.module.css";
import { TVShowAPI } from "../../../api/tvShow";
import { TvShowList } from "../../TvShowList/TvShowList";
import { TVShowListItem } from "../../TvShowListItem/TvShowListItem";

export async function fetchPopular() {
  try {
    const popularTVShowList = await TVShowAPI.fetchPopular();
    // console.log(popularTVShowList);
    if (popularTVShowList.length > 0) {
      return popularTVShowList[0];
    }
  } catch (error) {
    console.log("Can't fetch popular tv show because", error);
  }
}

export async function fetchRecommendations(tvShowId) {
  try {
    const recommendationListResp = await TVShowAPI.fetchRecommendations(
      tvShowId
    );
    if (recommendationListResp.length > 0) {
      return recommendationListResp.slice(0, 10);
    }
  } catch (error) {
    console.log("Can't fetch recommended tv show because", error);
  }
}
export function Carousel({ onClickItem }) {
  const [currentTVShow, setcurrentTVShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const popularTvShow = await fetchPopular();
      if (popularTvShow) {
        setcurrentTVShow(popularTvShow);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      async function fetchRecommendationsData() {
        const recommendedShows = await fetchRecommendations(currentTVShow.id);
        if (recommendedShows) {
          setRecommendationList(recommendedShows);
        }
      }
      fetchRecommendationsData();
    }
  }, [currentTVShow]);

  function updateCurrentTVShow(tvShow) {
    setcurrentTVShow(tvShow);
  }

  return (
    <div>
      <div className={style.recommended_tv_shows}>
        {currentTVShow && (
          <TvShowList
            tvShowList={recommendationList}
            onClickItem={onClickItem}
          />
        )}
        {/* <TvShowList tvShowList={recommendationList} onClickItem={onClickItem} /> */}
      </div>
    </div>
  );
}
