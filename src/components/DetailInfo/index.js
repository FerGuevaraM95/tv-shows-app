import {
  Container,
  Info,
  InfoContainer,
  Title,
  Categories,
  CategoryChip,
  Summary,
  Subtitle,
  Text,
} from "./styles";

export const DetailInfo = ({
  name,
  lastAirDate,
  runTime,
  type,
  genres,
  overview,
}) => {

  // Show only year
  const onlyYear = (date = "") => {
    return date.split("-")[0] || "";
  };

  // Map genres
  const setGenres = (arr = []) => {
    return arr.map((genre) => {
      const { id, name } = genre;
      return <CategoryChip key={id}>{name}</CategoryChip>;
    });
  };

  // Approximate time
  const setApproxRunTime = (arr = []) => {
    return (arr.reduce((acc, curr) => (acc + curr), 0) / arr.length) || 0;
  };

  return (
    <Container>
      <Title>{name}</Title>
      <InfoContainer>
        <Info>{onlyYear(lastAirDate)}</Info>
        <Info>{setApproxRunTime(runTime)}min</Info>
        <Info>{type}</Info>
      </InfoContainer>
      <Categories>{setGenres(genres)}</Categories>
      <Summary>
        <Subtitle>Sinopsis</Subtitle>
        <Text>{overview}</Text>
      </Summary>
    </Container>
  );
};
