import React from "react";

import { FilterContainer, Chip, Text } from "./styles";

export const Filter = () => {
  return (
    <>
      <Text>Filtrar por:</Text>
      <FilterContainer>
        <Chip>Todos</Chip>
        <Chip>A - Z</Chip>
        <Chip>Puntuación</Chip>
      </FilterContainer>
    </>
  );
};
