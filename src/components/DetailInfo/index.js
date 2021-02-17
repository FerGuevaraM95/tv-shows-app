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

export const DetailInfo = () => {
  return (
    <Container>
      <Title>Ford V Ferrari</Title>
      <InfoContainer>
        <Info>2019</Info>
        <Info>PG - 13</Info>
        <Info>2h 32min</Info>
      </InfoContainer>
      <Categories>
        <CategoryChip>Acción</CategoryChip>
        <CategoryChip>Suspenso</CategoryChip>
        <CategoryChip>Drama</CategoryChip>
      </Categories>
      <Summary>
        <Subtitle>Plot Summary</Subtitle>
        <Text>
          American car designer Carroll Shelby and driver Kn Miles battle
          corporate interference and the laws of physics to build a
          revolutionary race car for Ford in order.
        </Text>
      </Summary>
    </Container>
  );
};
