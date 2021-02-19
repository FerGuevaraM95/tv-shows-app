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
  SubSpan,
} from "./styles";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const DetailHeader = ({
  id,
  name,
  poster,
  vote,
  voteCount,
  popularity,
}) => {

  // Localstorage
  const [favorites, setFavorites] = useLocalStorage(
    "favorites",
    JSON.stringify([])
  );

  // Hanadle favorite in localstorage
  const handleFavorite = () => {
    const arrFavorites = JSON.parse(favorites);
    const newFavorites = arrFavorites.find((element) => element === id)
      ? arrFavorites.filter((element) => element !== id)
      : [...arrFavorites, id];
    setFavorites(JSON.stringify(newFavorites));
  };

  // print star color
  const printStar = () => {
    return JSON.parse(favorites).find((element) => element === id)
      ? star
      : starGray;
  };

  return (
    <Container>
      <Image src={poster} alt={name} loading="lazy" />
      <InfoCard>
        <ValueContainer>
          <Star src={star} alt="star" />
          <Span>
            {vote}
            <SubSpan>/10</SubSpan>
          </Span>
          <SpanLight>{voteCount}</SpanLight>
        </ValueContainer>
        <ValueContainer>
          <FavoriteStar onClick={handleFavorite} src={printStar()} alt="star" />
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
