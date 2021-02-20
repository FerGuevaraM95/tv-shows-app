import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getData } from '../../actions/showsActions';
import { ShowList } from "../../components/ShowList";
import { ShowListSkeleton } from '../../components/ShowListSkeleton';
import { orderShows } from '../../utils/orderShows';

const AiringTodayPage = () => {

  const shows = useSelector((state) => state.shows.data);
  const loading = useSelector((state) => state.shows.loading);
  const order = useSelector((state) => state.shows.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData('https://api.themoviedb.org/3/tv/airing_today?api_key=6b17ac3b7653f11d47fc4e9fc7c753c7'));
  }, [dispatch]);

  if (loading) return <ShowListSkeleton />;

  return (
    <div>
      <ShowList data={orderShows(shows, order)} />
    </div>
  );
};

export default AiringTodayPage;
