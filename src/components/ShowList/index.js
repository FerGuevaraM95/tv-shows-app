import { ShowCard } from "../ShowCard";
import { List } from "./styles";

export const ShowList = () => {

  const shows = [1, 2, 3, 4, 5, 6];

  return (
    <List>
      {
        shows.map((show) =>(
          <ShowCard key={show} />
        ))
      }
    </List>
  );
};
