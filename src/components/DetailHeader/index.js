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

export const DetailHeader = ({ name, poster, vote, voteCount, popularity }) => {
  return (
    <Container>
      <Image src={poster} alt={name} />
      <InfoCard>
        <ValueContainer>
          <Star src={star} alt="star" />
          <Span>{vote}<SubSpan>/10</SubSpan></Span>
          <SpanLight>{voteCount}</SpanLight>
        </ValueContainer>
        <ValueContainer>
          <FavoriteStar src={starGray} alt="star" />
          <Span>Favorito</Span>
        </ValueContainer>
        <ValueContainer>
          <PopularitySquad>{Math.trunc(popularity)}</PopularitySquad>
          <Span>Popularidad</Span>
        </ValueContainer>
      </InfoCard>
    </Container>
  );
};
