import Show from "../../images/show.png";
import star from "../../images/star.svg";
import starGray from "../../images/star-gray.svg";
import {
  Container,
  Image,
  InfoCard,
  ValueContainer,
  Star,
  FavoriteStar,
  PopularitySquad,
  Span,
  SpanLight,
  SubSpan
} from "./styles";

export const DetailHeader = () => {
  return (
    <Container>
      <Image src={Show} alt="Ford V Ferrari" />
      <InfoCard>
        <ValueContainer>
          <Star src={star} alt="star" />
          <Span>8.2<SubSpan>/10</SubSpan></Span>
          <SpanLight>150212</SpanLight>
        </ValueContainer>
        <ValueContainer>
          <FavoriteStar src={starGray} alt="star" />
          <Span>Favorito</Span>
        </ValueContainer>
        <ValueContainer>
          <PopularitySquad>86</PopularitySquad>
          <Span>Popularidad</Span>
        </ValueContainer>
      </InfoCard>
    </Container>
  );
};
