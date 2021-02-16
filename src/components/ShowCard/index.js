import Show from "../../images/show.png";
import star from "../../images/star.svg";
import { Card, ShowImage, ShowTitle, Raiting, RaitingBox, Star } from "./styles";

export const ShowCard = () => {
  return (
    <Card>
      <ShowImage src={Show} alt="Ford V Ferrari" />
      <ShowTitle>Ford V Ferrari</ShowTitle>
      <RaitingBox>
        <Star src={star} alt="star" />
        <Raiting>8.2</Raiting>
      </RaitingBox>
    </Card>
  );
};
