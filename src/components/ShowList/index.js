import { ShowCard } from "../ShowCard";
import { List } from "./styles";

export const ShowList = ({ data }) => {

  const renderItems = (list = []) => {
    return list.map((show) => {
      const { id, name, poster_path, vote_average } = show;
      const img = `https://image.tmdb.org/t/p/original${poster_path}`;
      return (
        <ShowCard
          key={id}
          id={id}
          name={name}
          poster={img}
          vote={vote_average}
        />
      );
    });
  };

  return <List>{renderItems(data.results)}</List>;
};
