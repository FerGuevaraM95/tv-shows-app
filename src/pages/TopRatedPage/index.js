import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getData } from '../../actions/showsActions';
import { ShowList } from "../../components/ShowList";

export const TopRatedPage = () => {

  const shows = useSelector((state) => state.shows);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData('https://api.themoviedb.org/3/tv/top_rated?api_key=6b17ac3b7653f11d47fc4e9fc7c753c7'));
  }, [])

  return (
    <div>
      <ShowList data={shows.data} />
    </div>
  );
};
