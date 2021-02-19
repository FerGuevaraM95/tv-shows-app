import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getData } from '../../actions/showsActions';
import { ShowList } from "../../components/ShowList";
import { ShowListSkeleton } from '../../components/ShowListSkeleton';

const TopRatedPage = () => {

  const shows = useSelector((state) => state.shows.data);
  const loading = useSelector((state) => state.shows.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData('https://api.themoviedb.org/3/tv/top_rated?api_key=6b17ac3b7653f11d47fc4e9fc7c753c7'));
  }, []);

  if (loading) return <ShowListSkeleton />;

  return (
    <div>
      <ShowList data={shows} />
    </div>
  );
};

export default TopRatedPage;
