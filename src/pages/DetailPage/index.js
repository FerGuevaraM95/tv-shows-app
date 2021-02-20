import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { DetailHeader } from "../../components/DetailHeader";
import { DetailInfo } from "../../components/DetailInfo";
import { DetailSkeleton } from "../../components/DetailSkeleton";
import { getDataById } from "../../actions/showsActions";

const DetailPage = ({ match }) => {
  // Show ID
  const id = match.params.id || "";
  const dispatch = useDispatch();
  const show = useSelector((state) => state.shows.show);
  const loading = useSelector((state) => state.shows.loading);

  // Fetch show
  useEffect(() => {
    dispatch(
      getDataById(
        `https://api.themoviedb.org/3/tv/${id}?api_key=6b17ac3b7653f11d47fc4e9fc7c753c7&language=es-MX`
      )
    );
  }, [dispatch, id]);

  const {
    poster_path = "",
    vote_average = 0,
    vote_count = 0,
    popularity = 0,
    name = "",
    last_air_date = "",
    episode_run_time = [],
    type = "",
    genres = [],
    overview = "",
  } = show;

  const img = `https://image.tmdb.org/t/p/original${poster_path}`;

  if (loading) return <DetailSkeleton />;

  return (
    <div>
      <DetailHeader
        id={id}
        name={name}
        poster={img}
        vote={vote_average}
        voteCount={vote_count}
        popularity={popularity}
      />
      <DetailInfo
        name={name}
        lastAirDate={last_air_date}
        runTime={episode_run_time}
        type={type}
        genres={genres}
        overview={overview}
      />
    </div>
  );
};

export default DetailPage;
