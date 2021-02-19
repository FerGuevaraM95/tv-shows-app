import star from "../../images/star.svg";
import {
  Card,
  ShowImage,
  ShowTitle,
  Raiting,
  RaitingBox,
  Star,
} from "./styles";

export const ShowCard = ({ id, name, poster, vote }) => {
  return (
    <Card>
      <ShowImage src={poster} alt={name} loading="lazy" />
      <h2>
        <ShowTitle to={`/show-detail/${id}`}>{name}</ShowTitle>
      </h2>
      <RaitingBox>
        <Star src={star} alt="star" />
        <Raiting>{vote}</Raiting>
      </RaitingBox>
    </Card>
  );
};
